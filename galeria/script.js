window.addEventListener("load", function () {
  const loader = document.getElementById("tacho-loader-wrapper");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

document.addEventListener('DOMContentLoaded', function() {
  const sliders = document.querySelectorAll('.slider-container-galeria');
  sliders.forEach((slider) => {
    new Swiper(slider, {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
});
