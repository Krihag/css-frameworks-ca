export default function userProfileStats(profile, isOwner) {
  const container = document.createElement("div");

  const flexDiv = document.createElement("div");
  flexDiv.className = "flex gap-8 text-lg";

  const postsDiv = document.createElement("div");
  const postsP = document.createElement("p");
  postsP.className = "font-bold";
  postsP.id = "user-posts";
  postsP.textContent = profile._count.posts;

  const postsText = document.createTextNode("posts");
  postsDiv.appendChild(postsP);
  postsDiv.appendChild(postsText);

  const followersDiv = document.createElement("div");
  const followersP = document.createElement("p");
  followersP.className = "font-bold";
  followersP.id = "user-followers";
  followersP.textContent = profile._count.followers;
  const followersText = document.createTextNode("followers");
  followersDiv.appendChild(followersP);
  followersDiv.appendChild(followersText);

  const followingDiv = document.createElement("div");
  const followingP = document.createElement("p");
  followingP.className = "font-bold";
  followingP.id = "user-following";
  followingP.textContent = profile._count.following;
  const followingText = document.createTextNode("following");
  followingDiv.appendChild(followingP);
  followingDiv.appendChild(followingText);

  if (!isOwner) {
    const button = document.createElement("button");
    button.className =
      "bg-primary hover:bg-primary-light duration-500 w-36 rounded-3xl p-2 shadow-md text-slate-200 mt-6";
    button.textContent = "Follow";
    container.appendChild(button);
  }
  // Append elements
  flexDiv.appendChild(postsDiv);
  flexDiv.appendChild(followersDiv);
  flexDiv.appendChild(followingDiv);

  container.appendChild(flexDiv);
  return container;
}
