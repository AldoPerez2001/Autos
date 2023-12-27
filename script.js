document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.getElementById("slideshow");
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideshow.children.length;
        updateSlide();
    }

    function updateSlide() {
        const transformValue = `translateX(${-currentIndex * 100}%)`;
        slideshow.style.transform = transformValue;
    }

    // Ajusta la velocidad de transición y el intervalo de cambio de imagen
    setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos todos los botones de compra
    var buyButtons = document.querySelectorAll(".car button");

    // Añadimos un evento de clic a cada botón
    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Mostramos un mensaje de compra realizada con éxito
            alert("Compra realizada con éxito");
        });
    });
});