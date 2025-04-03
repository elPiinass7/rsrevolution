window.addEventListener("load", function () {
  const loader = document.getElementById("tacho-loader-wrapper");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

document.addEventListener('DOMContentLoaded', function() {
  const swipers = document.querySelectorAll('.swiper-container');
  
  swipers.forEach((swiperElement) => {
      new Swiper(swiperElement, {
          loop: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          pagination: {
              el: '.swiper-pagination',
              clickable: true,
          },
      });
  });
});
