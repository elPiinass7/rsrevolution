// 1. LOADER DE LA PÁGINA
window.addEventListener("load", () => {
  const loader = document.getElementById("slider-loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 600);
  }
});

// 2. CARRUSEL DE FOTOS
document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("sliderTrack");
  
  // ¡EL ESCUDO PROTECTOR DEL CARRUSEL! 🛡️
  if (!sliderTrack) return; 

  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slider-container");
  const totalSlides = slides.length;
  let currentIndex = 0;

  const getGap = () => parseFloat(getComputedStyle(sliderTrack).gap) || 0;

  const updateSliderPosition = (animate = true) => {
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
  };

  const nextSlide = () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateSliderPosition();
  };

  updateSliderPosition(false);
  setInterval(nextSlide, 2500);
  window.addEventListener("resize", () => updateSliderPosition(false));
});

// 3. TEXTO DINÁMICO (MÁQUINA DE ESCRIBIR)
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("changing-text");
  
  // ¡EL ESCUDO PROTECTOR DEL TEXTO! 🛡️
  if (!textElement) return;

  const words = ["PASIÓN", "POTENCIA", "VELOCIDAD", "CALIDAD"];
  let wordIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  const typeEffect = () => {
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
  };

  typeEffect();
});

// 4. MODO CAMALEÓN (TEMA GOLD / BLUE)
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("pageSwitch");
    const textFoto = document.getElementById("text-foto");
    const textEvent = document.getElementById("text-event");
    const logoLink = document.querySelector(".navbar-brand");
    const url = window.location.href;
    
    const paginasCamaleon = ["contacto.html", "sobreNosotros.html", "privacidad.html", "condiciones.html"];
    const esCamaleon = paginasCamaleon.some(pagina => url.includes(pagina));
    
    if (url.includes("eventos.html")) {
        localStorage.setItem("rs_theme", "gold");
    } else if (url.includes("fotografia.html") || url.includes("galeria.html") || url.includes("descargas.html")) {
        localStorage.setItem("rs_theme", "blue");
    }
    
    const currentTheme = localStorage.getItem("rs_theme") || "blue";
    
    if (esCamaleon) {
        if (currentTheme === "gold") {
            document.body.classList.add("gold-theme");
        } else {
            document.body.classList.remove("gold-theme");
        }
    }
    
    if (toggle && textFoto && textEvent) {
        if (currentTheme === "gold") {
            toggle.checked = true;
            textEvent.classList.add("active-gold");
            textFoto.classList.remove("active-blue");
            if (logoLink) logoLink.href = "eventos.html";
        } else {
            toggle.checked = false;
            textFoto.classList.add("active-blue");
            textEvent.classList.remove("active-gold");
            if (logoLink) logoLink.href = "fotografia.html";
        }
    }
});

function togglePage(checkbox) {
    const url = window.location.href;
    const isGold = checkbox.checked;
    const logoLink = document.querySelector(".navbar-brand");
    
    localStorage.setItem("rs_theme", isGold ? "gold" : "blue");
    
    const paginasCamaleon = ["contacto.html", "sobreNosotros.html", "privacidad.html", "condiciones.html"];
    const esCamaleon = paginasCamaleon.some(pagina => url.includes(pagina));
    
    if (esCamaleon) {
        const textFoto = document.getElementById("text-foto");
        const textEvent = document.getElementById("text-event");
        
        if (isGold) {
            document.body.classList.add("gold-theme");
            if (textEvent) textEvent.classList.add("active-gold");
            if (textFoto) textFoto.classList.remove("active-blue");
            if (logoLink) logoLink.href = "eventos.html";
        } else {
            document.body.classList.remove("gold-theme");
            if (textFoto) textFoto.classList.add("active-blue");
            if (textEvent) textEvent.classList.remove("active-gold");
            if (logoLink) logoLink.href = "fotografia.html"; 
        }
        return; 
    }
    
    if (isGold) {
        window.location.href = "eventos.html";
    } else {
        window.location.href = "fotografia.html";
    }
}
