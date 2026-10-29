# Refinamiento visual V1.1

Iteración sobre feat/qt-editorial-v1, base V1 9cd3904. Producción no modificada; AssistInk permanece apagado y no se intervino en su configuración.

## Cambios

- Texto informativo de 14–16 px (descripciones del hero, obras, proceso, artista, FAQ, contacto y pie). Se conservan índices y microtextos editoriales. Interlineado 1,85 y espaciados revisados.
- Galería móvil hasta 760 px: tres obras iniciales, botón «Ver las seis obras» / «Mostrar tres obras», aria-expanded y aria-controls. En escritorio se ven las seis. El lightbox permite recorrer todas, con Escape, flechas, contención del foco y retorno al botón de origen.
- Orden: retrato/aves/flores, lobo, oso/flores, emblema, zorro y león. La imagen y el titular del hero se conservan.
- CTA WhatsApp contextual en la cabecera móvil: aparece cuando el hero sale por arriba. Ocupa el espacio de la marca escrita, conservando el símbolo oficial y la altura de la cabecera. No añade una capa flotante sobre el contenido. Se oculta en menú/lightbox y reaparece al cerrarlos; al volver al hero desaparece. Destino y texto de WhatsApp existentes, sin activar AssistInk.
- Ajustes a 320 px: titular de 36 px, acciones apiladas y metadatos flexibles. A 768 px se conservan dos columnas del hero y seis obras.

## Validación

- npm run type-check: PASS.
- npm run lint: PASS, sin advertencias/errores ESLint.
- npm run build: PASS, exportación estática, JS inicial 95,2 KB.
- Chromium: PASS en 320, 390, 768 y 1440 px; Firefox y WebKit: PASS en 390 px.
- Expansión/contracción, orden de obras, lightbox, teclado/foco, anclas, FAQ, imágenes, ausencia de overflow y destinos WhatsApp: PASS.
- CTA: se comprobó que su rectángulo queda dentro de la cabecera y desaparece con menú/lightbox y al regresar al hero.
- axe WCAG 2 A/AA y 2.1 AA: cero infracciones detectadas a 390/1440 px. No equivale a una auditoría completa ni prueba en teléfonos físicos.
- Producción conserva los hashes de index.html/styles.css y el mismo contenedor/hora de inicio. No se tocó AssistInk.

Evidencia versionada: docs/validation/v1.1/. Los comandos de QA y dependencias del equipo están documentados en INFORME_V1.md. scripts/verify-review.cjs se actualizó con las regresiones de V1.1.

## Capturas comparativas

Directorio local: E:/QT_Astra_V1/evidence/v1.1/.

- before/after-{320,390,768,1440}-{hero,portfolio,process}.png: mismo ancho, mismo encuadre y mismo navegador; V1 contra V1.1.
- after-320-expanded.png y after-390-expanded.png: galería desplegada.
- comparison-390-process.png y comparison-1440-process.png: comparación lado a lado, V1 izquierda / V1.1 derecha.
- comparison.html: índice visual de todos los anchos y secciones.
- mobile-full.png y desktop-full.png: capturas de página completa tomadas durante QA.

Se revisaron visualmente 320, 390, 768 y 1440 px. Los JPG y el logo conservan sus bytes originales; no se generaron ni retocaron imágenes.

## Revisión

Local: http://127.0.0.1:4173/ (npm run preview).
VPS V1.1: http://127.0.0.1:4184/ mediante túnel SSH de este equipo. Directorio aislado /srv/qram-lab/reviews/qt-editorial-v11-20261028, contenedor qt-editorial-v11-review, puerto vinculado solo a loopback. V1 se conserva en 4183 para comparar.

Esta iteración no cambia los pendientes de AssistInk ni resuelve los avisos del lockfile descritos en ASSISTINK.md y SEGURIDAD.md. La publicación en el dominio sigue pendiente de aprobación explícita. Se mantienen los respaldos y el procedimiento de OPERACION-Y-ROLLBACK.md.
