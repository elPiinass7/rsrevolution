# 🚀 Empieza Aquí - Guía Rápida

## Lo que vamos a hacer:
- ✅ Esconder todas las claves
- ✅ Las claves NO aparecerán en el código
- ✅ Seguro para compartir en GitHub

## Paso 1: Genera tu archivo `.env.local` (2 min)

### Opción A - Con Asistente (Fácil) 🎯
1. Abre este archivo en tu navegador:
   ```
   setup-seguro.html
   ```
2. Rellena tus claves (no se envían a internet)
3. Haz clic en "Generar .env.local"
4. Copia el contenido
5. Crea un archivo llamado `.env.local` en la raíz del proyecto
6. Pega el contenido

### Opción B - Manual
1. Copia `.env.example` a `.env.local`
2. Abre `.env.local` y reemplaza los valores:
   ```
   VITE_EMAILJS_PUBLIC_KEY=tu_clave_aqui
   VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
   VITE_RECAPTCHA_SITE_KEY=tu_recaptcha_aqui
   ```

## Paso 2: Verifica que `.env.local` está protegido

En PowerShell o terminal:
```bash
git status
```

Debes ver que `.env.local` NO aparece en la lista (está en `.gitignore`)

## Paso 3: Los datos van a funcionar igual

Tus formularios, reCAPTCHA y analytics funcionarán exactamente igual, pero ahora **sin mostrar las claves**.

## ✅ Listo

- Las claves están en `.env.local` 
- `.env.local` está protegido (no se sube a Git)
- El código está seguro para compartir

---

## 🎓 Próximos pasos (más adelante)

- [ ] Configurar en Vercel/Netlify (si usas esos servicios)
- [ ] Cambiar las claves cada 3 meses
- [ ] Usar GitHub Secrets para CI/CD
- [ ] Implementar otras medidas de seguridad

---

## ❓ Preguntas Frecuentes

### ¿Dónde obtengo mis claves?

**EmailJS:**
- Ve a https://dashboard.emailjs.com
- Account → API → Public Key

**Google reCAPTCHA:**
- Ve a https://www.google.com/recaptcha/admin
- Copia el Site Key

### ¿Qué pasa si pierdo `.env.local`?
No importa, puedes regenerarlo con `setup-seguro.html`

### ¿Puedo compartir el `.env.local`?
**NO**. Las claves están ahí. Nunca lo compartas.

### ¿Se subirá a GitHub?
**NO**. Está en `.gitignore`, protegido automáticamente.

---

## 📞 Soporte

Si algo no funciona:
1. Verifica que `.env.local` existe en la raíz
2. Verifica que las claves son correctas
3. Abre la consola (F12) y busca errores
4. Comprueba que los formularios dicen que funciona

---

**¡Eso es todo!** Una vez que hagas esto una vez, tu código está seguro forever. 🔒
