const github = require('octonode');

const REPOSITORY     = process.env.FFMPEG_BY_EXAMPLE_GITHUB_REPO;
const TOKEN          = process.env.FFMPEG_BY_EXAMPLE_GITHUB_TOKEN;
const EXAMPLES_PATH  = process.env.FFMPEG_BY_EXAMPLE_EXAMPLES_PATH;

/**
 * @param {string} branchName - Name of the branch to get SHA ref for
 */
const getRefHeadOfBranch = async (branchName) => {
  const client = github.client(TOKEN);
  const ghrepo = client.repo(REPOSITORY);

  return new Promise((resolve, reject) => {
    ghrepo.branch(branchName, (err, branch) => {
      if (err) {
        reject(err);
      } else {
        resolve(branch.commit["sha"]);        
      }
    });
  });
}

/**
 * @param {string} branchName - Name of the new branch
 * @param {string} ref - SHA ref to branch out of
 */
const createNewBranchFromRef = async (branchName, ref) => {
  const client = github.client(TOKEN);
  const ghrepo = client.repo(REPOSITORY);

  return new Promise((resolve, reject) => {
    ghrepo.createReference(branchName, ref, (err, data) => {
      if (err) { reject(err) };
      resolve(data);
    });
  });
}

/**
 * @param {Object} options - The options object to write new example
 * @param {Object} options.data - YAML String including Hugo's meta formatter
 * @param {string} options.data_yaml - YAML String including Hugo's meta formatter
 * @param {string} option.filename - filename to be written to repo
 * @param {string} options.branch - the branch to write the example file to
 * @param {string} option.commit_msg - commit message to be pushed to repo
 * @param {Function} option.callback - callback function for `ghrepo.createContents`
 */
const writeNewExampleToRepo = async (options) => {
  const client     = github.client(TOKEN);
  const ghrepo     = client.repo(REPOSITORY);
  const new_filepath = `${EXAMPLES_PATH}/${options.filename}`;

  const { commit_msg, data_yaml, branch } = options;

  return new Promise((resolve, reject) => {
    const createContentsCallback = ((err, data) => {
      if (err) { 
        reject(err) 
      } else {
        resolve(data);
      };
    });

    ghrepo.createContents(
      new_filepath, 
      commit_msg, 
      data_yaml,
      {
        branch: branch,
      }, 
      createContentsCallback
    );
  });
};

/**
 * @param {string} filename - name of the new example file 
 * @param {string} fromBranch - name of the branch we want the PR to come from 
 * @param {string} fromBranch - name of the branch we want to merge to
 */
const createNewPullRequest = async (filename, fromBranch, toBranch) => {
  const client = github.client(TOKEN);
  const ghrepo = client.repo(REPOSITORY);

  return new Promise((resolve, reject) => {
    const newPrCallback = ((err, data) => {
      if (err) { 
        reject(err) 
      } else {
        resolve(data);
      };
    });

    ghrepo.pr({
      "title": `🎉 New Example: ${filename}`,
      "body": `New Example: ${filename}\n\nPlease preview this example on the netlify deploy-preview bellow 🌻.\n`,
      "head": fromBranch,
      "base": toBranch
    }, newPrCallback); //pull request  
  });
}

module.exports = {
  getRefHeadOfBranch,
  createNewBranchFromRef,
  writeNewExampleToRepo,
  createNewPullRequest
}