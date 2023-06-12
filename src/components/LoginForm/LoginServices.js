import axios from "axios";

export const LoginService = {
  postMongoDbRequest,
  createBootstrapSession,
  getLookupCustomerData,
  sendAuthenticationExecutionRequest,
};
async function postMongoDbRequest(data) {
  const headers = {
    "Content-Type": "application/json",
  };
  return await axios.post(
    "https://data.mongodb-api.com/app/avayaocf-vrral/endpoint/data/v1/action/find",
    data,
    { headers }
  );
}

async function createBootstrapSession(data, token) {
  // this.creteToken();
  // console.log(`createBootstrapSession Bearer ${token}`);

  let headers = {
    authorization: `Bearer ${token}`,
  };

  return await axios.post(
    "https://app.journeyid.io/api/iframe/sessions/bootstrap",
    data,
    { headers }
  );
}

async function getLookupCustomerData(uniqueID) {
  // hard coded Bearer token from Journey Dev application (API Key: https://app.journeyid.io/settings/developer)

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiI5YWQyYTczYy1hY2E0LTQxNjktYmI1ZS04YWNlZGRhYjI1ODIiLCJleHAiOjE3NDU0MDIxNTksImlzcyI6ImpvdXJuZXkiLCJwcnAiOiJzeXN0ZW0ifQ.BfCquLs5dFeFzbwjJYCvkL4oWvSih3uRNes2KCqEoLQ

  console.log("uniqueID: ", uniqueID);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiI5YWQyYTczYy1hY2E0LTQxNjktYmI1ZS04YWNlZGRhYjI1ODIiLCJleHAiOjE3NDU0MDIxNTksImlzcyI6ImpvdXJuZXkiLCJwcnAiOiJzeXN0ZW0ifQ.BfCquLs5dFeFzbwjJYCvkL4oWvSih3uRNes2KCqEoLQ";

  let headers = {
    authorization: `Bearer ${token}`,
  };

  return await axios.get(
    `https://app.journeyid.io/api/system/customers/lookup?unique_id=${uniqueID}`,
    { headers }
  );
}

async function sendAuthenticationExecutionRequest(data, token) {
  console.log(token);
  let headers = {
    authorization: `Bearer ${token}`,
  };

  return await axios.post(
    "https://app.journeyid.io/api/iframe/executions",
    data,
    {
      headers,
    }
  );
}
