//Mandamos a seleccionar elementos del DOM

const nav = document.getElementById("nav");
const menuToggle = document.querySelector(".nav-responsive");
const menuLinks = document.querySelectorAll("nav ul li a");


//función para mostrar el menú
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("responsive"); // Agrega | quita la clase responsive
});

//función para ocultar el menú
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("responsive") //Oculta al hacer clic
    });
});

