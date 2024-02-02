import getPosts from "../api/posts/getPosts.mjs";
import fullPost from "../templates/fullPost/fullPost.mjs";
import replyFormListener from "../handlers/replyFormListener.mjs";

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

const data = await getPosts("", "/" + id);
console.log(data);
const post = data.data;
console.log(post);

fullPost(post);

replyFormListener(id);
console.log(post);
