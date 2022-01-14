const BASE_URL = "http://localhost:4444";

function fetchRequest(path: string, options?: object) {
  return fetch(BASE_URL + path, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error:", err);
    });
}

const getMakes = () => {
  return fetchRequest("/getMakes");
};

function getModels(id: number) {
  return fetchRequest("/getModels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

function getGens(id: number) {
  return fetchRequest("/getGens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

function getEngines(id: number) {
  return fetchRequest("/getEngine", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
}

const ApiService = { getMakes, getModels, getGens, getEngines };

export default ApiService;
