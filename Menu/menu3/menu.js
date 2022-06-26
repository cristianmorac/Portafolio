/* Seleccionar las clases y guardar en variables */
const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")
const navLink = document.querySelector("nav-menu-link")

/* Funcion para añadir una nueva clase  */
navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav-menu_visible");
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menu");
    }
    else{
        navToggle.setAttribute("aria-label","Abrir menu");
    }
});
