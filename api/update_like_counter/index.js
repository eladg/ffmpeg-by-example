// const cls = require("cloud-local-storage")

const { 
  CONTENT_ROOT,
  findMarkdownFileInFolder,
  readExampleFromFile,
  writeExampleToFile,
} = require("../shared/models/example")

const getAllKeysFromCLS = () => {
  // const data = cls.getAllKeys(`ffmpegbyexample:examples:*`)
}

const fetchExamplesLikesMap = (allExampleKeys) => {
  const data = getAllKeysFromCLS()
  return {
    "6GZHZPJP": 3,
    "KTPGPP8F": 444,
  }
}

const handler = async () => {
  const allKeys = fetchExamplesLikesMap()

  try {
    for (let i = 0; i < Object.keys(allKeys).length; i++) {
      const id = Object.keys(allKeys)[i];
      const folder = `${CONTENT_ROOT}/${id}`
      const markdownFile = await findMarkdownFileInFolder(folder)
      const markdownFilepath = `${folder}/${markdownFile}`

      // try updating
      console.log(`> working on: ${markdownFilepath}`)
      const example = await readExampleFromFile(markdownFilepath)

      // 
      console.log(`> found: ${example["likes"]}, updating to: ${allKeys[id]}`)
      example["likes"] = allKeys[id]

      if (await writeExampleToFile(example, markdownFilepath)) {
        console.log(`succesfully updated likes to: ${example["likes"]}`)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { handler }