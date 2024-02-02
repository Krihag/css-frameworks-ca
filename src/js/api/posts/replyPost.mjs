import { API_SOCIAL_URL } from "../constants.mjs";
import authHeader from "../authDetails/authHeader.mjs";

export default async function replyPost(data, id, action, method) {
  const url = `${API_SOCIAL_URL}${action}`;
  console.log(url);

  const response = await fetch(url, {
    headers: authHeader(),
    method: method,
    body: JSON.stringify({
      body: data,
    }),
  });
  console.log(response);

  const postReply = await response.json();
  console.log(postReply);
  return postReply;
}
