const BASE_URL = "http://localhost:4444";

//Fetch store that will get a path and object as a second argument.

function fetchRequest(path: string, options?: object) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error:", err);
    });
}

//Getting all of the Brands
const getMakes = (id?: number) => {
  return fetchRequest("/getMakes");
};

//Getting all of the models of the Brand when passed id of a Brand
function getModels(id: number) {
  return fetchRequest("/getModels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

//Gets all the generations when passed the id of an Model
function getGens(id: number) {
  return fetchRequest("/getGens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

//Gets all of the engines when passed the id of the Generation
function getEngines(id: number) {
  return fetchRequest("/getEngine", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

//Gets info about engine and generation from its ID
function getInfo(IDs: number[]) {
  return fetchRequest("/getInfo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ IDs }),
  });
}

const ApiService = { getMakes, getModels, getGens, getEngines, getInfo };

export default ApiService;
