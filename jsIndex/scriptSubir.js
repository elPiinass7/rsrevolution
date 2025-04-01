const scrollBtn = document.getElementById("scrollTopBtn");
function toggleScrollBtn() {
  if (window.scrollY > 150) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}
window.addEventListener("scroll", toggleScrollBtn);
window.addEventListener("load", toggleScrollBtn);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
