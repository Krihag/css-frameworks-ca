import { API_SOCIAL_URL, API_KEY } from "../constants.mjs";
import load from "../../storage/load.mjs";
import authHeaders from "../authDetails/authHeader.mjs";

export default async function createPost(post) {
  const postUrl = API_SOCIAL_URL + "/posts";

  const response = await fetch(postUrl, {
    headers: authHeaders(),
    method: "POST",
    body: JSON.stringify(post),
  });

  const newPost = await response.json();
  console.log(newPost.tags);

  return newPost;
}
