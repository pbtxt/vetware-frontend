export async function getUsers() {
  return fetch("https://0f7b-161-18-118-1.ngrok.io/api/users", {
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
  return fetch("https://0f7b-161-18-118-1.ngrok.io/api/pets/newPet", {
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
  return fetch("https://0f7b-161-18-118-1.ngrok.io/api/services/getServices", {
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
  return fetch("https://0f7b-161-18-118-1.ngrok.io/api/appointments/newAppointment", {
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
  return fetch("https://0f7b-161-18-118-1.ngrok.io/api/pets/getUserPets", {
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
