// Parses FFmpeg's Changelog (https://github.com/FFmpeg/FFmpeg/blob/master/Changelog)
// into the data model behind /versions/. Pure functions only: no I/O.

export const SOURCE_URL = "https://raw.githubusercontent.com/FFmpeg/FFmpeg/refs/heads/master/Changelog";

// Releases before 1.0 are collapsed into one version with this slug.
// The slug isn't a real FFmpeg release; each 0.x release is kept in `releases`.
export const LEGACY_SLUG = "0.x";

// Slugs that can never be versions (route names under /versions/).
export const RESERVED_SLUGS = ["latest"];

const HEADER = /^version\s+(\S+?):\s*(.*)$/;
const ENTRY = /^-\s+(.*)$/;              // "- text" at column 0
const SUBITEM = /^\s{2,}[-*]\s+(.*)$/;   // "    - text" or "    * text", indented
const VERSION = /^(\d+)\.(\d+)(?:\.(\d+))?(?:-([0-9A-Za-z.]+))?$/;
const SLUG = /^[0-9][0-9a-z.-]*$/;

const squash = (s) => s.replace(/\s+/g, " ").trim();

// Entry key used by examples' `changelog:` front matter: the entry text, lowercased,
// accents dropped, runs of anything else turned into "-", capped at ENTRY_SLUG_MAX
// characters on a "-" boundary. It deliberately leaves out the version: FFmpeg
// sometimes moves an entry to another version's section, but rarely rewords it.
// The same text in two versions gives the same slug (3 cases), which links both.
export const ENTRY_SLUG_MAX = 80;
export function entrySlug(text) {
  const s = text.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (s.length <= ENTRY_SLUG_MAX) return s;
  const cut = s.slice(0, ENTRY_SLUG_MAX);
  const dash = cut.lastIndexOf("-");
  return dash > ENTRY_SLUG_MAX / 2 ? cut.slice(0, dash) : cut;
}

// parseChangelog(text) -> { next_version, versions, ignored }
//   versions: every release in file order (newest first), 0.x releases
//             collapsed into one LEGACY_SLUG version at the end
//   entries:  [{ text, slug }], one per "- " line, with its wrapped lines joined in.
//             Entries are flat: indented sub-items ("    - x" / "    * x", only under
//             7.1 and 0.9) and their wrapped lines are skipped (owner's decision).
//   ignored:  lines that were neither headers, entries nor continuations
export function parseChangelog(text) {
  const raw = [];        // every "version X:" block, file order
  const ignored = [];
  let current = null;    // current version block
  let entry = null;      // entry that continuation lines extend
  let inSubitem = false; // inside a skipped sub-item (its wrapped lines are skipped too)

  for (const line of text.replace(/\r\n?/g, "\n").split("\n")) {
    const header = line.match(HEADER);
    if (header) {
      current = { name: header[1], note: squash(header[2]) || null, entries: [] };
      raw.push(current);
      entry = null;
      continue;
    }
    if (!current) continue;                  // preamble before the first header

    if (line.trim() === "") { entry = null; inSubitem = false; continue; }  // a blank line ends an entry

    const e = line.match(ENTRY);
    if (e) {
      entry = { text: squash(e[1]) };
      current.entries.push(entry);
      inSubitem = false;
      continue;
    }
    if (entry && SUBITEM.test(line)) {       // sub-item: skipped
      inSubitem = true;
      continue;
    }
    if (entry) {                             // wrapped line, at any indent (0.9 has unindented ones)
      if (!inSubitem) entry.text = squash(`${entry.text} ${line}`);
      continue;
    }
    ignored.push(line);                      // e.g. "# codespell:off", ".. And lots more ..."
  }

  for (const v of raw) for (const e of v.entries) e.slug = entrySlug(e.text);

  const next_version = raw.filter(v => v.name === "<next>").flatMap(v => v.entries);
  const released = raw.filter(v => v.name !== "<next>").map(toVersion);
  const legacy = released.filter(v => v.major === 0);
  const versions = released.filter(v => v.major !== 0);
  if (legacy.length) versions.push(legacyVersion(legacy));

  return { next_version, versions, ignored };
}

function toVersion({ name, note, entries }) {
  const m = name.match(VERSION);
  return {
    version: name,
    slug: name.toLowerCase(),
    major: m ? Number(m[1]) : null,
    minor: m ? Number(m[2]) : null,
    patch: m && m[3] !== undefined ? Number(m[3]) : null,
    prerelease: m && m[4] !== undefined ? m[4] : null,
    note,
    entries,
  };
}

function legacyVersion(releases) {
  const oldest = releases[releases.length - 1].version;
  const newest = releases[0].version;
  return {
    version: LEGACY_SLUG,
    slug: LEGACY_SLUG,
    major: 0,
    minor: null,
    patch: null,
    prerelease: null,
    note: `Releases before 1.0 (${oldest} to ${newest})`,
    entries: [],
    releases,
  };
}

// Sanity checks on a parse of the live file. Returns a list of problems;
// an empty list means the parse looks right.
export function validateChangelog(parsed, { minReleases = 50 } = {}) {
  const problems = [];
  const { versions } = parsed;
  const all = versions.flatMap(v => v.releases ? v.releases : [v]);

  if (all.length < minReleases) problems.push(`only ${all.length} releases parsed (expected at least ${minReleases})`);
  if (!all.some(v => v.version === "0.3")) problems.push("the oldest release, 0.3, is missing");
  if (!versions.length || versions[0].major === null || versions[0].minor === null) {
    problems.push(`the newest version isn't numeric (${versions[0]?.version})`);
  }
  for (const v of all) {
    if (!v.entries.length && !v.note) problems.push(`version ${v.version} has no entries and no note`);
    for (const e of v.entries) if (!e.slug) problems.push(`an entry in ${v.version} has no slug ("${e.text}")`);
    if (v.major === null) problems.push(`version ${v.version} isn't a version number`);
  }
  const slugs = versions.map(v => v.slug);
  for (const slug of slugs) {
    if (!SLUG.test(slug)) problems.push(`slug "${slug}" isn't URL-safe`);
    if (RESERVED_SLUGS.includes(slug)) problems.push(`slug "${slug}" is reserved`);
  }
  if (new Set(slugs).size !== slugs.length) problems.push("duplicate version slugs");
  return problems;
}

// The JSON written to data/ffmpeg/changelog.json. Key order is fixed by
// construction, so the output is deterministic.
export function toDocument(parsed, fetchedAt) {
  return {
    source: SOURCE_URL,
    fetched_at: fetchedAt,
    latest: parsed.versions[0].slug,
    next_version: parsed.next_version,
    versions: parsed.versions,
  };
}

export const serialize = (doc) => JSON.stringify(doc, null, 2) + "\n";

// True when two documents differ in anything but fetched_at.
export function contentChanged(a, b) {
  if (!a || !b) return true;
  const strip = ({ fetched_at, ...rest }) => rest;
  return serialize(strip(a)) !== serialize(strip(b));
}
