window.addEventListener("load", function () {
  const loader = document.getElementById("tacho-loader-wrapper");
  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
window.addEventListener("load", function () {
  const loader = document.getElementById("tacho-loader-wrapper");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 600);
  }
});
