const method = "POST";
const headers = { "Content-Type": "application/json" };
const endpoint = "/auth/login";

async function login(body = null) {
  const loginAuth = new Auth(method, headers, endpoint, body);
  try {
    const data = await loginAuth.fetch();
    const { accessToken, ...profileData } = data.data;
    save("token", accessToken);
    save("profile", profileData);
  } catch (error) {
    console.error(error);
  }
}
