import getProfile from "../api/userDetails/getProfile.mjs";
import getAllProfiles from "../api/userDetails/getAllProfiles.mjs";
import load from "../storage/load.mjs";
import profileDetails from "../templates/profileDetails.mjs";
import getPosts from "../api/posts/getPosts.mjs";
import postTemplate from "../templates/postTemplate.mjs";

let params = new URLSearchParams(window.location.search);
let name = params.get("name");
if (!name) name = load("profile").data.name;
console.log(name);
const profileData = await getProfile(name);
const profile = profileData.data;

profileDetails(profile);
const posts = await getPosts(`/profiles/${name}`);
console.log(posts);
console.log(profile);

posts &&
  posts.data.forEach((post) => {
    document.getElementById("posts-container").appendChild(postTemplate(post));
  });

getAllProfiles();
