// script.js

// Obtener el botón de cambio de modo y el enlace de la hoja de estilo
const toggleButton = document.getElementById("toggleMode");
const stylesheet = document.getElementById("stylesheet");

// Función para alternar entre los dos estilos
toggleButton.addEventListener("click", function () {
    // Verificamos si el body ya tiene el modo oscuro
    if (stylesheet.getAttribute("href") === "claro.css") {
        // Si está en modo claro, cambiamos al modo oscuro
        stylesheet.setAttribute("href", "oscuro.css");
        toggleButton.textContent = "Modo Claro"; // Cambiar el texto del botón
    } else {
        // Si está en modo oscuro, volvemos al modo claro
        stylesheet.setAttribute("href", "claro.css");
        toggleButton.textContent = "Modo Oscuro"; // Cambiar el texto del botón
    }
});
