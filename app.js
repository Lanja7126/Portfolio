// Sélectionner le bouton toggle et le menu
const toggleBtn = document.getElementById("toggle-menu");
const menu = document.getElementById("menu");

// Ajouter un event listener pour afficher/masquer le menu
toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});