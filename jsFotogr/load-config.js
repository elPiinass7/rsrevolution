// ⚠️ IMPORTANTE: Este archivo carga claves desde variables de entorno
// En desarrollo local: Las claves vienen de .env.local (servidor necesario)
// En producción: Las claves vienen de config-deploy.json (GitHub Pages)

window.CONFIG = window.CONFIG || {
  emailjs: {
    publicKey: window.ENV?.VITE_EMAILJS_PUBLIC_KEY || '',
    serviceId: window.ENV?.VITE_EMAILJS_SERVICE_ID || '',
    templateId: window.ENV?.VITE_EMAILJS_TEMPLATE_ID || ''
  },
  recaptcha: {
    siteKey: window.ENV?.VITE_RECAPTCHA_SITE_KEY || ''
  },
  analytics: {
    gaId: window.ENV?.VITE_GA_ID || ''
  }
};

// Si no hay ENV (GitHub Pages), intentar cargar de config-deploy.json
if (!window.CONFIG.emailjs.publicKey) {
  fetch('../config-deploy.json')
    .then(r => r.json())
    .then(config => {
      window.CONFIG = {
        emailjs: {
          publicKey: config.emailjs?.publicKey || '',
          serviceId: config.emailjs?.serviceId || '',
          templateId: config.emailjs?.templateId || ''
        },
        recaptcha: {
          siteKey: config.recaptcha?.siteKey || ''
        },
        analytics: {
          gaId: config.analytics?.id || ''
        }
      };
      if (window.CONFIG.emailjs.publicKey) {
        console.log('✅ Configuración cargada desde config-deploy.json');
      }
    })
    .catch(() => {
      console.warn('⚠️ No se pudo cargar config-deploy.json');
    });
}

// Verificar si las claves están configuradas
if (window.CONFIG.emailjs.publicKey) {
  console.log('✅ Configuración cargada correctamente');
} else {
  console.warn('⚠️ Claves no encontradas. En desarrollo local, necesitas:');
  console.warn('1. Crear .env.local en la raíz');
  console.warn('2. Usar: node serve-dev.js');
}
