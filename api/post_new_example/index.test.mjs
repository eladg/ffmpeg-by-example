import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import yaml from "js-yaml";
import handler, { getFilename, getTags } from "./index.mjs";

const validBody = {
  id: "TEST1234",
  version: "1.0",
  enabled: true,
  example_type: "no-preview",
  example_player_data: null,
  title: "Scale a video to 720p",
  description: "Scale any input video to 720p keeping the aspect ratio.",
  author_name: "Test Author",
  author_email: null,
  terminal_command: "ffmpeg -i input.mp4 -vf scale=-2:720 output.mp4",
  categories: ["video"],
  tags: ["scale", null, ""],
};

const post = (body) => new Request("http://localhost/.netlify/functions/post_new_example", {
  method: "POST",
  body: JSON.stringify(body),
});

let calls;
const realFetch = globalThis.fetch;

beforeEach(() => {
  calls = [];
  process.env.FFMPEG_BY_EXAMPLE_GITHUB_REPO = "owner/repo";
  process.env.FFMPEG_BY_EXAMPLE_GITHUB_TOKEN = "token";
  process.env.FFMPEG_BY_EXAMPLE_EXAMPLES_PATH = "content/examples";
  globalThis.fetch = async (url, init) => {
    calls.push({ url, method: init.method, body: init.body && JSON.parse(init.body) });
    const data = init.method === "GET" ? { object: { sha: "abc123" } } : {};
    return new Response(JSON.stringify(data), { status: init.method === "GET" ? 200 : 201 });
  };
});

afterEach(() => {
  globalThis.fetch = realFetch;
});

test("getFilename builds <id>/<slug>.md", () => {
  assert.equal(getFilename(validBody), "TEST1234/scale_video_to_720p.md");
});

test("getTags drops empty tags", () => {
  assert.deepEqual(getTags(validBody.tags), ["scale"]);
});

test("OPTIONS returns 200 with CORS headers", async () => {
  const res = await handler(new Request("http://localhost/", { method: "OPTIONS" }));
  assert.equal(res.status, 200);
  assert.equal(res.headers.get("Access-Control-Allow-Origin"), "*");
});

test("rejects invalid input with 403", async () => {
  const res = await handler(post({ ...validBody, tags: [null] }));
  assert.equal(res.status, 403);
  assert.match((await res.json()).message, /tags/);
  assert.equal(calls.length, 0);
});

test("creates branch, commits the example and opens a PR", async () => {
  const res = await handler(post(validBody));
  assert.equal(res.status, 200);

  assert.deepEqual(calls.map(c => `${c.method} ${c.url}`), [
    "GET https://api.github.com/repos/owner/repo/git/ref/heads/main",
    "POST https://api.github.com/repos/owner/repo/git/refs",
    "PUT https://api.github.com/repos/owner/repo/contents/content/examples/TEST1234/scale_video_to_720p.md",
    "POST https://api.github.com/repos/owner/repo/pulls",
  ]);
  assert.deepEqual(calls[1].body, { ref: "refs/heads/examples/TEST1234", sha: "abc123" });
  assert.equal(calls[2].body.branch, "examples/TEST1234");
  assert.deepEqual(calls[3].body.head, "examples/TEST1234");

  const written = Buffer.from(calls[2].body.content, "base64").toString("utf8");
  const frontmatter = yaml.load(written.split("---\n")[1]);
  assert.equal(frontmatter.id, "TEST1234");
  assert.equal(frontmatter.author, "Test Author");
  assert.deepEqual(frontmatter.tags, ["scale"]);
  assert.equal(frontmatter.filename, "TEST1234/scale_video_to_720p.md");
});

test("returns 502 with GitHub's error when GitHub fails", async () => {
  globalThis.fetch = async () => new Response(JSON.stringify({ message: "Bad credentials" }), { status: 401 });
  const res = await handler(post(validBody));
  assert.equal(res.status, 502);
  assert.match((await res.json()).message, /Could not find main: .*\(401\): Bad credentials/);
});

test("returns 500 naming missing environment variables", async () => {
  delete process.env.FFMPEG_BY_EXAMPLE_GITHUB_TOKEN;
  const res = await handler(post(validBody));
  assert.equal(res.status, 500);
  assert.match((await res.json()).message, /FFMPEG_BY_EXAMPLE_GITHUB_TOKEN not set/);
  assert.equal(calls.length, 0);
});
