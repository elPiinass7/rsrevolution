document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
      alert("Por favor, verifica que no eres un robot.");
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
      "success": true|false,
      "challenge_ts": timestamp, 
      "hostname": string,         
      "error-codes": [...]    
      console.log('SUCCESS!', response.status, response.text);
      alert("¡Mensaje enviado correctamente!");
      document.getElementById('contact-form').reset();
      grecaptcha.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert("Ocurrió un error al enviar el mensaje.");
      grecaptcha.reset();
    });
  });
