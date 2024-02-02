import originalPost from "./originalPost.mjs";
import comment from "./comment.mjs";

const commentsContainer = document.querySelector("#comments-container");
const postContainer = document.getElementById("post-container");

export default function fullPost(post) {
  console.log(post);
  const firstPost = originalPost(post);
  postContainer.prepend(firstPost);

  post.comments &&
    post.comments.forEach((commentData) => {
      commentsContainer.appendChild(comment(commentData));
    });
}
