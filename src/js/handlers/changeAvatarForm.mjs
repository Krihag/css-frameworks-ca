const avatarContainer = document.querySelector("#change-avatar");
const changeAvatar = document.querySelector("#change-avatar-form");

export default async function changeAvatarForm() {
  avatarContainer.addEventListener("click", async () => {
    changeAvatar.classList.toggle("hidden");
  });
}

changeAvatar.addEventListener("submit", async (e) => {});
