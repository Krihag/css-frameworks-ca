import userProfileHeader from "./UserProfileHeader.js";
import userProfileStats from "./userProfileStats.js";

const profileContainer = document.querySelector("#profile-container");

export default function (profile, isOwner) {
  profileContainer.prepend(userProfileStats(profile, isOwner));
  profileContainer.prepend(userProfileHeader(profile, isOwner));
}
