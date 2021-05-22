const BRANCH_PREFIX  = "examples"
const FILENAME  = `contrib-test-${Math.random().toString(36).substring(2, 6)}.md`
const STAGING_BRANCH = "staging";
const MASTER_BRANCH = "main";

const fs       = require('fs');
const yaml     = require('js-yaml');
const repo_api = require("./repo_api");

var exampleYAMLStringFromObject = function(data) {
  return `---\n${yaml.dump(data)}---\n`
}

var go = async function() {
  let data;

  try {
    //=========================================================================
    // step 1: get staging ref
    //=========================================================================
    const ref = await repo_api.getRefHeadOfBranch("staging");
    console.log(ref);
    console.log("================");

    //=========================================================================
    // step 2: branch out of staging ref to new branch
    //=========================================================================
    const branch_name = `${BRANCH_PREFIX}/${FILENAME}`
    data = await repo_api.createNewBranchFromRef(branch_name, ref);
    console.log(data);
    console.log("================");

    //=========================================================================
    // step 3: createContent on new branch
    //=========================================================================
    let file_content = fs.readFileSync("./example-test-post.yaml", 'utf8');
    let example = yaml.load(file_content);

    const options = {
      data: example,
      data_yaml: exampleYAMLStringFromObject(example),
      filename: FILENAME,
      commit_msg: `New example: ${FILENAME} 🎉`,
      branch: branch_name,
    }

    data = await repo_api.writeNewExampleToRepo(options);
    console.log(data);
    console.log("================");

    //=========================================================================
    // step 4: create Pull Request to merge into staging
    //=========================================================================
    data = await repo_api.createNewPullRequest(FILENAME, branch_name, STAGING_BRANCH);
    console.log(data);
    console.log("================");

  } catch (error) {
    console.error("Execution failed with error:", error);
  }
}

go();