const cls = require("cloud-local-storage")

const handler = (options) => {
  const { id, userIp, timestamp } = options

  // generate uuid signature
  const user = userIp
  const signature = JSON.dump(`
    {
      ip: ${userIp},
      user: ${user}
    }
  `)

  // set cloud local storage item
  cls.setItem(`ffmpegbyexample:examples:${id}:${signature}`, 1)
}

module.exports = { handler }