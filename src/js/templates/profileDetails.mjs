const userFollowing = document.getElementById("user-following");
const userFollowers = document.getElementById("user-followers");
const userPosts = document.getElementById("user-posts");
const userEmail = document.getElementById("user-email");
const userName = document.getElementById("user-name");
const userAvatar = document.getElementById("user-avatar");

export default function profileDetails(profile) {
  console.log(profile._count);
  userFollowing.textContent = profile._count.following;
  userFollowers.textContent = profile._count.followers;
  userPosts.textContent = profile._count.posts;
  userEmail.textContent = profile.email;
  userName.textContent = profile.name;
  userAvatar.src = profile.avatar.url;
}
