import register from "../api/auth/register.mjs";

const form = document.getElementById("form");

export async function formListener() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    const method = form.method;
    const actionUrl = new URL(form.action);
    const action = actionUrl.pathname;

    register(profile, action, method);
  });
}
