// Examples' links into the Changelog data: `versions:` (version slugs) and
// `changelog:` (entry slugs). Used by the changelog build step so that an upstream
// edit to FFmpeg's Changelog can't break a deploy: if the fetched Changelog would
// break links that work with the committed data/ffmpeg/changelog.json, the step
// keeps the committed file and warns instead.

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

// [{ file, versions: [...], changelog: [...] }] for every .md under `dir`
export async function readExampleLinks(dir) {
  const files = (await readdir(dir, { recursive: true })).filter(f => f.endsWith(".md")).sort();
  const examples = [];
  for (const file of files) {
    const match = (await readFile(join(dir, file), "utf8")).match(FRONT_MATTER);
    const fm = match ? (yaml.load(match[1]) || {}) : {};
    const list = (value) => Array.isArray(value) ? value.map(String) : [];
    examples.push({ file, versions: list(fm.versions), changelog: list(fm.changelog) });
  }
  return examples;
}

// every entry of a parsed Changelog or a changelog.json document, with its version
const entriesOf = (doc) => doc.versions.flatMap(v => (v.releases || [v]).flatMap(r =>
  r.entries.map(e => ({ ...e, version: r.version }))));

// links that don't resolve in `doc`: [{ file, field, value }]
export function unresolvedLinks(doc, examples) {
  const versions = new Set(doc.versions.map(v => v.slug));
  const entries = new Set(entriesOf(doc).map(e => e.slug));
  return examples.flatMap(({ file, versions: vs, changelog }) => [
    ...vs.filter(v => !versions.has(v)).map(value => ({ file, field: "versions", value })),
    ...changelog.filter(s => !entries.has(s)).map(value => ({ file, field: "changelog", value })),
  ]);
}

const key = (link) => `${link.file}\0${link.field}\0${link.value}`;
const words = (text) => new Set(text.toLowerCase().match(/[a-z0-9]+/g) || []);

// the fetched entry most like `text` (word overlap), or null when nothing is close
function closestEntry(text, entries) {
  const a = words(text);
  let best = null, bestScore = 0;
  for (const e of entries) {
    const b = words(e.text);
    const shared = [...a].filter(w => b.has(w)).length;
    const score = shared / (a.size + b.size - shared || 1);
    if (score > bestScore) { best = e; bestScore = score; }
  }
  return bestScore >= 0.4 ? best : null;
}

// Links that work with the committed document but not with the fetched one, each
// with a `suggestion` (the closest fetched entry or null) for changelog links.
// Links already broken in the committed document are left to the Hugo build's
// validation, which reports them either way.
export function linksBrokenByUpdate(committed, fetched, examples) {
  if (!committed) return [];
  const before = new Set(unresolvedLinks(committed, examples).map(key));
  const committedEntries = new Map(entriesOf(committed).map(e => [e.slug, e]));
  const fetchedEntries = entriesOf(fetched);
  return unresolvedLinks(fetched, examples)
    .filter(link => !before.has(key(link)))
    .map(link => {
      const old = link.field === "changelog" && committedEntries.get(link.value);
      return { ...link, suggestion: old ? closestEntry(old.text, fetchedEntries) : null };
    });
}
