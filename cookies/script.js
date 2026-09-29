document.addEventListener("DOMContentLoaded", function() {
    // 1. Si ya contestó a las cookies, no hacemos nada
    if (localStorage.getItem("rs_cookies_consent")) return;

    // 2. Inteligencia de colores: Detectar en qué página estamos
    const currentUrl = window.location.pathname.toLowerCase();
    const isEventos = currentUrl.includes("eventos");
    
    // Si es Eventos usamos dorado, si no, el azul por defecto
    const themeColor = isEventos ? "#D4AF37" : "#34b1ff";

    // 3. Fabricamos el HTML del banner dinámicamente
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.style.borderTop = `2px solid ${themeColor}`; // Línea del color correcto
    
    banner.innerHTML = `
        <p class="cookie-text">
            Utilizamos cookies de rendimiento y telemetría para que la web vaya como un tiro. Tranquilo, no robamos tus datos ni se los vendemos a nadie. 🏎️💨
        </p>
        <div class="cookie-buttons">
            <button id="btn-rechazar-cookies" class="btn-rechazar">SOLO LO BÁSICO</button>
            <button id="btn-aceptar-cookies" class="btn-aceptar" style="background-color: ${themeColor}; color: #000;">ACEPTAR TODAS</button>
        </div>
    `;

    // 4. Lo inyectamos en la página
    document.body.appendChild(banner);

    // 5. Lo hacemos aparecer con retraso para que haga la animación
    setTimeout(() => { banner.classList.add("show"); }, 1000);

    // 6. Damos vida a los botones
    document.getElementById("btn-aceptar-cookies").addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "aceptadas");
        banner.classList.remove("show");
    });

    document.getElementById("btn-rechazar-cookies").addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "rechazadas");
        banner.classList.remove("show");
    });
});