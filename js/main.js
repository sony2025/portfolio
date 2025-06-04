// main.js
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const menuLinks = document.querySelectorAll('.navbar-menu a');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('open');
    });

    // Opcional: cerrar el menú al hacer clic en un enlace (en móvil)
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('open');
        });
    });
});



