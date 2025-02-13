
//JS PARA EL SLIDER
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000, // Cambio automático cada 3 segundos
        disableOnInteraction: false, // No se detiene al interactuar
    },
    slidesPerView: 2, // Permite que las imágenes laterales estén parcialmente visibles
    centeredSlides: true, // Mantén la imagen central perfectamente centrada
    spaceBetween: 20, // Espaciado entre imágenes
    on: {
        slideChangeTransitionEnd: function () {
            const wrapper = document.querySelector('.swiper-wrapper');
            wrapper.style.transform = `translate3d(${parseFloat(wrapper.style.transform.split(',')[0]) + 10}px, 0, 0)`;
        },
    },
});

//JS PARA LETRAS DINAMICAS
document.addEventListener("DOMContentLoaded", function () {
    const words = ["POTENCIA", "EMOCIÓN", "VELOCIDAD", "CALIDAD"]; // Palabras a mostrar
    const textElement = document.getElementById("changing-text");
    let wordIndex = 0; // Índice de la palabra actual
    let letterIndex = 0; // Índice de la letra actual
    let isDeleting = false; // Si está borrando

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayText = isDeleting
            ? currentWord.substring(0, letterIndex--)
            : currentWord.substring(0, letterIndex++);

        textElement.innerHTML = displayText;

        // Velocidades para escribir y borrar
        const typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && letterIndex === currentWord.length) {
            // Pausa antes de borrar
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && letterIndex === 0) {
            // Mueve al siguiente palabra
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Vuelve al inicio si se acaba
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
});
