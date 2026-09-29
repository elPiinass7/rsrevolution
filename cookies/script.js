document.addEventListener("DOMContentLoaded", function() {
    function activarGoogleAnalytics() {
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://www.googletagmanager.com/gtag/js?id=G-0FLF50C05Z";
        document.head.appendChild(script1);
        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0FLF50C05Z');
        `;
        document.head.appendChild(script2);
    }
    const consentimiento = localStorage.getItem("rs_cookies_consent");
    if (consentimiento) {
        if (consentimiento === "aceptadas") {
            activarGoogleAnalytics();
        }
        return;
    }
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.innerHTML = `
        <p class="cookie-text">
            En RS Revolution utilizamos cookies de rendimiento para analizar el tráfico y hacer que la web funcione a la perfección. Puedes aceptar todas para ayudarnos a optimizar el motor de la página, o quedarte solo con las esenciales.
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
        const isIndex = currentUrl === "/" || currentUrl.includes("index.html") || currentUrl === "";
        const pageSwitch = document.getElementById("pageSwitch");
        if (isIndex && !pageSwitch) {
            banner.classList.add("banner-index");
            banner.style.borderTop = "none";
            banner.style.borderImage = "none";
            btnAceptar.style.background = "#ffffff";
            btnAceptar.style.color = "#000000";
            return;
        }
        let isEventos = currentUrl.includes("eventos");
        if (pageSwitch) {
            isEventos = pageSwitch.checked;
        }
        const themeColor = isEventos ? "#D4AF37" : "#34b1ff";
        banner.classList.remove("banner-index");
        banner.style.borderImage = "none";
        banner.style.borderTop = `2px solid ${themeColor}`;
        btnAceptar.style.background = themeColor;
        btnAceptar.style.color = "#000";
    }
    updateBannerTheme();
    setInterval(updateBannerTheme, 100);
    setTimeout(() => { banner.classList.add("show"); }, 1000);
    btnAceptar.addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "aceptadas");
        banner.classList.remove("show");
        activarGoogleAnalytics(); 
    });
    btnRechazar.addEventListener("click", function() {
        localStorage.setItem("rs_cookies_consent", "rechazadas");
        banner.classList.remove("show"); 
    });
});
