const fs = require('fs')
const path = require('path');
const contentRoot = "../../content/examples"
const yaml = require('js-yaml');

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

const findMarkdownFile = async (folderName) => {
  let markdownFile
  if (fs.existsSync(folderName)) {
    fs.readdirSync(folderName).forEach(file => {
      if (path.extname(file) === ".md") {
        markdownFile = file
      }
    });  
  }
  return markdownFile
}

const handler = async (csvRawString) => {
  const idCountsMap = mapEventSegmentationCSVFileToData(csvRawString)

  for (let i = 0; i < Object.keys(idCountsMap).length; i++) {
    try {
      const id = Object.keys(idCountsMap)[i];
      const folder = `${contentRoot}/${id}`
      const markdownFile = await findMarkdownFile(folder)
      const filepath = `${folder}/${markdownFile}`
      console.log(`> working on: ${filepath}`)
      const doc = await yaml.loadAll(fs.readFileSync(filepath, 'utf8'));
      
      console.log(`> found: ${doc[0]["views"]}, updating to: ${idCountsMap[id]}`)
      doc[0]["views"] = idCountsMap[id]

      // write file
      yamlText = (`---\n${yaml.dump(doc[0])}\n---\n`);
      fs.writeFileSync(filepath, yamlText);

      console.log(`updated views to: ${doc[0]["views"]}`)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = { handler }