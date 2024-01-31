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

    if (post.media) {
      const url = post.media;
      post.media = {
        url: url,
        alt: "Post image",
      };
    }

    const newPost = await createPost(post);
    console.log(newPost);
    form.reset();
  });
}
