import Auth from "../Auth.js";
import header from "../headers.js";

// GET request for all profiles by default. if specificUser is added in the function call, it will return the profile of that user only.
export default async function getProfiles(specificUser = "") {
  const method = "GET";
  const headers = header.authWithoutContent();
  const endpoint = `/social/profiles/${specificUser}?_author=true&_followers=true&_following=true`;

  const profileAuth = new Auth(method, headers, endpoint);
  const profiles = await profileAuth.fetch();
  console.log(profiles);
  return profiles;
}
