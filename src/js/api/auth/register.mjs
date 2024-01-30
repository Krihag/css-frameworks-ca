import { API_HOST_URL, API_SOCIAL_URL } from "../constants.mjs";
import save from "../../storage/save.mjs";

/**
 * Registers a user profile.
 * @param {Object} profile - The user profile to register.
 * @param {string} action - The action URL for registration.
 * @param {string} method - The HTTP method for registration.
 */
export default async function register(profile, action, method) {
  try {
    const registerURL = API_HOST_URL + action;

    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const updatedUser = await response.json();

    if (location.pathname === "/" || location.pathname === "/index.html") {
      const { accessToken, ...profileInfo } = updatedUser.data;

      save("token", accessToken);
      save("profile", profileInfo);
    }
  } catch (err) {
    console.log(err);
  }
}
