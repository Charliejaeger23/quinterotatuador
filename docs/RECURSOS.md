# Procedencia y contenido

- Código base GitHub: Charliejaeger23/quinterotatuador, rama main, commit `d4cfb5bf602e45a98448476892e029221de580ba`.
- Código publicado real: HTML/CSS estático respaldado en docs/production-baseline, sin commit identificable.
- Rama de trabajo: feat/qt-editorial-v1.
- La raíz GitHub no tenía app/page.tsx ni app/layout.tsx. La carpeta ver 1 no coincide con el sitio del VPS. Se completó la aplicación raíz y se conservó ver 1 fuera del type-check; no se adoptó como producción.
- Componentes antiguos y metadata con datos provisionales: conservados en archive/github-main, fuera del build. Se sustituyeron las secciones activas y se retiraron los dos widgets de WhatsApp y los testimonios del árbol importado.
- El build estático mantiene la arquitectura Nginx real. docs y archive nunca se publican en out.

## Identidad

Logo: assets/logo-oficial.png del paquete del propietario, copiado byte por byte a public/images/brand/logo-oficial.png. SHA-256 de ambos:
`00a0108df0581b26d203e801140b2f482d7cc8c9c53665ec79bf3ed2e25eb466`.

Moodboard: visto solo como referencia de negro/blanco/rojo, Cinzel y Poppins. No se incorporó a public ni se extrajeron sus imágenes.

Cinzel 700 y Poppins 400/500/600 se descargan al construir y se sirven localmente mediante next/font. No se necesitan peticiones a Google Fonts del visitante.

## Fotografías

El propietario confirmó expresamente que las 12 imágenes del repositorio son obras de Carlos Quintero y autorizó su publicación. Esta confirmación, junto con la revisión visual, es la base de uso; no se afirma haber realizado una pericia de autenticidad independiente ni disponer de contratos adicionales.

Se seleccionaron seis JPG originales:
- leon-rosa-valor.jpg — 961 × 1280, 200099 bytes. Hero y galería; coincide visualmente con el moodboard.
- reina-aves-peonias.jpg — 961 × 1280, 178535 bytes. Composición figurativa, sin inventar historia.
- lobo-guardian.jpg — 960 × 1280, 133410 bytes. Realismo en grises; coincide con moodboard.
- oso-girasol-loto.jpg — 961 × 1280, 150912 bytes. Realismo en grises; coincide con moodboard.
- mes-amis-emblema.jpg — 960 × 1280, 151955 bytes. Blackwork, evidencia visible.
- zorro-sakura-neotrad.jpg — 854 × 1280, 81782 bytes. Color y composición neotradicional.

No se retocaron, generaron ni alteraron los tatuajes. Recorte de presentación con CSS; lightbox conserva proporciones y muestra la imagen completa. Hero prioritario; galería con carga diferida y dimensiones explícitas. JPEG originales de 82–200 KB evitan procesamiento en servidor; el logo conserva los bytes oficiales.

Las otras seis fotos autorizadas se conservan en el repositorio. Las antiguas imágenes hero, sin autorización específica ni identidad confirmada, se movieron al archivo y no se exportan. No se usó un retrato sin verificar.

Los nombres de clientes, consentimientos inventariados sin evidencia, edades, significados, duraciones, fechas y precios de los datos antiguos no se publican. Desde 2015 y ubicación general proceden del documento del propietario; políticas y plazos se dejan para consulta. Instagram corresponde al perfil indicado en dicho documento; no se afirma acceso autenticado al perfil.
