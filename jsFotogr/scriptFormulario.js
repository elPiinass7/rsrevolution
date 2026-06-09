function initEmailJS() {
    if (typeof CONFIG === 'undefined' || !CONFIG.emailjs?.publicKey) return;
    emailjs.init(CONFIG.emailjs.publicKey);
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        btn.disabled = true;
        btn.innerText = 'Enviando...';

        // Ejecutamos reCAPTCHA v3 de forma invisible
        grecaptcha.ready(function() {
            grecaptcha.execute('6LfnJhYtAAAAAIglCURsVlytJgJv3D27J4UBMGej', {action: 'submit'}).then(function(token) {
                
                // Enviamos los datos a EmailJS usando el token generado
                emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
                    from_name: document.getElementById('name').value,
                    reply_to: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                    to_name: "RS Revolution",
                    "g-recaptcha-response": token
                }).then(() => {
                    form.reset();
                    alert("¡Mensaje enviado!");
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, (error) => {
                    console.error("Error EmailJS:", error);
                    alert("Error al enviar.");
                    btn.innerText = originalText;
                    btn.disabled = false;
                });
                
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEmailJS();
    setupContactForm();
});
