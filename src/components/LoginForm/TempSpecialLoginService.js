import axios from "axios";

export const TempSpecialLoginService = {
  postMongoDbRequest,
  createJourneyExceutionRequest,
  retrieveJourneyExecutionRequest,
  getLookupCustomerData,
  createJourneyExceutionAppRequest,
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
async function createJourneyExceutionRequest(data) {
  const headers = {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiI5YWQyYTczYy1hY2E0LTQxNjktYmI1ZS04YWNlZGRhYjI1ODIiLCJleHAiOjE3NDU0MDIxNTksImlzcyI6ImpvdXJuZXkiLCJwcnAiOiJzeXN0ZW0ifQ.BfCquLs5dFeFzbwjJYCvkL4oWvSih3uRNes2KCqEoLQ"}`,
  };
  return await axios.post(
    "https://app.journeyid.io/api/system/executions",
    data,
    { headers }
  );
}

async function retrieveJourneyExecutionRequest(id) {
  const headers = {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiI5YWQyYTczYy1hY2E0LTQxNjktYmI1ZS04YWNlZGRhYjI1ODIiLCJleHAiOjE3NDU0MDIxNTksImlzcyI6ImpvdXJuZXkiLCJwcnAiOiJzeXN0ZW0ifQ.BfCquLs5dFeFzbwjJYCvkL4oWvSih3uRNes2KCqEoLQ"}`,
  };
  return await axios.get(
    `https://app.journeyid.io/api/system/executions/${id}`,
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

async function createJourneyExceutionAppRequest(data) {
  const headers = {
    "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2MiOiI5YWQyYTczYy1hY2E0LTQxNjktYmI1ZS04YWNlZGRhYjI1ODIiLCJleHAiOjE3NDU0MDIxNTksImlzcyI6ImpvdXJuZXkiLCJwcnAiOiJzeXN0ZW0ifQ.BfCquLs5dFeFzbwjJYCvkL4oWvSih3uRNes2KCqEoLQ"}`,
  };
  return await axios.post(
    "https://app.journeyid.io/api/system/executions",
    data,
    { headers }
  );
}
