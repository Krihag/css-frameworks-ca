import { API_SOCIAL_URL } from "../constants.mjs";
import authHeader from "../authDetails/authHeader.mjs";

export default async function getPosts(post) {
  const postUrl = API_SOCIAL_URL + "/posts?_author=true";

  const response = await fetch(postUrl, {
    headers: authHeader(),
    method: "GET",
    body: JSON.stringify(post),
  });
  const newPost = await response.json();

  return newPost;
}
