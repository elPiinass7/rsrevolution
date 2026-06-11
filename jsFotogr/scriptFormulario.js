// 1. Iniciamos EmailJS directamente con tu Public Key (sin depender de load-config)
emailjs.init("FLCvsaSBa0Fl16g8S"); 

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        // 2. NUESTRO PORTERO (Validación en tu web)
        // Comprobamos si el usuario ha marcado físicamente el "No soy un robot"
        const resp = grecaptcha.getResponse();
        if (!resp.length) {
            alert("Por favor, verifica que no eres un robot marcando la casilla.");
            return; // Bloqueamos el envío si no está marcado
        }
        
        btn.disabled = true;
        btn.innerText = 'Enviando...';

        // 3. ENVÍO SEGURO (Directo a EmailJS sin el token para que no te cobren)
        emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", {
            from_name: document.getElementById('name').value,
            reply_to: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_name: "RS Revolution"
        }).then(() => {
            form.reset();
            grecaptcha.reset(); // Reiniciamos el tic verde del captcha
            alert("¡Mensaje enviado con éxito!");
            btn.innerText = originalText;
            btn.disabled = false;
        }, (error) => {
            console.error("Error EmailJS:", error);
            grecaptcha.reset(); // Reiniciamos el captcha por seguridad
            alert("Error al enviar el mensaje. Inténtalo de nuevo.");
            btn.innerText = originalText;
            btn.disabled = false;
        });
    });
}

// Ejecutamos la configuración del formulario cuando el HTML esté listo
document.addEventListener('DOMContentLoaded', setupContactForm);
