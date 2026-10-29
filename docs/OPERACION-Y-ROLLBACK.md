# Operación y reversión — V1 en revisión

**No ejecutar ninguna publicación ni activar AssistInk sin aprobación explícita del propietario.**

## Hechos de producción

Inspección SSH de solo lectura el 28 de octubre de 2026, hora de Venezuela (los logs UTC pueden indicar 29 de octubre).

- Host: `85.208.51.19` (`vmi3637127`).
- Sitio real: `/srv/qram-lab/sites/quinterotatuador.com/html`.
- Dos archivos, `index.html` y `styles.css`. No hay checkout Git ni proceso Next.js en esa ruta. No se puede atribuir un commit a esos archivos.
- Servicio: contenedor `qram-lab-hello`, Nginx, puertos públicos 80/443. Montaje del sitio de solo lectura dentro del contenedor: `/var/www/quinterotatuador.com`.
- ID del contenedor: `4bf00033e26ca710ca58b26e80d6f8788ef0363fc2e5adfc51fb10c84e468be6`.
- Imagen: `sha256:df221db836e1754089190208cee7eeda94f233197056426eda74a43ab1abeac2`.
- Configuración: `/srv/qram-lab/stacks/hello/conf.d/quinterotatuador.conf`; stack compartido en `/srv/qram-lab/stacks/hello`.
- Certificado Let's Encrypt: `/etc/letsencrypt/live/quinterotatuador.com/fullchain.pem`, válido del 29/10/2026 00:56:33 UTC al 27/01/2027 00:56:32 UTC.
- El sitio actual responde HTTPS 200 y HTTP redirige a HTTPS. Conserva placeholders de WhatsApp/Instagram.
- No se encontró un pipeline de publicación en GitHub; el servicio observado sirve el directorio estático montado. No se afirma conocer el procedimiento histórico de carga.

## Respaldo recuperable

Antes de editar se descargaron los dos archivos reales y la configuración Nginx a `E:\QT_Astra_V1\backups`. También se creó `github-main.bundle` con Git.

Copias no secretas de los tres archivos de producción están en `docs/production-baseline/`.

SHA-256 de producción:
- index.html: `dfdcc06ea6d5c9c93654d01e9219904fbdb464cc00ddab9f5c99d5e0eed361f8`.
- styles.css: `6ab52fcc1ac81f6d900dfd52254ad9a05a5ed563b6f6657e3d2eb132398ee754`.
- configuración Nginx: `d35da0c3a4f19319d6b3bf1b234b8287a937d6c092bcef05e7b23230dee2ffd5`.

No se copiaron claves privadas, tokens, archivos .env ni bases de conversaciones al repositorio. No se reinició el proxy compartido.

## Preparación y publicación posterior a aprobación

1. Resolver el estado y flujo de AssistInk, y completar una prueba autorizada de extremo a extremo antes de declarar integrada la automatización.
2. Revisar `docs/SEGURIDAD.md`. Esta entrega solo soporta publicar `out/` como archivos estáticos; no desplegar un servidor Next con este lockfile.
3. Crear un respaldo nuevo del directorio real justo antes del despliegue. Validar que no haya cambios de terceros desde la inspección.
4. En la copia de trabajo, ejecutar `npm ci`, `npm run type-check`, `npm run lint` y construir con `QT_REVIEW=false`. En PowerShell: `$env:QT_REVIEW='false'; npm run build`. Verificar robots indexable, canonical y sitemap. El build de revisión es noindex por defecto.
5. Subir el export a un directorio de release independiente y verificar su contenido. No subir node_modules, .env, archive, docs ni el código del bot.
6. Con aprobación vigente, copiar primero los assets al directorio servido y sustituir index.html al final mediante un archivo temporal y rename. No borrar assets antiguos en el mismo despliegue; permiten revertir. No hace falta reiniciar Nginx ni modificar TLS.
7. Verificar HTTPS/SSL, imágenes, menú, galería, enlaces y mensajes reales del bot. Si hay un fallo, revertir el HTML.

Ejemplo de operaciones sobre el host, **solo después de aprobación** y sustituyendo RELEASE/BACKUP por rutas absolutas comprobadas:

```sh
# Copiar primero recursos; no --delete.
rsync -a --exclude=index.html "$RELEASE/" /srv/qram-lab/sites/quinterotatuador.com/html/
install -m 644 "$RELEASE/index.html" /srv/qram-lab/sites/quinterotatuador.com/html/index.html.pending
mv /srv/qram-lab/sites/quinterotatuador.com/html/index.html.pending /srv/qram-lab/sites/quinterotatuador.com/html/index.html
```

Rollback de contenido (restaura los archivos del respaldo tomado inmediatamente antes de publicar):

```sh
install -m 644 "$BACKUP/styles.css" /srv/qram-lab/sites/quinterotatuador.com/html/styles.css
install -m 644 "$BACKUP/index.html" /srv/qram-lab/sites/quinterotatuador.com/html/index.html.rollback
mv /srv/qram-lab/sites/quinterotatuador.com/html/index.html.rollback /srv/qram-lab/sites/quinterotatuador.com/html/index.html
curl -fsSI https://www.quinterotatuador.com
```

No sustituir el directorio raíz del montaje mediante rename: el contenedor puede seguir apuntando al inode anterior. No recrear el contenedor compartido para una actualización de archivos.
