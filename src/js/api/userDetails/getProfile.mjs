import authHeader from "../authDetails/authHeader.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import save from "../../storage/save.mjs";

export default async function userProfile(name) {
  const profileUrl = new URL(API_SOCIAL_URL + "/profiles/" + name);

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
  const newProfile = await response.json();

  save("profile", newProfile);
  return newProfile;
}
