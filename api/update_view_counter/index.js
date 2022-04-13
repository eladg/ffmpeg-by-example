const CONTENT_ROOT = "../../content/examples"
const { 
  findMarkdownFileInFolder,
  readExampleFromFile,
  writeExampleToFile,
} = require("../shared/models/example")

const mapEventSegmentationCSVFileToData = (csv) => {
  let idCountsMap = {}

  const lines = csv.split("\n").splice(7)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].split(",")
    
    const id = eval(line[0].replace(/\t/g, ''));
    const counts = line.splice(1).map((t) => parseInt(eval(t)))
    const max = Math.max(...counts)

    if (id && id.length === 8) {
      idCountsMap[id] = max
    }
  }

  return idCountsMap
}

const handler = async (csvRawString) => {
  const idCountsMap = mapEventSegmentationCSVFileToData(csvRawString)

  for (let i = 0; i < Object.keys(idCountsMap).length; i++) {
    try {
      // for each example id
      const id = Object.keys(idCountsMap)[i];
      const folder = `${CONTENT_ROOT}/${id}`
      const markdownFile = await findMarkdownFileInFolder(folder)
      const markdownFilepath = `${folder}/${markdownFile}`

      // try updating
      console.log(`> working on: ${markdownFilepath}`)
      const example = await readExampleFromFile(markdownFilepath)
      
      // 
      console.log(`> found: ${example["views"]}, updating to: ${idCountsMap[id]}`)
      example["views"] = idCountsMap[id]

      if (await writeExampleToFile(example, markdownFilepath)) {
        console.log(`succesfully updated views to: ${example["views"]}`)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = { handler }