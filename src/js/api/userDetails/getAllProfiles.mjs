import authHeader from "../authDetails/authHeader.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

export default async function getAllProfiles() {
  const profileUrl = new URL(API_SOCIAL_URL + "/profiles");

  const params = new URLSearchParams({
    _following: "true",
    _followers: "true",
    _posts: "true",
  });
  profileUrl.search = params.toString();

  const response = await fetch(profileUrl, {
    headers: authHeader(),
    method: "GET",
  });
  const newProfiles = await response.json();
  console.log(newProfiles);

  return newProfiles;
}
