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
    slidesPerView: 3, // Mostrar 3 imágenes a la vez
    centeredSlides: true, // Centrar la imagen activa
});