const responses = require('./responses');
const repo_api = require('./repo_api');
const yaml     = require('js-yaml');

const BRANCH_PREFIX  = "examples"
const PR_TO_BRANCH_FROM = "main";

const validateInput = (params) => {
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
  
  if (!("categories" in params) || (params.categories.length < 0)) {
    throw new Error("Invalid data given! ('categories' array must have at least one category)")
  }
  if (!("tags" in params) || (params.tags.length < 0)) {
    throw new Error("Invalid data given! ('tags' array must have at least one tag)")
  }
  if (!("terminal_command" in params) || (params.terminal_command.length < 10)) {
    throw new Error("Invalid data given! ('terminal_command' is missing or too short)")
  }

  return true;
}

const getFilename = (options) => {
  const { title, id } = options  
  let filename = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase().split("_").filter(word => word.length > 1).join("_");
  let filepath = id + "/" + filename + ".md"

  return filepath;
}

const getAuthorDisplayName = (name, email) => {
  let author = `${name}`;
  if (email) {
    author += ` <${email}>`;
  }

  return author;
}

const getMergeToBranchName = (id) => {
  return `${BRANCH_PREFIX}/${id}`;
}

const getTags = (tags) => {
  let exampleTags = []
  for (let i = 0; i < tags.length; i++) {
    if (tags[i]) {
      exampleTags.push(tags[i])
    }
  }

  return exampleTags
}

const handler = async (event, context) => {
  let filename, author, branchName, body;
  let ref, yamlText, resp_2, resp_3, resp_4;

  if (event.httpMethod === "OPTIONS") {
    return responses.succsess("OK")
  }

  try {
    body = JSON.parse(event.body);
    validateInput(body);
    console.log("valid body", body, "\n")

    // filename
    filename   = getFilename(body);
    console.log("filename", filename, "\n")

    author     = getAuthorDisplayName(body.author_name, body.author_email);
    console.log("author", author, "\n")

    branchName = getMergeToBranchName(body.id);
    console.log("branchName", branchName, "\n")

    tags       = getTags(body.tags)
    console.log("tags", tags, "\n")

  } catch (error) {
    console.error(error);
    return responses.failedValidateDataResponse(error.message);
  }

  // 
  const options = {
    // example options
    id: body.id,
    version: body.version,
    enabled: body.enabled || true,
    date: new Date().toISOString(),
    author: author,
    title: body.title,
    description: body.description,
    categories: body.categories,
    tags: tags,
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
  yamlText = (`---\n${yaml.dump(options)}\n---\n`);

  console.log(`== step 1: Get ref for '${PR_TO_BRANCH_FROM}' ====================`);

  try {
    // step 1: Get ref for 'staging'
    ref = await repo_api.getRefHeadOfBranch(PR_TO_BRANCH_FROM);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not find ${PR_TO_BRANCH_FROM}`));
  }

  console.log(`== step 2: create new branch '${branchName}' ====================`);

  try {
    // step 2: create new branch
    resp_2 = await repo_api.createNewBranchFromRef(branchName, ref);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not branch to ${branchName}`));
  }

  console.log("== step 3: commit to new branch ====================");

  try {
    // step 3: commit to new branch
    const commitData = {
      data_yaml: yamlText,
      filename: filename,
      commit_msg: `New example: ${filename} 🎉`,
      branch: branchName,
    }
    resp_3 = await repo_api.writeNewExampleToRepo(commitData);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not createContent to ${branchName}. Tried writing:\n${commitData}\n`));
  }

  console.log("== step 4: create a new pull request on github.com ====================");

  try {
    // step 4: create a new pull request on github.com
    const resp_4 = await repo_api.createNewPullRequest(filename, branchName, PR_TO_BRANCH_FROM);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Failed Creating from ${branchName} into ${PR_TO_BRANCH_FROM}`));
  }

  console.log("== PR Created Succesfully! ====================");

  return responses.succsess("PR Created Succesfully!")
}

module.exports = { handler }