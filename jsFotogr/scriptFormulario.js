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
        
        const resp = grecaptcha.getResponse();
        if (!resp.length) {
            alert("Por favor, verifica que no eres un robot.");
            return;
        }
        
        btn.disabled = true;
        btn.innerText = 'Enviando...';

        emailjs.send(CONFIG.emailjs.serviceId, CONFIG.emailjs.templateId, {
            from_name: document.getElementById('name').value,
            reply_to: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_name: "RS Revolution",
            "g-recaptcha-response": resp
        }).then(() => {
            form.reset();
            grecaptcha.reset();
            alert("¡Mensaje enviado con éxito!");
            btn.innerText = originalText;
            btn.disabled = false;
        }, (error) => {
            console.error("Error EmailJS:", error);
            grecaptcha.reset();
            alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            btn.innerText = originalText;
            btn.disabled = false;
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initEmailJS();
    setupContactForm();
});
