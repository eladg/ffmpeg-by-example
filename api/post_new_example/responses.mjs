const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const json = (status, message) => {
  return new Response(JSON.stringify({ message: `${message}` }), { status, headers });
};

export const failedValidateDataResponse = (error) => json(403, error);
export const failedRequestToGithub      = (error) => json(403, error);
export const methodNotAllowed           = ()      => json(405, "Method Not Allowed");
export const succsess                   = (msg)   => json(200, msg);
