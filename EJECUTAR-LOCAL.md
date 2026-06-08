# 🚀 Ejecutar en Desarrollo (Con claves seguras)

Ahora que tienes `.env.local` con tus claves, necesitas un pequeño servidor para que funcione.

## Opción 1: Servidor Node.js (Recomendado) ⭐

### Requisitos
- Tener Node.js instalado ([Descargar](https://nodejs.org))

### Pasos

1. **Abre PowerShell en la raíz del proyecto** (donde está `serve-dev.js`)

2. **Ejecuta el servidor:**
   ```bash
   node serve-dev.js
   ```

3. **Abre en tu navegador:**
   ```
   http://localhost:3000
   ```

4. **Verifica que funciona:**
   - Abre la consola (F12)
   - Ejecuta: `console.log(window.ENV)`
   - Debe mostrar tus claves ✅

### Detener el servidor
Presiona `Ctrl+C` en PowerShell

---

## Opción 2: Servidor Python

Si prefieres Python (sin Node.js):

### Requisitos
- Python 3.x instalado

### Pasos

1. **En PowerShell:**
   ```bash
   python -m http.server 3000
   ```

2. **Abre en el navegador:**
   ```
   http://localhost:3000
   ```

⚠️ **Nota**: Con Python puro, las variables de entorno NO se inyectarán automáticamente. Necesitarías crear un script Python adicional.

**Mejor opción**: Usar Node.js con `serve-dev.js`

---

## Opción 3: Servidor Live Server (VS Code)

Si usas VS Code:

1. Instala extensión "Live Server"
2. Click derecho en cualquier `.html` → "Open with Live Server"
3. Abre consola (F12)
4. Las variables se cargarán de `.env.local` ✅

---

## ✅ Verificar que funciona

Después de ejecutar el servidor:

1. Abre la consola del navegador (F12)
2. Ejecuta estos comandos:

```javascript
// Verificar que ENV está disponible
console.log(window.ENV.VITE_EMAILJS_PUBLIC_KEY)
// Debe mostrar tu clave real (ej: FLCvsaSBa0Fl16g8S)

// Verificar que CONFIG está disponible
console.log(window.CONFIG.emailjs.publicKey)
// Debe ser igual a ENV.VITE_EMAILJS_PUBLIC_KEY

// Verificar que EmailJS se inicializó
console.log(typeof emailjs)
// Debe mostrar: "object"
```

---

## 📝 Resumen

| Opción | Comando | Fácil | Claves Seguras |
|--------|---------|-------|----------------|
| Node.js | `node serve-dev.js` | ⭐⭐⭐ | ✅ Sí |
| Python | `python -m http.server 3000` | ⭐⭐ | ⚠️ No |
| Live Server | Click derecho → Open | ⭐⭐⭐ | ✅ Sí |

---

## 🔒 Ahora tu sitio está seguro

- ✅ Las claves están en `.env.local` (protegido)
- ✅ No aparecen en los archivos HTML
- ✅ Se inyectan en tiempo de ejecución
- ✅ Seguro para compartir código en GitHub

---

## 🌍 Cuando subas a Producción (Vercel, Netlify, etc)

En ese momento, en lugar de `.env.local`, configura las variables de entorno en el panel del hosting:

**Vercel:**
```
Dashboard → Settings → Environment Variables
```

**Netlify:**
```
Settings → Build & Deploy → Environment
```

El servidor de producción hará la misma inyección que `serve-dev.js` hace localmente.

---

**¡Listo! Ahora todo está seguro y funcional.** 🎉
