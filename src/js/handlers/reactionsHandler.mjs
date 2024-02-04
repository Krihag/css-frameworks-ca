import { API_SOCIAL_URL } from "../api/constants.mjs";
import authHeader from "../api/authDetails/authHeader.mjs";
import load from "../storage/load.mjs";
import { API_KEY } from "../api/constants.mjs";

export default async function reactionsHandler(id, icon) {
  const token = load("token");

  icon.addEventListener("click", async (e) => {
    const endpoint = `/posts/${id}/react/😃`;

    const response = await fetch(API_SOCIAL_URL + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      method: "PUT",
    });
    console.log(response);
    const newReaction = await response.json();
    console.log(newReaction);
  });
}
