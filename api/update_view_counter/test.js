const fs = require('fs')
const { handler } = require("./index")

const filename = "example.csv"

fs.readFile(filename, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return false
  }

  handler(data)
})

