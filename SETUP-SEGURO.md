# 🔐 Configuración Segura - RS Revolution

Guía paso a paso para configurar las claves sin exponerlas.

## Paso 1: Crear archivo `.env.local` (Desarrollo Local)

```bash
# En Windows, desde PowerShell en la raíz del proyecto:
Copy-Item .env.example .env.local

# O manualmente:
# 1. Copia el contenido de .env.example
# 2. Crea nuevo archivo: .env.local
# 3. Pega el contenido y relléna con tus valores
```

**IMPORTANTE**: `.env.local` está en `.gitignore` - NUNCA se subirá a Git ✅

## Paso 2: Rellenar valores en `.env.local`

Abre `.env.local` y reemplaza los valores:

```
# EmailJS (obtener de https://dashboard.emailjs.com)
VITE_EMAILJS_PUBLIC_KEY=FLCvsaSBa0Fl16g8S
VITE_EMAILJS_SERVICE_ID=service_x3dvhqc
VITE_EMAILJS_TEMPLATE_ID=template_jd5j3i3

# Google reCAPTCHA (obtener de https://www.google.com/recaptcha/admin)
VITE_RECAPTCHA_SITE_KEY=6LcgmdwqAAAAAEOIXf2Ctg2pB16QMLM1ZQi7BTJ-

# Google Analytics (opcional)
VITE_GA_ID=G-0FLF50C05Z
```

**Las claves NUNCA se ven en el código** ✅

## Paso 3: En HTML (No cargar config.js)

En los archivos HTML, **elimina la referencia a config.js**:

```diff
- <script src="config.js" defer></script>
- <script src="config-secure.js" defer></script>
+ <!-- Sin scripts de config -->
```

En su lugar, usar **variables globales** cargadas de forma segura:

```html
<!-- En el HEAD, después de los estilos -->
<script>
  window.CONFIG = {
    emailjs: {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
    },
    recaptcha: {
      siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''
    }
  };
</script>
```

## Paso 4: Verificar que funciona

Abre la consola del navegador (F12) y ejecuta:

```javascript
console.log(window.CONFIG.emailjs.publicKey)
// Debe mostrar: FLCvsaSBa0Fl16g8S (o tu valor)

console.log(window.CONFIG.recaptcha.siteKey)
// Debe mostrar: 6LcgmdwqAAAAAEOIXf2Ctg2pB16QMLM1ZQi7BTJ- (o tu valor)
```

## ⚠️ IMPORTANTE - Producción (Vercel, Netlify, etc.)

### Para Vercel:
```bash
# Desde la consola de Vercel o mediante CLI:
vercel env add VITE_EMAILJS_PUBLIC_KEY
vercel env add VITE_EMAILJS_SERVICE_ID
vercel env add VITE_EMAILJS_TEMPLATE_ID
vercel env add VITE_RECAPTCHA_SITE_KEY
vercel env add VITE_GA_ID
```

### Para Netlify:
```
1. Dashboard → Site → Settings → Build & Deploy → Environment
2. Add new variable
3. Añade cada variable (VITE_EMAILJS_PUBLIC_KEY, etc.)
```

### Para hosting tradicional:
```php
// En un archivo PHP seguro (no publicado):
<?php
define('EMAILJS_KEY', 'tu_clave');
// Pasar al cliente de forma segura...
?>
```

## 🔍 Verificar seguridad

Ejecuta en la raíz del proyecto:

```bash
# Ver qué va a subirse a Git:
git status
# Debe mostrar que NO incluye .env.local ✅

# Verificar que .gitignore funciona:
git check-ignore .env.local
# Debe mostrar: .env.local
```

## ✅ Checklist Final

- [ ] Creado `.env.local`
- [ ] Rellenado con valores reales
- [ ] `.env.local` en `.gitignore`
- [ ] `git status` NO muestra `.env.local`
- [ ] Las claves NO aparecen en el HTML
- [ ] Formularios funcionan correctamente
- [ ] ReCAPTCHA funciona correctamente
- [ ] Configurado en producción (Vercel/Netlify/etc)

---

**Resultado Final**: 
- ✅ Las claves NUNCA aparecen en el código
- ✅ Seguro para compartir código en GitHub
- ✅ Funciona en desarrollo y producción
- ✅ Fácil de mantener
