const hamburgerButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

hamburgerButton.addEventListener("click", toggleMenuHandler);
function toggleMenuHandler(e) {
  const menuIcon = e.target.closest("#menu-btn");
  menuIcon.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
