document.addEventListener("DOMContentLoaded", function() {
  const sliderTrack = document.getElementById("sliderTrack");
  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slider-container");
  let currentIndex = 0;
  const totalSlides = slides.length;
  function getGap() {
    return parseFloat(getComputedStyle(sliderTrack).gap) || 0;
  }
  function updateSliderPosition(animate = true) {
    const slideWidth = slides[0].offsetWidth;
    const gap = getGap();
    const offset = currentIndex * (slideWidth + gap);
    const centerOfSlide = offset + slideWidth / 2;
    const containerCenter = container.offsetWidth / 2;
    const translateX = containerCenter - centerOfSlide;
    sliderTrack.style.transition = animate ? "transform 0.5s ease" : "none";
    sliderTrack.style.transform = `translateX(${translateX}px)`;
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });
  }
  updateSliderPosition(false);
  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSliderPosition();
    } else {
      currentIndex = 0;
      updateSliderPosition(true);
    }
  }
  setInterval(nextSlide, 2700);
  window.addEventListener("resize", () => {
    updateSliderPosition(false);
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const words = ["PASIÓN", "POTENCIA", "VELOCIDAD", "CALIDAD"];
    const textElement = document.getElementById("changing-text");
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        const displayText = isDeleting
            ? currentWord.substring(0, letterIndex--)
            : currentWord.substring(0, letterIndex++);

        textElement.innerHTML = displayText;

        const typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && letterIndex === currentWord.length) {
            setTimeout(() => (isDeleting = true), 1000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();
});
