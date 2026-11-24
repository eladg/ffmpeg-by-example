import yaml from "js-yaml";
import * as responses from "./responses.mjs";
import * as repo_api from "./repo_api.mjs";

const BRANCH_PREFIX  = "examples"
const PR_TO_BRANCH_FROM = "main";

// optional `changelog`: slugs of FFmpeg Changelog entries (data/ffmpeg/changelog.json).
// Only the format is checked here; the site build fails on a slug that doesn't exist,
// so a bad one shows up in the pull request's deploy preview.
const MAX_CHANGELOG = 3;
const ENTRY_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ENTRY_SLUG_MAX = 80;

export const validateInput = (params) => {
  if (!("id" in params)) {
    throw new Error("Invalid data given! ('id' is missing)")
  }

  if (!("title" in params)) {
    throw new Error("Invalid data given! ('title' is missing)")
  }
  if (!("description" in params) || (params.description.length < 10 )) {
    throw new Error("Invalid data given! ('description' is missing or too short)")
  }
  if (!("author_name" in params) || (params.author_name.length < 3)) {
    throw new Error("Invalid data given! ('author_name' is missing or too short)")
  }

  if (!Array.isArray(params.categories) || !params.categories.some(Boolean)) {
    throw new Error("Invalid data given! ('categories' array must have at least one category)")
  }
  if (!Array.isArray(params.tags) || !params.tags.some(Boolean)) {
    throw new Error("Invalid data given! ('tags' array must have at least one tag)")
  }
  if (!("terminal_command" in params) || (params.terminal_command.length < 10)) {
    throw new Error("Invalid data given! ('terminal_command' is missing or too short)")
  }
  if (params.changelog != null && (
      !Array.isArray(params.changelog) ||
      params.changelog.length > MAX_CHANGELOG ||
      !params.changelog.every(slug => typeof slug === "string" && slug.length <= ENTRY_SLUG_MAX && ENTRY_SLUG.test(slug)))) {
    throw new Error(`Invalid data given! ('changelog' must be a list of up to ${MAX_CHANGELOG} Changelog entry slugs)`)
  }

  return true;
}

export const getFilename = (options) => {
  const { title, id } = options
  let filename = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase().split("_").filter(word => word.length > 1).join("_");
  let filepath = id + "/" + filename + ".md"

  return filepath;
}

export const getAuthorDisplayName = (name, email) => {
  let author = `${name}`;
  if (email) {
    author += ` <${email}>`;
  }

  return author;
}

export const getMergeToBranchName = (id) => {
  return `${BRANCH_PREFIX}/${id}`;
}

export const getChangelog = (changelog) => {
  return [...new Set(changelog || [])]
}

export const getTags = (tags) => {
  return tags.filter(Boolean)
}

export const getExampleYaml = (body, { filename, author, tags, changelog = [], date }) => {
  const options = {
    // example options
    id: body.id,
    enabled: body.enabled ?? true,
    date: date,
    author: author,
    title: body.title,
    description: body.description,
    categories: body.categories,
    tags: tags,
    ...(changelog.length ? { changelog } : {}),
    thumbnail_url: body.thumbnail_url || null,
    terminal_command: body.terminal_command,
    example_type: body.example_type,
    example_player_data: [
      body.example_player_data
    ],
    filename: filename,
    views: 0,
    likes: 0,
  }

  return `---\n${yaml.dump(options)}\n---\n`;
}

export default async (req) => {
  let filename, author, branchName, tags, changelog, body;
  let ref, yamlText;

  if (req.method === "OPTIONS") {
    return responses.succsess("OK")
  }
  if (req.method !== "POST") {
    return responses.methodNotAllowed()
  }

  const missingConfig = repo_api.getMissingConfig();
  if (missingConfig.length) {
    return responses.serverMisconfigured(`Server misconfigured: ${missingConfig.join(", ")} not set`);
  }

  try {
    body = await req.json();
    validateInput(body);

    filename   = getFilename(body);
    author     = getAuthorDisplayName(body.author_name, body.author_email);
    branchName = getMergeToBranchName(body.id);
    tags       = getTags(body.tags)
    changelog  = getChangelog(body.changelog)
  } catch (error) {
    return responses.failedValidateDataResponse(error.message);
  }

  yamlText = getExampleYaml(body, { filename, author, tags, changelog, date: new Date().toISOString() });

  try {
    // step 1: Get ref for 'main'
    ref = await repo_api.getRefHeadOfBranch(PR_TO_BRANCH_FROM);
  } catch (error) {
    return responses.failedRequestToGithub(new Error(`Could not find ${PR_TO_BRANCH_FROM}: ${error.message}`));
  }

  try {
    // step 2: create new branch
    await repo_api.createNewBranchFromRef(branchName, ref);
  } catch (error) {
    return responses.failedRequestToGithub(new Error(`Could not branch to ${branchName}: ${error.message}`));
  }

  try {
    // step 3: commit to new branch
    await repo_api.writeNewExampleToRepo({
      data_yaml: yamlText,
      filename: filename,
      commit_msg: `New example: ${filename} 🎉`,
      branch: branchName,
    });
  } catch (error) {
    return responses.failedRequestToGithub(new Error(`Could not createContent to ${branchName}: ${error.message}`));
  }

  try {
    // step 4: create a new pull request on github.com
    await repo_api.createNewPullRequest(filename, branchName, PR_TO_BRANCH_FROM);
  } catch (error) {
    return responses.failedRequestToGithub(new Error(`Failed Creating from ${branchName} into ${PR_TO_BRANCH_FROM}: ${error.message}`));
  }

  return responses.succsess("PR Created Succesfully!")
}
