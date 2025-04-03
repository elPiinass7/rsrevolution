let recaptchaCargado = false;

function cargarRecaptcha() {
  if (!recaptchaCargado) {
    const script = document.createElement('script');
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    recaptchaCargado = true;
  }
}

const form = document.querySelector("#contact-form");
if ("IntersectionObserver" in window && form) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      cargarRecaptcha();
      observer.disconnect();
    }
  });
  observer.observe(form);
}
