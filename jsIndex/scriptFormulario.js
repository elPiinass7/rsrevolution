document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var submitButton = document.querySelector('#contact-form button[type="submit"]');
  submitButton.disabled = true;
  var recaptchaResponse = grecaptcha.getResponse();
  if (recaptchaResponse.length === 0) {
    alert("Por favor, verifica que no eres un robot.");
    submitButton.disabled = false;
    return;
  }
  emailjs.send("service_x3dvhqc", "template_jd5j3i3", {
    from_name: document.getElementById('name').value,
    reply_to: document.getElementById('email').value,
    message: document.getElementById('message').value,
    to_name: "RS Revolution",
    "g-recaptcha-response": recaptchaResponse
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    alert("¡Mensaje enviado correctamente!");
    document.getElementById('contact-form').reset();
    grecaptcha.reset();
    submitButton.disabled = false; 
  }, function(error) {
    console.log('FAILED...', error);
    alert("Ocurrió un error al enviar el mensaje.");
    grecaptcha.reset();
    submitButton.disabled = false;
  });
});
