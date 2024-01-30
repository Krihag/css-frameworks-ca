export default async function login(profile, action, method) {
  try {
    const loginURL = API_HOST_URL + action;

    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });
    const loginUser = await response.json();
    console.log(loginUser);
  } catch (err) {
    console.log(err);
  }
}
