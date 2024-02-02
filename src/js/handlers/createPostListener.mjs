import createPost from "../api/posts/createPost.mjs";

export default async function createPostListener(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const post = {
      title: formData.get("title"),
      body: formData.get("body"),
      tags: ["#CodeUnity"],
    };

    formData.get("media");
    if (formData.get("media")) {
      const url = formData.get("media");
      post.media = {
        url: url,
        alt: "Post media",
      };
    }
    console.log(post);
    console.log(form);

    const newPost = await createPost(post);
    console.log(newPost);
    form.reset();
  });
}
