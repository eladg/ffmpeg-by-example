require('dotenv').config()
const repo_api = require("./repo_api");

const run = async () => {
  try {
    // > STEP 1:
    console.log("> calling github")
    const ref = await repo_api.getRefHeadOfBranch("main")

    // STEP 2: 
    const branchName = "examples/X-TEST-X2"
    const data = await repo_api.createNewBranchFromRef(branchName, ref)
    console.log(data)

  } catch (error) {
    console.error(error)
  }
}

run()