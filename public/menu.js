const navExpanded = document.getElementById("nav-expanded");
const navMini = document.getElementById("nav-mini");
const xButton = document.getElementById("x-button");

function showNav() {
  navExpanded.className = "footer-nav";
  navMini.className = "footer-mini hidden";
  xButton.className = "minimize";
}
function minimize() {
  navExpanded.className = "footer-nav hidden";
  navMini.className = "footer-mini";
  xButton.className = "minimize hidden";
}
