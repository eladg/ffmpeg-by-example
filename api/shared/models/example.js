const fs = require('fs')
const path = require('path');
const yaml = require('js-yaml');

const findMarkdownFileInFolder = async (folder) => {
  let markdownFile = null
  if (fs.existsSync(folder)) {
    fs.readdirSync(folder).forEach(file => {
      if (path.extname(file) === ".md") {
        markdownFile = file
      }
    });  
  }
  return markdownFile
}

const readExampleFromFile = async (filepath) => {
  try {
    const example = await yaml.loadAll(
      fs.readFileSync(filepath, 'utf8')
    )[0];
    return example
  } catch (error) {
    throw error
  }
}

const writeExampleToFile = async (example, filepath) => {
  try {
    const yamlText = (`---\n${yaml.dump(example)}\n---\n`);
    fs.writeFileSync(filepath, yamlText);
    return true
  } catch (error) {
    throw error
  }
}

module.exports = { 
  findMarkdownFileInFolder,
  readExampleFromFile, 
  writeExampleToFile
}