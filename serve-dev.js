#!/usr/bin/env node

// 🚀 Servidor de desarrollo - Inyecta variables de entorno desde .env.local
// Uso: node serve-dev.js
// Luego abre: http://localhost:3000

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Cargar .env.local
function loadEnv() {
  const envPath = path.join(__dirname, '.env.local');
  const env = {};
  
  try {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      if (line && !line.startsWith('#')) {
        const [key, value] = line.split('=');
        if (key && value) {
          env[key.trim()] = value.trim();
        }
      }
    });
    console.log('✅ .env.local cargado');
  } catch (err) {
    console.warn('⚠️ No se encontró .env.local');
  }
  
  return env;
}

const ENV = loadEnv();
const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

// Crear script de variables globales
function getEnvScript() {
  return `<script>
window.ENV={
  VITE_EMAILJS_PUBLIC_KEY:'${ENV.VITE_EMAILJS_PUBLIC_KEY || ''}',
  VITE_EMAILJS_SERVICE_ID:'${ENV.VITE_EMAILJS_SERVICE_ID || ''}',
  VITE_EMAILJS_TEMPLATE_ID:'${ENV.VITE_EMAILJS_TEMPLATE_ID || ''}',
  VITE_RECAPTCHA_SITE_KEY:'${ENV.VITE_RECAPTCHA_SITE_KEY || ''}',
  VITE_GA_ID:'${ENV.VITE_GA_ID || ''}'
};
</script>`;
}

// Servidor HTTP
const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const filePath = path.join(BASE_DIR, pathname === '/' ? 'index.html' : pathname);
  
  // Seguridad: no servir archivos fuera del directorio
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403);
    res.end('Acceso denegado');
    return;
  }
  
  // Si es HTML, inyectar variables de entorno
  if (pathname.endsWith('.html') || pathname === '/') {
    let htmlPath = filePath;
    if (pathname === '/') htmlPath = path.join(BASE_DIR, 'fotografia.html');
    
    try {
      let content = fs.readFileSync(htmlPath, 'utf8');
      
      // Inyectar script de variables antes de </head>
      const envScript = getEnvScript();
      content = content.replace('</head>', `${envScript}\n  </head>`);
      
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(content);
    } catch (err) {
      res.writeHead(404);
      res.end('Archivo no encontrado');
    }
  } else {
    // Servir archivos estáticos
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('No encontrado');
        return;
      }
      
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.webp': 'image/webp',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2'
      };
      
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log('🚀 Servidor de desarrollo corriendo en: http://localhost:' + PORT);
  console.log('📁 Sirviendo archivos desde:', BASE_DIR);
  console.log('🔐 Variables de entorno inyectadas desde .env.local');
  console.log('');
  console.log('⚠️  IMPORTANTE:');
  console.log('   - Este servidor es SOLO para desarrollo');
  console.log('   - NO lo uses en producción');
  console.log('   - Las variables se inyectan en tiempo real');
  console.log('');
  console.log('Presiona Ctrl+C para detener');
});
