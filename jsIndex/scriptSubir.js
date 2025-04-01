  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
      
    if (scrollPos > 150) {
      scrollBtn.style.display = "flex"; // aparece centrado gracias a flex
    } else {
      scrollBtn.style.display = "none"; // desaparece si estás arriba
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
