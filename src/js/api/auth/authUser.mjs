import { API_HOST_URL, API_SOCIAL_URL } from "../constants.mjs";
import save from "../../storage/save.mjs";
import getProfile from "../userDetails/getProfile.mjs";
// import createApiKey from "./createAPIKey.mjs";

/**
 * Registers a user profile.
 * @param {Object} profile - The user profile to register.
 * @param {string} action - The action URL for registration.
 * @param {string} method - The HTTP method for registration.
 */
export default async function authUser(profile, action, method = "post") {
  try {
    const updatedURL = new URL(API_HOST_URL + action);

    // if (location.pathname === "/" || location.pathname === "/index.html") {
    //   const params = new URLSearchParams({
    //     _following: "true",
    //     _followers: "true",
    //     _posts: "true",
    //   });

    //   updatedURL.search = params.toString();
    // }

    const body = JSON.stringify(profile);
    console.log(body);
    console.log(profile, action, method);
    const response = await fetch(updatedURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });
    if (!response) throw new Error("Something went wrong");
    console.log(response);

    const updatedUser = await response.json();

    if (location.pathname === "/" || location.pathname === "/index.html") {
      let { accessToken, name } = updatedUser.data;

      console.log(name);
      save("token", accessToken);
      await getProfile(name);

      // TEMPORARY FIX WITH THE index.html endpoint, WILL BE REMOVED WHEN DEPLOYED
      window.location.href = "/profile/index.html?name=" + name;
    }
  } catch (err) {
    console.log(err);
  }
}
