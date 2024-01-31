import { formListener } from "./handlers/authFormListener.mjs";
import createPost from "./api/posts/createPost.mjs";
import createPostListener from "./handlers/createPostListener.mjs";
import getPosts from "./api/posts/getPosts.mjs";
// import postHTML from "./renderHTML/postHTML.mjs";
import postTemplate from "./templates/postTemplate.mjs";

const form = document.getElementById("form");
const postForm = document.getElementById("new-post-form");
const allPostsContainer = document.getElementById("posts-container");

form && formListener(form);
postForm && createPostListener(postForm);

if (location.pathname.includes("/feed")) {
  const allPosts = await getPosts();

  allPosts.data.forEach((post) => {
    allPostsContainer.appendChild(postTemplate(post));
  });
}
