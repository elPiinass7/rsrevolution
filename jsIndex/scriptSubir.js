const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
