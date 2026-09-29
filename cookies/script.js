document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("rs_cookies_consent")) return;

    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    
    banner.innerHTML = `
        <p class="cookie-text">
            Utilizamos cookies de rendimiento y telemetría para que la web vaya como un tiro. Tranquilo, no robamos tus datos ni se los vendemos a nadie. 🏎️💨 
            <a href="privacidad.html" style="color: inherit; text-decoration: underline; margin-left: 5px;">Leer Política de Privacidad</a>.
        </p>
        <div class="cookie-buttons">
            <button id="btn-rechazar-cookies" class="btn-rechazar">SOLO LO BÁSICO</button>
            <button id="btn-aceptar-cookies" class="btn-aceptar">ACEPTAR TODAS</button>
        </div>
    `;

    document.body.appendChild(banner);

    const btnAceptar = document.getElementById("btn-aceptar-cookies");
    const btnRechazar = document.getElementById("btn-rechazar-cookies");

    function updateBannerTheme() {
        const currentUrl = window.location.pathname.toLowerCase();
        let isEventos = currentUrl.includes("eventos");
        
        const pageSwitch = document.getElementById("pageSwitch");
        if (pageSwitch) {
            isEventos = pageSwitch.checked;
        }

        const themeColor = isEventos ? "#D4AF37" : "#34b1ff";
        
        banner.style.borderTop = `2px solid ${themeColor}`;
        btnAceptar.style.backgroundColor = themeColor;
        btnAceptar.style.color = "#000";
    }

    updateBannerTheme();

    const pageSwitch = document.getElementById("pageSwitch");
    if (pageSwitch) {
        pageSwitch.addEventListener("change", updateBannerTheme);
    }

    setTimeout(() => { banner.classList.add("show"); }, 1000);

    btnAceptar.addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "aceptadas");
        banner.classList.remove("show");
    });

    btnRechazar.addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "rechazadas");
        banner.classList.remove("show");
    });
});
