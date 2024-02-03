import { API_SOCIAL_URL } from "../api/constants.mjs";
import authHeader from "../api/authDetails/authHeader.mjs";

export default async function reactionsHandler(id, icon) {
  icon.addEventListener("click", async (e) => {
    const endpoint = `/posts/${id}/react/😃`;
    console.log(e.target);

    const response = await fetch(API_SOCIAL_URL + endpoint, {
      headers: authHeader(),
      method: "PUT",
    });
    console.log(response);
    const newReaction = await response.json();
    console.log(newReaction);
  });
}
