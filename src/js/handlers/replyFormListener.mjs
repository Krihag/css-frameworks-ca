import replyPost from "../api/posts/replyPost.mjs";

const form = document.getElementById("reply-form");
const replyInput = document.getElementById("reply-body");

export default async function replyFormListener(id) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log(replyInput.value);
    // const body = {
    //   body: replyInput.value,
    //   replyToId: id,
    // };

    const idNumber = Number(id);

    const method = "POST";
    const action = `/posts/${id}/comment`;
    console.log(typeof replyInput.value);

    await replyPost(replyInput.value, idNumber, action, method);

    form.reset();
  });
}
