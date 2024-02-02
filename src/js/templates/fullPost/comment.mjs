import formatDate from "../../utils/formatDate.mjs";

export default function comment(post) {
  console.log(post);
  const container = document.createElement("div");
  container.classList.add("py-6", "gap-4");

  const header = document.createElement("div");
  header.classList.add("flex", "justify-between", "items-center");

  const profileInfo = document.createElement("div");
  profileInfo.classList.add("flex", "gap-2", "items-center");

  const profilePicture = document.createElement("img");
  profilePicture.src = post.author.avatar.url;
  profilePicture.alt = "Profile picture";
  profilePicture.classList.add("rounded-full", "w-12", "h-12");

  const profileDetails = document.createElement("div");

  const profileName = document.createElement("div");
  profileName.classList.add("font-bold");
  profileName.textContent = post.author.name;

  const timestamp = document.createElement("div");
  timestamp.classList.add("text-sm", "text-slate-400");
  timestamp.textContent = formatDate(post.created);

  profileDetails.appendChild(profileName);
  profileDetails.appendChild(timestamp);

  profileInfo.appendChild(profilePicture);
  profileInfo.appendChild(profileDetails);

  header.appendChild(profileInfo);

  const content = document.createElement("div");
  content.classList.add("mt-4");

  const paragraph = document.createElement("p");
  paragraph.textContent = post.body;
  content.appendChild(paragraph);

  container.appendChild(header);
  container.appendChild(content);

  return container;
}
