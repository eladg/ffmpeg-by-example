const { 
  CONTENT_ROOT,
  findMarkdownFileInFolder,
  readExampleFromFile,
  writeExampleToFile,
} = require("../shared/models/example")

const axios = require('axios');
require('dotenv').config()
const {
  AMPLITUDE_API_KEY,
  AMPLITUDE_API_SECRET,
  AMPLITUDE_CHART_ID,
} = process.env

const fetchDataFromAmplitudeAPI = async () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://amplitude.com/api/3/chart/${AMPLITUDE_CHART_ID}/query`,
      responseType: 'json',
      auth: {
        username: AMPLITUDE_API_KEY,
        password: AMPLITUDE_API_SECRET,
      },      
    })
    .then((response) => {
      let data = response.data.data
      let idCountsMap = {}
      
      for (let i = 0; i < data["seriesLabels"].length; i++) {
        const element = data["seriesLabels"][i];
        const id = element[1]
        const count = data["seriesCollapsed"][i][0]["value"]
        idCountsMap[`${id}`] = count
      }

      resolve(idCountsMap)
    })
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        reject(error)

      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        reject(error)

      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        reject(error)
      }
      
      console.log(error.config);
      reject(error)
    })
  })
}

const handler = async () => {
  const idCountsMap = await fetchDataFromAmplitudeAPI()

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