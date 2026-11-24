// Build step: fetch FFmpeg's Changelog and write data/ffmpeg/changelog.json.
// Run by scripts/build.mjs (`npm run build`), before Hugo.
//
// - fetch fails (network, non-200): warn, keep the committed JSON, succeed so the deploy goes out
// - parse looks wrong: fail without touching the JSON (a bad parse must not publish)
// - content unchanged: no write, so reruns produce no git diff (fetched_at only moves on change)

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SOURCE_URL, parseChangelog, validateChangelog, toDocument, serialize, contentChanged } from "./changelog-parser.mjs";

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../data/ffmpeg/changelog.json");
const TIMEOUT_MS = 20_000;
const rel = (p) => relative(process.cwd(), p);

// Returns true on success (including a skipped fetch), false when the build must stop.
export async function fetchChangelog() {
  let text;
  try {
    const res = await fetch(SOURCE_URL, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    text = await res.text();
  } catch (err) {
    console.warn(`changelog: fetch failed (${err.message}); keeping the committed ${rel(OUT)}`);
    return true;
  }

  const parsed = parseChangelog(text);
  const problems = validateChangelog(parsed);
  if (problems.length) {
    console.error(`changelog: the parse looks wrong, ${rel(OUT)} was not changed:`);
    for (const p of problems) console.error(`  - ${p}`);
    return false;
  }

  const existing = await readFile(OUT, "utf8").then(JSON.parse, () => null);
  const releases = parsed.versions.reduce((n, v) => n + (v.releases ? v.releases.length : 1), 0);
  const summary = `${parsed.versions.length} versions (${releases} releases), latest ${parsed.versions[0].slug}, ${parsed.next_version.length} next_version entries, ${parsed.ignored.length} ignored lines`;

  const fresh = toDocument(parsed, new Date().toISOString().replace(/\.\d+Z$/, "Z"));
  if (!contentChanged(existing, fresh)) {
    console.log(`changelog: unchanged, ${summary}`);
    return true;
  }
  await mkdir(dirname(OUT), { recursive: true });
  await writeFile(OUT, serialize(fresh));
  console.log(`changelog: wrote ${rel(OUT)}, ${summary}`);
  return true;
}
