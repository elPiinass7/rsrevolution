// Cargar configuración desde variables de entorno
// En desarrollo local: usar .env.local o .env
// En producción: configurar variables de entorno en el servidor

const CONFIG = {
  // Intentar cargar desde variables de entorno, si no existen usar valores vacíos
  emailjs: {
    publicKey: import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || '',
    serviceId: import.meta.env?.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || ''
  },
  recaptcha: {
    siteKey: import.meta.env?.VITE_RECAPTCHA_SITE_KEY || ''
  },
  analytics: {
    gaId: import.meta.env?.VITE_GA_ID || ''
  }
};

// Verificar que las claves están configuradas
if (!CONFIG.emailjs.publicKey && !CONFIG.recaptcha.siteKey) {
  console.warn('⚠️ Claves de configuración no encontradas. Verificar .env.local o variables de entorno');
}

export default CONFIG;
