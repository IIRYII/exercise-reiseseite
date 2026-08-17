// Warten bis das HTML komplett geladen ist
document.addEventListener("DOMContentLoaded", () => {

    const menuToggleBtn = document.getElementById("menuToggleBtn");
    const mainNav = document.getElementById("mainNav");

    // Klick auf den Burger-Button: Menü auf-/zuklappen
    menuToggleBtn.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggleBtn.setAttribute("aria-expanded", isOpen);
    });

    // Menü automatisch schließen, wenn ein Link angeklickt wird (Sprungmarken)
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("is-open");
            menuToggleBtn.setAttribute("aria-expanded", "false");
        });
    });
});