# 🚀 GitHub Actions - Setup en 3 Pasos

## Paso 1: Sube este archivo a GitHub

El archivo `.github/workflows/deploy.yml` ya está creado. Solo necesitas hacer push:

```bash
git add .github/
git commit -m "Añadir GitHub Actions workflow"
git push
```

---

## Paso 2: Configura GitHub Secrets

En tu repositorio de GitHub:

1. Ve a: **Settings** → **Secrets and variables** → **Actions**

2. Crea estos 5 secretos (click en "New repository secret"):

| Nombre del Secret | Valor |
|------------------|-------|
| `EMAILJS_PUBLIC_KEY` | `FLCvsaSBa0Fl16g8S` |
| `EMAILJS_SERVICE_ID` | `service_x3dvhqc` |
| `EMAILJS_TEMPLATE_ID` | `template_jd5j3i3` |
| `RECAPTCHA_SITE_KEY` | `6LcgmdwqAAAAAEOIXf2Ctg2pB16QMLM1ZQi7BTJ-` |
| `GA_ID` | `G-0FLF50C05Z` |

**Nota:** Tus valores exactos están en tu `.env.local`

---

## Paso 3: Actualiza el CNAME (opcional)

Si usas dominio personalizado en Hostinger:

1. Abre `.github/workflows/deploy.yml`
2. Busca esta línea:
   ```yaml
   cname: tu-dominio.com
   ```
3. Reemplaza `tu-dominio.com` con tu dominio real (ej: `rsrevolution.com`)
4. Haz push

---

## ✅ ¿Funciona?

Después de hacer push:

1. Ve a tu repo en GitHub
2. Click en **Actions** (pestaña superior)
3. Verás el workflow ejecutándose
4. Cuando termina (con ✓), está en GitHub Pages

Tu sitio estará en:
```
https://tu-usuario.github.io/rsrevolution-main/
```

O si usas dominio personalizado:
```
https://tu-dominio.com/
```

---

## 🔒 ¿Qué Pasa?

1. Haces `git push`
2. GitHub recibe los cambios
3. GitHub Actions ejecuta el workflow:
   - Crea `.env.local` con tus secretos
   - Copia los archivos a la rama `gh-pages`
   - GitHub Pages publica automáticamente
4. Tu sitio está vivo con las claves inyectadas

**Las claves NUNCA aparecen en el código**, están seguras en GitHub Secrets. ✅

---

## ❓ ¿Y si algo falla?

Ve a **Actions** en GitHub y mira el log rojo para ver qué salió mal.

Típicamente es porque falta un secret o el nombre no coincide.

---

## 🎉 ¡Listo!

Cada vez que hagas `git push`, se deployment automático. Sin hacer nada más. 🚀
