const globals = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  }
}

var errorResponse = (error) => {
  return { 
    ...globals,
    statusCode: 500, 
    body: JSON.stringify({
      message: error.toString() 
    }) 
  }
}

var failedValidateInputResponse = (error) => {
  return { 
    ...globals,
    statusCode: 401, 
    body: JSON.stringify({
      message: error.toString() 
    }) 
  }
}

var failedValidateDataResponse = (error) => {
  return { 
    ...globals,
    statusCode: 403, 
    body: JSON.stringify({
      message: error.toString() 
    }) 
  }
}

var failedRequestToGithub = (error) => {
  return { 
    ...globals,
    statusCode: 403, 
    body: JSON.stringify({
      message: error.toString() 
    }) 
  }
}

var succsess = (msg) => {
  return {
    ...globals,
    statusCode: 200,
    body: JSON.stringify({ message: `${msg}` }),
  }
}

module.exports = { 
  failedValidateInputResponse,
  failedValidateDataResponse,
  failedRequestToGithub,
  errorResponse,
  succsess
}