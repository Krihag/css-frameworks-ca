import getProfiles from "../../api/auth/requests/GetProfiles.js";
import profileComponent from "../../components/profile/index.js";

export default async function pageSpecific(userData) {
  const username = userData.profile.name;

  let params = new URLSearchParams(window.location.search);
  let name = params.get("name");
  const isOwner = name === username ? true : false;
  const profile = await getProfiles(name);
  profileComponent(profile.data, isOwner);
}
