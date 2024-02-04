import Auth from "../Auth.js";
import header from "../headers.js";

export default async function getPosts(specificUser = "", id = "", page = 1) {
  const method = "GET";
  const headers = header.authWithoutContent();
  const endpoint = `/social${specificUser}/posts${id}?_author=true&_reactions=true&_comments=true&limit=10&page=${page}`;

  const postAuth = new Auth(method, headers, endpoint);
  const posts = await postAuth.fetch();
  console.log(posts);
}
