# Quinterotatuador · V1 editorial

Versión de revisión, sin despliegue en producción. Aplicación raíz Next.js/React/TypeScript/Tailwind con exportación estática compatible con el Nginx existente.

## Ejecutar

```sh
npm ci
npm run type-check
npm run lint
npm run build
npm run preview
```

Revisión local: http://127.0.0.1:4173. El servidor escucha solo en loopback. Por defecto, el build incluye noindex y robots Disallow. No usar npm start como servidor público.

La revisión del VPS está en http://127.0.0.1:4183 a través del túnel SSH abierto en el equipo del propietario. No es un enlace público ni funciona desde otro dispositivo sin túnel.

## Documentación

- [Refinamiento V1.1](docs/INFORME_V1.1.md)

- [Informe de implementación y pruebas](docs/INFORME_V1.md)
- [Producción, respaldo y rollback](docs/OPERACION-Y-ROLLBACK.md)
- [Estado de WhatsApp/AssistInk](docs/ASSISTINK.md)
- [Fotografías y recursos](docs/RECURSOS.md)
- [Auditoría de dependencias](docs/SEGURIDAD.md)

`app/page.tsx` es la entrada activa. `archive/` y `ver 1/` son referencias históricas excluidas del build. El logo oficial permanece intacto y el moodboard no se publica.

Producción requiere aprobación explícita. AssistInk está apagado para el número de Carlos: su flujo y prueba de extremo a extremo siguen pendientes.
