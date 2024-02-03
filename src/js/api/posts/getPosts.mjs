import { API_SOCIAL_URL } from "../constants.mjs";
import authHeader from "../authDetails/authHeader.mjs";

export default async function getPosts(specificUser = "", id = "", page = 1) {
  const postUrl =
    API_SOCIAL_URL +
    `${specificUser}/posts${id}?_author=true&_reactions=true&_comments=true&limit=10&page=${page}`;
  console.log(postUrl);

  const response = await fetch(postUrl, {
    headers: authHeader(),
    method: "GET",
    // body: JSON.stringify(post),
  });
  console.log(response);
  const newPost = await response.json();
  console.log(newPost);

  return newPost;
}
