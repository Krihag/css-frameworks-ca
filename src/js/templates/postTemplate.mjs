import formatDate from "../utils/formatDate.mjs";
import reactionsHandler from "../handlers/reactionsHandler.mjs";

export default function postHTML(post) {
  // Create parent container element

  const container = document.createElement("div");
  container.classList.add(
    "bg-white",
    "rounded-lg",
    "shadow-md",
    "py-8",
    "px-6",
    "mx-6",
    "w-full",
    "max-w-xl"
  );
  container.dataset.postId = post.id;

  // Create profile section
  const profileSection = document.createElement("div");
  profileSection.classList.add("flex", "items-center", "w-80");

  const profileImage = document.createElement("img");
  profileImage.src = post.author.avatar.url;
  profileImage.alt = "Profile Picture";
  profileImage.classList.add(
    "rounded-full",
    "h-12",
    "w-12",
    "post-profile-img",
    "shadow-lg",
    "object-cover"
  );

  const profileInfo = document.createElement("div");
  profileInfo.classList.add("ml-2");

  const postedBy = document.createElement("p");
  postedBy.textContent = "Posted by: ";
  const anchor = document.createElement("a");
  anchor.href = "/profile/";
  anchor.classList.add("text-primary", "font-semibold");

  anchor.textContent = post.author.name;
  postedBy.appendChild(anchor);

  const postDate = document.createElement("p");
  postDate.classList.add("text-gray-500");
  postDate.textContent = formatDate(post.created);

  profileInfo.appendChild(postedBy);
  profileInfo.appendChild(postDate);

  profileSection.appendChild(profileImage);
  profileSection.appendChild(profileInfo);

  // Create main content section
  const mainContentSection = document.createElement("div");
  mainContentSection.classList.add("mt-4");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("text-xl", "font-semibold", "my-4");
  postTitle.textContent = post.title;
  mainContentSection.appendChild(postTitle);

  if (post.media) {
    console.log("Media");
    const postImage = document.createElement("img");
    postImage.src = post.media.url;
    postImage.alt = "Post Image";
    postImage.classList.add("rounded-md", "w-full", "h-96", "object-cover");
    mainContentSection.appendChild(postImage);
  }

  const postContent = document.createElement("p");
  postContent.classList.add("text-gray-800");
  postContent.textContent = post.body;

  mainContentSection.appendChild(postContent);

  //
  const commentsAndLikes = document.createElement("div");
  commentsAndLikes.classList.add(
    "flex",
    "gap-6",
    "mt-4",
    "h-12",
    "items-center"
  );
  // Create comments and likes sections
  const commentsSection = document.createElement("a");
  commentsSection.classList.add(
    "flex",

    "cursor-pointer",
    "items-center"
  );
  commentsSection.href = `/post/?id=${container.dataset.postId}`;
  const commentIcon = document.createElement("i");
  commentIcon.classList.add(
    "fa-regular",
    "fa-comment",
    "text-blue-700",
    "text-lg",
    "p-2"
  );

  const commentCount = document.createElement("p");
  commentCount.classList.add("text-blue-700");
  commentCount.textContent = post._count.comments + " comments";

  commentsSection.appendChild(commentIcon);
  commentsSection.appendChild(commentCount);

  const likesSection = document.createElement("div");
  likesSection.classList.add("flex", "gap-2", "items-center");

  const likeIcon = document.createElement("p");
  likeIcon.classList.add("text-blue-700", "text-lg", "cursor-pointer", "p-2");

  likeIcon.textContent = "👍";

  reactionsHandler(post.id, likeIcon);

  const likeCount = document.createElement("p");
  likeCount.classList.add("text-blue-700");
  likeCount.textContent = post._count.reactions + " likes";

  likesSection.appendChild(likeIcon);
  likesSection.appendChild(likeCount);
  commentsAndLikes.appendChild(commentsSection);
  commentsAndLikes.appendChild(likesSection);
  // Create comment input
  const commentInput = document.createElement("input");
  commentInput.classList.add(
    "rounded-md",
    "border-gray-300",
    "border-2",
    "bg-gray-100",
    "w-full",
    "h-14",
    "cursor-text",
    "flex",
    "items-center",
    "pl-5",
    "text-gray-500",
    "mt-4"
  );
  commentInput.placeholder = "Leave a comment...";

  // Append all sections to the container
  container.appendChild(profileSection);
  container.appendChild(mainContentSection);
  container.appendChild(commentsAndLikes);

  container.appendChild(commentInput);

  likeIcon.addEventListener("click", async (e) => {
    console.log(post.id);
  });

  return container;
}
