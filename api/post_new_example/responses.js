var errorResponse = (error) => {
  return { statusCode: 500, body: error.toString() }
}

var failedValidateInputResponse = (error) => {
  return { statusCode: 401, body: error.toString() }
}

var failedValidateDataResponse = (error) => {
  return { statusCode: 403, body: error.toString() }
}

var failedRequestToGithub = (error) => {
  return { statusCode: 403, body: error.toString() }
}

var succsess = (msg) => {
  return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello from API (${msg})` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
}

module.exports = { 
  failedValidateInputResponse,
  failedValidateDataResponse,
  failedRequestToGithub,
  errorResponse,
  succsess
}