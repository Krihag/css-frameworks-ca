import authUser from "../api/auth/authUser.mjs";

export async function formListener(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());
    //clear input fields
    console.log(profile);

    const method = form.method;
    const actionUrl = new URL(form.action);
    const action = actionUrl.pathname;

    authUser(profile, action, method);
  });
}
