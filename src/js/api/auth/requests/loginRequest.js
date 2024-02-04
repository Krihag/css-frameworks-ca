import Auth from "../Auth.js";
import storage from "../../../utils/storage.js";
import headers from "../headers.js";

const method = "POST";
const header = headers.basic();
const endpoint = "/auth/login";

export default async function login(body) {
  console.log(body);
  const loginAuth = new Auth(method, header, endpoint, body);
  try {
    const data = await loginAuth.fetch();
    const { accessToken, ...profileData } = data.data;
    storage.save("token", accessToken);
    storage.save("profile", profileData);

    window.location.href = "/profile/?name=" + profileData.name;
  } catch (error) {
    console.error(error);
  }
}
