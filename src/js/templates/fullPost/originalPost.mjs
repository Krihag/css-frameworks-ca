import formatDate from "../../utils/formatDate.mjs";

export default function originalPost(post) {
  // Create main container div
  const mainContainerDiv = document.createElement("div");
  mainContainerDiv.classList.add("mt-8");

  // Create flex container for profile info and action links
  const flexContainerDiv = document.createElement("div");
  flexContainerDiv.classList.add("flex", "justify-between", "items-center");

  // Create div for profile picture and details
  const profileDetailsDiv = document.createElement("div");
  profileDetailsDiv.classList.add("flex", "gap-2", "items-center");

  // Create profile picture
  const profilePicture = document.createElement("img");
  profilePicture.src = post.author.avatar.url;
  profilePicture.alt = "Profile picture";
  profilePicture.classList.add("rounded-full", "w-12", "h-12");

  // Create div for profile name and timestamp
  const profileNameTimestampDiv = document.createElement("div");

  // Create profile name
  const profileNameDiv = document.createElement("div");
  profileNameDiv.classList.add("font-bold");
  profileNameDiv.textContent = post.author.name;

  // Create timestamp
  const timestampDiv = document.createElement("div");
  timestampDiv.classList.add("text-sm", "text-slate-400");
  timestampDiv.textContent = formatDate(post.created);

  // Append profile name and timestamp to the div
  profileNameTimestampDiv.appendChild(profileNameDiv);
  profileNameTimestampDiv.appendChild(timestampDiv);

  // Append profile picture and details to the profile details div
  profileDetailsDiv.appendChild(profilePicture);
  profileDetailsDiv.appendChild(profileNameTimestampDiv);

  // Create div for edit and delete links
  const actionLinksDiv = document.createElement("div");
  actionLinksDiv.classList.add("flex", "gap-6");

  // Create edit link
  const editLink = document.createElement("a");
  editLink.href = "#";
  editLink.classList.add("text-slate-400");

  // Create edit icon
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid", "fa-pencil", "text-xl");

  // Append edit icon to edit link
  editLink.appendChild(editIcon);

  // Create delete link
  const deleteLink = document.createElement("a");
  deleteLink.href = "./delete/";
  deleteLink.classList.add("text-slate-400");

  // Create delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash", "text-xl");

  // Append delete icon to delete link
  deleteLink.appendChild(deleteIcon);

  // Append edit and delete links to the action links div
  actionLinksDiv.appendChild(editLink);
  actionLinksDiv.appendChild(deleteLink);

  // Append profile details and action links to the flex container div
  flexContainerDiv.appendChild(profileDetailsDiv);
  flexContainerDiv.appendChild(actionLinksDiv);

  // Append flex container to the main container div
  mainContainerDiv.appendChild(flexContainerDiv);

  if (post.media) {
    // Create div for post media
    const postMediaDiv = document.createElement("div");
    postMediaDiv.classList.add("mt-4");

    // Create post media
    const postMedia = document.createElement("img");
    postMedia.src = post.media.url;
    postMedia.alt = "Post media";
    postMedia.classList.add("w-full", "rounded-md");

    // Append post media to the post media div
    postMediaDiv.appendChild(postMedia);

    // Append post media div to the main container div
    mainContainerDiv.appendChild(postMediaDiv);
  }

  // Create div for post title and content
  const postDetailsDiv = document.createElement("div");
  postDetailsDiv.classList.add("mt-4");

  // Create post title
  const postTitle = document.createElement("p");
  postTitle.classList.add("text-2xl", "font-semibold");
  postTitle.textContent = post.title;

  // Create post content
  const postContent = document.createElement("p");
  postContent.textContent = post.body;

  // Append post title and content to the post details div
  postDetailsDiv.appendChild(postTitle);
  postDetailsDiv.appendChild(postContent);

  // Append post details to the main container div
  mainContainerDiv.appendChild(postDetailsDiv);

  // Append the main container div to the document body or any other desired parent element

  // Return main container div
  return mainContainerDiv;
}
