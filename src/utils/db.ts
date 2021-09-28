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
