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
  return fetch("http://localhost:4000/api/pets/newPet", {
    method: "POST",
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
  })
    .then(() => {
      console.log("saved");
    })
    .catch(() => {
      console.log("error");
    });
}

export async function getServices() {
  return fetch("http://localhost:4000/api/services/getServices", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((data) => {
    return data.json();
  });
}

export async function createNewAppoinment(
  pet_id,
  service_id,
  appointment_date,
  status
) {
  return fetch("http://localhost:4000/api/appointments/newAppointment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pet_id,
      service_id,
      appointment_date,
      status,
    }),
  })
    .then(() => {
      console.log("saved");
    })
    .catch(() => {
      console.log("error");
    });
}

export async function getPets(owner_id) {
  return fetch("http://localhost:4000/api/pets/getUserPets", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      owner_id,
    }),
  }).then((data) => {
    return data.json();
  });
}
