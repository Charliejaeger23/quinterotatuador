# Dependencias y límites de la entrega

Se respetó package-lock.json con npm ci --ignore-scripts --no-audit --no-fund. Instalación: 417 paquetes. Next.js resuelto: 14.2.32. No se ejecutó npm audit fix --force ni una migración mayor incidental.

La auditoría npm del lockfile existente reportó **17 dependencias vulnerables: 1 crítica, 12 altas y 4 moderadas** (auditoría completa, incluidas herramientas). Evidencia JSON fuera del repositorio: ../evidence/npm-audit.json.

La categoría crítica corresponde a Next.js y avisos sobre servidores/optimización de imágenes; la herramienta ofrece una migración mayor como corrección. Este resultado NO equivale a 17 fallos explotables en la página estática, pero tampoco debe omitirse ni declararse resuelto.

La V1 se compila a out/, sin servidor Next, rutas API, Server Actions, optimización dinámica, formularios o autenticación. Nginx entrega HTML/CSS/JS/medios. El preview usa un servidor de archivos en loopback. No ejecutar next dev/start expuesto a Internet con este lockfile.

Pendiente antes de cualquier modalidad con runtime Next: actualizar a una versión soportada, revisar las dependencias transitivas, volver a auditar y repetir validación. La exportación estática reduce la superficie de los avisos del servidor; no elimina la necesidad de mantener las herramientas de build.

No se añadieron rastreadores, cookies de marketing ni almacenamiento de datos web. Enlaces externos con noopener/noreferrer. Las URLs de WhatsApp contienen solo el número comercial confirmado y un texto genérico de origen.
