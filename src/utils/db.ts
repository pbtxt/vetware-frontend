export async function getUsers() {
  return fetch("http://localhost:4000/api/users", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}

export async function createNewPet(owner_email, name, species, breed) {
  return fetch("http://localhost:4000/api/pets", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      owner_email,
      name,
      species,
      breed,
    }),
  }).then((data) => {
    return data.json();
  });
}
