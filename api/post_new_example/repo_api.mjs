const GITHUB_API = "https://api.github.com";

const getConfig = () => ({
  repository:   process.env.FFMPEG_BY_EXAMPLE_GITHUB_REPO,
  token:        process.env.FFMPEG_BY_EXAMPLE_GITHUB_TOKEN,
  examplesPath: process.env.FFMPEG_BY_EXAMPLE_EXAMPLES_PATH,
});

/**
 * @returns {string[]} names of required environment variables that are not set
 */
export const getMissingConfig = () => {
  return [
    "FFMPEG_BY_EXAMPLE_GITHUB_REPO",
    "FFMPEG_BY_EXAMPLE_GITHUB_TOKEN",
    "FFMPEG_BY_EXAMPLE_EXAMPLES_PATH",
  ].filter(name => !process.env[name]);
};

/**
 * @param {string} method - HTTP method
 * @param {string} path - path under /repos/{owner}/{repo}
 * @param {Object} [body] - JSON body
 */
const request = async (method, path, body) => {
  const { repository, token } = getConfig();

  const response = await fetch(`${GITHUB_API}/repos/${repository}${path}`, {
    method,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "ffmpegbyexample.com",
      ...(body && { "Content-Type": "application/json" }),
    },
    body: body && JSON.stringify(body),
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(`GitHub ${method} ${path} failed (${response.status}): ${data?.message}`);
  }
  return data;
};

/**
 * @param {string} branchName - Name of the branch to get SHA ref for
 */
export const getRefHeadOfBranch = async (branchName) => {
  const data = await request("GET", `/git/ref/heads/${branchName}`);
  return data.object.sha;
};

/**
 * @param {string} branchName - Name of the new branch
 * @param {string} ref - SHA ref to branch out of
 */
export const createNewBranchFromRef = async (branchName, ref) => {
  return request("POST", "/git/refs", {
    ref: `refs/heads/${branchName}`,
    sha: ref,
  });
};

/**
 * @param {Object} options - The options object to write new example
 * @param {string} options.data_yaml - YAML String including Hugo's meta formatter
 * @param {string} options.filename - filename to be written to repo
 * @param {string} options.branch - the branch to write the example file to
 * @param {string} options.commit_msg - commit message to be pushed to repo
 */
export const writeNewExampleToRepo = async (options) => {
  const { examplesPath } = getConfig();
  const { commit_msg, data_yaml, branch, filename } = options;

  return request("PUT", `/contents/${examplesPath}/${filename}`, {
    message: commit_msg,
    content: Buffer.from(data_yaml, "utf8").toString("base64"),
    branch,
  });
};

/**
 * @param {string} filename - name of the new example file
 * @param {string} fromBranch - name of the branch we want the PR to come from
 * @param {string} toBranch - name of the branch we want to merge to
 */
export const createNewPullRequest = async (filename, fromBranch, toBranch) => {
  return request("POST", "/pulls", {
    title: `🎉 New Example: ${filename}`,
    body: `New Example: ${filename}\n\nPlease preview this example on the netlify deploy-preview bellow 🌻.\n`,
    head: fromBranch,
    base: toBranch,
  });
};
