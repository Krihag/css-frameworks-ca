export default function userProfileHeader(profile, isOwner) {
  const statusColor = isOwner ? "bg-green-500" : "bg-red-500";
  const container = document.createElement("div");

  const relativeDiv = document.createElement("div");
  relativeDiv.className = "relative flex justify-center";
  relativeDiv.id = "change-avatar";

  const img = document.createElement("img");
  img.id = "user-avatar";
  img.src = profile.avatar.url;
  img.className =
    "w-40 h-40 rounded-full border-gray-500 border-2 shadow-lg object-cover";

  const innerDiv = document.createElement("div");
  innerDiv.className =
    "absolute w-9 h-9 rounded-full  top-32 left-32 shadow-lg";
  innerDiv.classList.add(statusColor);
  const flexDiv = document.createElement("div");
  flexDiv.className = "flex flex-col pt-3 justify-center";

  const h1 = document.createElement("h1");
  h1.className = "text-xl font-bold text-gray-700";
  h1.id = "user-name";
  h1.textContent = profile.name;

  const p = document.createElement("p");
  p.className = "text-primary-light";
  p.id = "user-email";
  p.textContent = profile.email;

  relativeDiv.appendChild(img);
  relativeDiv.appendChild(innerDiv);

  flexDiv.appendChild(h1);
  flexDiv.appendChild(p);

  container.appendChild(relativeDiv);
  container.appendChild(flexDiv);

  return container;
}
