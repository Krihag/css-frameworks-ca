const hamburgerMenu = document.querySelector("#hamburger-menu");
const hiddenNavs = document.querySelectorAll(".hidden-nav");
console.log(hamburgerMenu);

hamburgerMenu.addEventListener("click", () => {
  console.log("test");
  hiddenNavs.forEach((nav) => {
    nav.classList.toggle("hidden");
  });
});
