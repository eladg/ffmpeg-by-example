import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseChangelog, validateChangelog, toDocument, serialize, contentChanged, entrySlug, LEGACY_SLUG } from "./changelog-parser.mjs";

const sample = readFileSync(new URL("./fixtures/Changelog.sample", import.meta.url), "utf8");
const parsed = parseChangelog(sample);
const bySlug = Object.fromEntries(parsed.versions.map(v => [v.slug, v]));
const legacy = bySlug[LEGACY_SLUG];

test("<next> goes to next_version, not versions", () => {
  assert.deepEqual(parsed.next_version, [{ text: "unreleased thing", slug: "unreleased-thing" }]);
  assert.ok(!parsed.versions.some(v => v.version.includes("next")));
});

test("versions >= 1.0 stay in file order, 0.x is collapsed at the end", () => {
  assert.deepEqual(parsed.versions.map(v => v.slug), ["7.1", "7.0", "1.0", "0.x"]);
  assert.deepEqual(legacy.releases.map(v => v.slug), ["0.9", "0.4.9-pre1", "0.3.2", "0.3"]);
  assert.equal(legacy.note, "Releases before 1.0 (0.3 to 0.9)");
  assert.deepEqual(legacy.entries, []);
});

test("numeric fields, pre-release and trailing note", () => {
  const v = bySlug["7.1"];
  assert.deepEqual([v.major, v.minor, v.patch, v.prerelease, v.note], [7, 1, null, null, null]);
  const pre = legacy.releases.find(r => r.slug === "0.4.9-pre1");
  assert.deepEqual([pre.major, pre.minor, pre.patch, pre.prerelease], [0, 4, 9, "pre1"]);
  const fixes = legacy.releases.find(r => r.slug === "0.3.2");
  assert.deepEqual([fixes.major, fixes.minor, fixes.patch, fixes.note], [0, 3, 2, "small fixes"]);
  assert.equal(legacy.releases.at(-1).note, "initial public release");
  assert.deepEqual(legacy.releases.at(-1).entries, []);
});

test("entries are flat: wrapped lines joined, '-' sub-items and their wrapped lines skipped", () => {
  assert.deepEqual(bySlug["7.1"].entries.map(e => e.text), [
    "first entry",
    "a long entry that wraps onto a second line and a third",
    "minor stream specifier syntax changes:",
    "entry right after the sub-items",
  ]);
});

test("unindented continuation kept, '*' sub-items skipped (0.9's avconv entry)", () => {
  assert.deepEqual(legacy.releases[0].entries.map(e => e.text), [
    "added avconv, except for a few changes. The changes are:",
  ]);
});

test("stray lines are ignored, not treated as headers or entries", () => {
  assert.deepEqual(parsed.ignored, ["# codespell:off", ".. And lots more new enhancements and fixes."]);
  assert.equal(bySlug["7.0"].entries.length, 1);
});

test("validation: the fixture is too small, a real-sized parse passes", () => {
  assert.match(validateChangelog(parsed).join("\n"), /only 7 releases/);
  assert.deepEqual(validateChangelog(parsed, { minReleases: 7 }), []);
});

test("validation catches a broken parse", () => {
  const broken = parseChangelog("version 7.1:\n\nversion 7.0:\n- x\n");
  const problems = validateChangelog(broken, { minReleases: 1 }).join("\n");
  assert.match(problems, /0\.3, is missing/);
  assert.match(problems, /7\.1 has no entries and no note/);
  assert.match(validateChangelog(parseChangelog("version master:\n- x\n"), { minReleases: 1 }).join("\n"), /isn't numeric/);
  assert.match(validateChangelog(parseChangelog(""), { minReleases: 1 }).join("\n"), /only 0 releases/);
});

test("document: deterministic, latest = newest, fetched_at doesn't count as a change", () => {
  const a = toDocument(parsed, "2026-01-01T00:00:00Z");
  const b = toDocument(parseChangelog(sample), "2026-11-24T00:00:00Z");
  assert.equal(a.latest, "7.1");
  assert.deepEqual(Object.keys(a), ["source", "fetched_at", "latest", "next_version", "versions"]);
  assert.equal(contentChanged(a, b), false);
  assert.equal(contentChanged(a, toDocument(parseChangelog(sample.replace("first entry", "changed")), "x")), true);
  assert.equal(contentChanged(null, a), true);
  assert.equal(serialize(a), serialize(JSON.parse(serialize(a))));
});

test("entry slugs: from the text only, URL-safe, capped on a word boundary", () => {
  assert.equal(entrySlug("Vulkan H.264 encoder"), "vulkan-h-264-encoder");
  assert.equal(entrySlug("ASF fixes"), "asf-fixes");
  assert.equal(entrySlug("-map ....:m:<key>:<val>:? (Péter's) "), "map-m-key-val-peter-s");
  const long = entrySlug("word ".repeat(40));
  assert.ok(long.length <= 80 && !long.endsWith("-") && long.startsWith("word-word"));
  assert.equal(bySlug["7.1"].entries[1].slug, "a-long-entry-that-wraps-onto-a-second-line-and-a-third");
  assert.deepEqual(Object.keys(bySlug["7.0"].entries[0]), ["text", "slug"]);
  assert.match(validateChangelog(parseChangelog("version 7.1:\n- ...\n"), { minReleases: 1 }).join("\n"), /no slug/);
});

test("upstream changes that break example links are caught, with a suggestion", async () => {
  const { unresolvedLinks, linksBrokenByUpdate } = await import("./example-links.mjs");
  const committed = parseChangelog(sample);
  const reworded = parseChangelog(sample.replace("- seven zero entry", "- seven zero entry, reworded"));
  const examples = [
    { file: "A/a.md", versions: ["7.0"], changelog: ["seven-zero-entry"] },
    { file: "B/b.md", versions: ["7.l"], changelog: ["first-entry"] },          // already broken: left to Hugo
  ];
  assert.deepEqual(unresolvedLinks(committed, examples), [{ file: "B/b.md", field: "versions", value: "7.l" }]);
  assert.deepEqual(linksBrokenByUpdate(committed, committed, examples), []);
  const broken = linksBrokenByUpdate(committed, reworded, examples);
  assert.equal(broken.length, 1);
  assert.deepEqual([broken[0].file, broken[0].field, broken[0].value], ["A/a.md", "changelog", "seven-zero-entry"]);
  assert.equal(broken[0].suggestion.slug, "seven-zero-entry-reworded");
  assert.equal(broken[0].suggestion.version, "7.0");
  assert.deepEqual(linksBrokenByUpdate(null, reworded, examples), []);          // no committed file: nothing to keep
  const versionGone = parseChangelog(sample.replace("version 7.0:", "version 7.0.1:"));
  assert.deepEqual(linksBrokenByUpdate(committed, versionGone, examples).map(l => l.field + ":" + l.value), ["versions:7.0"]);
});

test("readExampleLinks reads versions and changelog from the real examples", async () => {
  const { readExampleLinks } = await import("./example-links.mjs");
  const examples = await readExampleLinks(new URL("../content/examples", import.meta.url).pathname);
  assert.ok(examples.length >= 50);
  const xfade = examples.find(e => e.file.startsWith("J2DDVY12/"));
  assert.deepEqual(xfade.changelog, ["xfade-video-filter"]);
  assert.ok(examples.every(e => e.versions.every(v => typeof v === "string")));
});
