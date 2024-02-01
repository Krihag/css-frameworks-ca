import { API_SOCIAL_URL } from "../constants.mjs";
import authHeader from "../authDetails/authHeader.mjs";

export default async function getPosts(specificUser = "") {
  const postUrl =
    API_SOCIAL_URL +
    `${specificUser}/posts?_author=true&_comments=true&_reactions=true`;
  console.log(postUrl);

  const response = await fetch(postUrl, {
    headers: authHeader(),
    method: "GET",
    // body: JSON.stringify(post),
  });
  const newPost = await response.json();

  return newPost;
}
