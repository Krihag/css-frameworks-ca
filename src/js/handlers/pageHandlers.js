import storage from "../utils/storage.js";

export default {
  enterPage() {
    const profile = storage.load("profile");
    const token = storage.load("token");
    if (!profile || !token) window.location.href = "/";

    //
    let prevPage = storage.load("prevPage");
    if (!prevPage || prevPage === window.location.href) {
      prevPage = null;
    }
    let status = storage.load("status");
    if (!status) {
      status = { name: "available", color: "bg-green-500" };
      storage.save("status", status);
    }

    return {
      profile,
      prevPage,
      status,
    };
  },

  exitPage(url) {
    let leavingPage = window.location.href;
    console.log(leavingPage);
    leavingPage.includes(url)
      ? (leavingPage = null)
      : storage.save("prevPage", leavingPage);
  },
};
