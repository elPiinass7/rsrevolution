const scrollBtn = document.getElementById("scrollTopBtn");
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  if (scrollPos > 150) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
