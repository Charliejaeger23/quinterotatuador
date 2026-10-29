# Informe V1 — 28 de octubre de 2026 (Venezuela)

## Estado de entrega

V1 navegable preparada y verificada, **solo en revisión**. Producción no se modificó. WhatsApp apunta al número confirmado; la automatización AssistInk no está validada extremo a extremo.

## Código y entorno reales

- Repositorio: https://github.com/Charliejaeger23/quinterotatuador
- Base: main, `d4cfb5bf602e45a98448476892e029221de580ba`.
- Rama: `feat/qt-editorial-v1`. Consultar `git log -1` para el commit final.
- Carpeta local: `E:/QT_Astra_V1/repository`.
- Producción real: `/srv/qram-lab/sites/quinterotatuador.com/html`, HTML/CSS servido por el contenedor Nginx `qram-lab-hello`. No corresponde a un checkout de main ni de ver 1.
- Se preservó una copia exacta de los archivos desplegados. La aplicación raíz de GitHub se completó y exportó como estática para conservar la arquitectura observada.

## Implementación

Hero editorial; seis obras auténticas autorizadas con lightbox; cinco pasos del proceso; artista; siete preguntas frecuentes; CTA; pie. Cinzel Bold/Poppins, negro/blanco/rojo, logo original sin alteraciones. Sin testimonios, precios, plazos, nombres de clientes ni formularios nuevos.

Archivos principales:
- `app/page.tsx`, `app/layout.tsx`, `app/globals.css`: composición, tipografías, responsive, SEO y datos estructurados limitados a hechos.
- `app/components/sections/*`: HeroSection, PortfolioSection, ProcessSection, ArtistSection, FAQSection y FinalCTASection.
- `app/components/layout/{Navigation,Footer}.tsx`, `app/components/ProjectLink.tsx`: navegación y CTA único compartido.
- `app/data/portfolio.ts`, `lib/config.ts`: fotos/descripciones revisadas y número confirmado.
- `app/robots.ts`, `app/sitemap.ts`, `next.config.js`, `tsconfig.json`, `.eslintrc.json`: exportación y revisión noindex, exclusión explícita de duplicados.
- `public/images/brand/logo-oficial.png`: copia binaria idéntica al archivo suministrado.
- `archive/github-main/`: conservación de componentes anteriores, metadata y hero no autorizado.
- `scripts/verify-review.cjs`, `scripts/serve-review.cjs`: pruebas y servidor de archivos local.

No se reconstruyó el símbolo ni se usó el moodboard como fotografía. Los seis JPG seleccionados pesan entre 82 y 200 KB, con dimensiones, carga diferida y vista ampliada sin deformación. Detalle de permisos y fuentes: RECURSOS.md.

## Pruebas observadas

| Comprobación | Resultado |
|---|---|
| npm ci --ignore-scripts --no-audit --no-fund | 417 paquetes instalados desde lockfile |
| npm run type-check | PASS, código 0 |
| npm run lint | PASS, sin advertencias ni errores ESLint |
| npm run build | PASS, export estático; JS inicial de homepage 94,8 KB |
| Chromium | PASS: 320, 390, 768 y 1440 px |
| Firefox y WebKit | PASS: 390 px, cada motor |
| Menú, anclas, FAQ, seis fotos, cuatro CTA | PASS |
| Lightbox: anterior/siguiente, flechas, Escape, foco y scroll | PASS |
| Imágenes y recursos locales | Sin respuestas >=400 ni errores JS en prueba |
| Formularios y placeholders antiguos | Ninguno en HTML activo |
| Overflow horizontal | Ninguno en anchos probados |
| axe WCAG 2 A/AA y 2.1 AA | 0 infracciones detectadas, escritorio/móvil |
| Revisión VPS por navegador integrado | Abre, amplía obra, cambia a la siguiente y cierra |
| Integridad del paquete enviado al VPS | SHA-256 idéntico local/remoto |
| Producción después del staging | Hashes de index/styles y contenedor/inicio sin cambios |

La revisión automática no equivale a una auditoría completa de accesibilidad ni a una prueba en dispositivos físicos. Las capturas se inspeccionaron visualmente. Los enlaces externos se validaron por destino; no se enviaron mensajes de WhatsApp ni se afirmó haber probado Instagram autenticado.

Runner de pruebas: Playwright Core 1.64.0 y axe Playwright 4.13.0 ya presentes en el equipo, sin agregarlos al lockfile de producción. Comando usado en PowerShell:

```powershell
$env:NODE_PATH='E:\crecerapido_landing_v01\node_modules'
node scripts/verify-review.cjs
```

Para replicarlo en otro equipo, instalar esas versiones en un entorno de QA separado y apuntar NODE_PATH a su node_modules; instalar los navegadores correspondientes con Playwright.

Evidencias locales en `E:/QT_Astra_V1/evidence/`: build.log, lint.log, type-check.log, browser-verification.json, desktop-full.png, mobile-full.png, desktop-hero.png, mobile-hero.png, npm-audit.json y assistink-inspection.txt. El JSON de navegador se copia además a docs/validation/.

## Revisión aislada

- URL lista en este equipo: **http://127.0.0.1:4183/**, mediante túnel SSH al VPS.
- Alternativa local: **http://127.0.0.1:4173/**.
- Directorio VPS: `/srv/qram-lab/reviews/qt-editorial-v1-20261028`.
- Contenedor nuevo: `qt-editorial-v1-review`, puerto host `127.0.0.1:4183`, filesystem de solo lectura, 96 MiB y 0,25 CPU. Se reutilizó la imagen Nginx ya presente.
- No se cambió DNS, TLS, firewall, proxy público ni el contenedor de producción.
- Paquete: `qt-editorial-v1-review.tar.gz`, SHA-256 `20a209cb84f7f4f8fbeacf482e3d7c576e6230f04afc2257d036d15c508f5b1e`.
- El túnel depende del proceso SSH de esta sesión. Reinicio manual si hiciera falta:

```powershell
ssh -N -L 127.0.0.1:4183:127.0.0.1:4183 -o ExitOnForwardFailure=yes -i 'C:\Users\Gaby Torres\.ssh\qram-lab-vps-01_ed25519' root@85.208.51.19
```

El contenedor de revisión no tiene política de reinicio automático. Después de un reinicio del VPS se puede iniciar exclusivamente con `docker start qt-editorial-v1-review`. Esto no cambia el servicio público.

## Pendientes concretos

1. **AssistInk:** Meta confirma +584129583666 / Quinterotatuador / GREEN; el interruptor específico está apagado. El flujo actual no sigue el orden requerido y los cover-ups derivan antes de completar las preguntas. No se cambió el bot. ASSISTINK.md detalla la integración y la prueba pendiente.
2. **Dependencias:** npm audit reporta 17 dependencias con avisos (1 crítica, 12 altas, 4 moderadas). No se resolvieron. La entrega publica solo archivos estáticos; no desplegar el runtime Next existente. SEGURIDAD.md contiene el alcance.
3. **Aprobación:** falta aprobación de diseño y publicación. No se ha publicado V1 en el dominio público. Antes de publicar hay que construir explícitamente en modo producción, renovar respaldo y completar los pasos de OPERACION-Y-ROLLBACK.md.
