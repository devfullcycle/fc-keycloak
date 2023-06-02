const url =
  "http://host.docker.internal:3000/callback?session_state=3e3447bc-55c8-4283-97d1-fdd2da0f5cd7&code=9ea4cd51-b214-4a1a-a52f-0e9e5ad21c39.3e3447bc-55c8-4283-97d1-fdd2da0f5cd7.34b28fed-8773-41a4-bfde-bf98c8950b26";

const request1 = fetch(url);
const request2 = fetch(url);

Promise.all([request1, request2])
  .then(async (responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((jsons) => console.log(jsons));
