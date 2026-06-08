// ⚠️ IMPORTANTE: Este archivo carga claves desde variables de entorno
// En desarrollo local: Las claves vienen de .env.local (servidor necesario)
// En producción: Las claves las inyecta el servidor/hosting

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

// Verificar si las claves están configuradas
if (!window.CONFIG.emailjs.publicKey) {
  console.warn('⚠️ Claves no encontradas. En desarrollo local, necesitas:');
  console.warn('1. Crear .env.local en la raíz');
  console.warn('2. Usar un servidor (no abrir HTML directamente)');
}

// Si las claves están disponibles, mostrar estado
if (window.CONFIG.emailjs.publicKey) {
  console.log('✅ Configuración cargada correctamente');
}
