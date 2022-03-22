const responses = require('./responses');
const repo_api = require('./repo_api');
const yaml     = require('js-yaml');

const BRANCH_PREFIX  = "examples"
const PR_TO_BRANCH = "main";

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
    if (!tags[i].includes("no-tag")) {
      exampleTags.push(tags[i])
    }
  }

  return exampleTags
}

const handler = async (event, context) => {
  let filename, author, branchName, body;
  let ref, yamlText, resp_2, resp_3, resp_4;

  try {
    body = JSON.parse(event.body);
    validateInput(body);

    // filename
    filename   = getFilename(body);
    author     = getAuthorDisplayName(body.author_name, body.author_email);
    branchName = getMergeToBranchName(body.id);
    tags       = getTags(body.tags)

  } catch (error) {
    console.error(error);
    return responses.failedValidateDataResponse(error.message);
  }

  // 
  const options = {
    // example options
    id: body.id,
    version: body.version,
    enabled: body.enabled || false,
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
    views: 0,
    likes: 0,    
  }
  yamlText = (`---\n${yaml.dump(options)}\n---\n`);

  console.log("======================");

  try {
    // step 1: Get ref for 'staging'
    ref = await repo_api.getRefHeadOfBranch(PR_TO_BRANCH);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not find ${PR_TO_BRANCH}`));
  }

  console.log("======================");

  try {
    // step 2: branch out of 'staging'
    resp_2 = await repo_api.createNewBranchFromRef(branchName, ref);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not branch to ${branchName}`));
  }

  console.log("======================");

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

  console.log("======================");

  try {
    // step 4: 
    const resp_4 = await repo_api.createNewPullRequest(filename, branchName, PR_TO_BRANCH);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Failed Creating from ${branchName} into ${PR_TO_BRANCH}`));
  }

  console.log("======================");

  return responses.succsess("PR Created Succesfully!")
}

module.exports = { handler }