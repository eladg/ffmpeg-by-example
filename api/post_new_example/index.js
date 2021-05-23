const responses = require('./responses');
const repo_api = require('./repo_api');
const yaml     = require('js-yaml');

const BRANCH_PREFIX  = "examples"
const STAGING_BRANCH = "staging";
const MASTER_BRANCH = "main"

const validateInput = (params) => {
  
  if (!("title" in params)) {
    throw new Error("Invalid data given! ('title' is missing)")
  }
  if (!("description" in params) || (params.description.length < 10 )) {
    throw new Error("Invalid data given! ('description' is missing or too short)")
  }
  if (!("author_name" in params)) {
    throw new Error("Invalid data given! ('author_name' is missing)")
  }
  if (!("categories" in params) || (params.categories.length < 0)) {
    throw new Error("Invalid data given! ('categories' array must have at least one category)")
  }
  if (!("tags" in params) || (params.tags.length < 0)) {
    throw new Error("Invalid data given! ('tags' array must have at least one tag)")
  }
  if (!("example_code" in params) || (params.example_code.length < 10)) {
    throw new Error("Invalid data given! ('example_code' is missing or too short)")
  }

  return true;
}

const getFilenameFromTitle = (title) => {
  let filename = title.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
  filename += `-${Math.random().toString(36).substring(2, 5)}`;
  filename += ".md";
  return filename;
}

const getAuthorDisplayName = (name, email) => {
  let author = `${name}`;
  if (email) {
    author += ` <${email}>`;
  }

  return author;
}

const getMergeToBranchName = (filename) => {
  return `${BRANCH_PREFIX}/${filename}`;
}

const handler = async (event, context) => {
  let filename, author, branchName, body;
  let ref, yamlText, resp_2, resp_3, resp_4;

  try {
    body = JSON.parse(event.body);
    validateInput(body);

    // filename
    filename   = getFilenameFromTitle(body.title);
    author     = getAuthorDisplayName(body.author_name, body.author_email);
    branchName = getMergeToBranchName(filename);

  } catch (error) {
    console.error(error);
    return responses.failedValidateDataResponse(error.message);
  }

  // 
  const options = {
    date: new Date().toISOString(),
    author: author,
    title: body.title,
    filename: filename,
    description: body.description,
    categories: body.categories,
    tags: body.tags || [],
    thumbnail_url: body.thumbnail_url || null,
    example_code: body.example_code,
  }
  yamlText = (`---\n${yaml.dump(options)}\n---\n`);

  console.log("======================");

  try {
    // step 1: Get ref for 'staging'
    ref = await repo_api.getRefHeadOfBranch(STAGING_BRANCH);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Could not find ${STAGING_BRANCH}`));
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
    const resp_4 = await repo_api.createNewPullRequest(filename, branchName, STAGING_BRANCH);
  } catch (error) {
    console.error(error);
    return responses.failedRequestToGithub(new Error(`Failed Creating from ${branchName} into ${STAGING_BRANCH}`));
  }

  console.log("======================");

  return responses.succsess("PR Created Succesfully!")
}

module.exports = { handler }