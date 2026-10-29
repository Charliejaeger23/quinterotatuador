# WhatsApp y AssistInk — comprobaciones y bloqueo

## Verificado

- El propietario confirmó `+584129583666` en esta conversación.
- Consulta GET autenticada, solo lectura, a Meta para el REAL_PID `104471499173909`: display_phone_number `+58 412-9583666`, verified_name `Quinterotatuador`, quality_rating `GREEN`.
- Datos locales de artistas coinciden con Carlos Quintero y terminación 3666.
- Modo de acceso: `abierto`.
- Interruptor específico: `bot_activo:104471499173909 = 0`. Aunque el interruptor global vale 1, prevalece el específico: **bot apagado para este número**.
- El WA_PHONE_NUMBER_ID por defecto del .env es otro número, `1213734838494828`; su GET devolvió 401. No se confundió con el REAL_PID ni se modificaron tokens.
- Código real: `/home/qram/tattoo-bot`. Servicio systemd del usuario qram: `tattoo-bot.service`, Uvicorn en `172.20.0.1:8011`.
- Proxy de `bot.assistink.net` hacia ese puerto; endpoint `POST /webhooks/whatsapp`.
- Secretos permanecen en el servidor. Solo se imprimieron campos permitidos, nunca credenciales.

## Qué hace el código inspeccionado

`whatsapp.py` valida la firma, deduplica mensajes, determina el phone_number_id y comprueba el interruptor y las reglas de acceso antes de responder. Acepta texto, imágenes y audio. Las imágenes pasan a `bot.recibir_imagen`; la ejecución de visión y la entrega de fotos no se probaron en vivo.

Hay handoff con `pasar_al_tatuador`. Las respuestas del artista en coexistencia pausan el bot y existen comandos para reanudar. El saludo depende del contexto; no hay una bienvenida fija verificada.

`bot.py` asume pieza nueva si no se indica cover, pide zona/tamaño/estilo y puede cotizar al tener esos datos. Un cover se deriva inmediatamente y se pide una foto. **Este flujo no satisface todavía la secuencia del encargo.**

## Integración web preparada

Los cuatro CTA comparten `projectHref` de `lib/config.ts`. Destino:
`https://wa.me/584129583666`

Texto exacto:
> Hola Carlos, vengo de quinterotatuador.com y quiero solicitar un proyecto personalizado.

El origen es texto ordinario que el receptor puede leer. No se afirma que exista un trigger dedicado o atribución analítica en AssistInk. No se incluye la palabra «cover» en la bienvenida porque el bot actual la detecta como una petición de cover.

La interfaz ofrece una conversación por WhatsApp; no promete un bot activo ni tiempos de respuesta. `assistInkVerified` permanece en false.

## Cambio de bot pendiente para aprobación

Preparar y validar en una copia aislada, antes de activar:
1. Enrutar el mensaje de origen de la web únicamente al artista REAL_PID y respetar pausa/handoff.
2. Preguntar tipo de proyecto.
3. Preguntar zona corporal.
4. Preguntar tamaño estimado sin convertir automáticamente palabras vagas en medidas.
5. Pedir idea y referencias; admitir imágenes.
6. Para cover-up, reunir fotos actuales, antigüedad, colores y detalles. Explicar que la viabilidad se evalúa después de revisar la información. Derivar al artista tras reunir el contexto, sin prometer viabilidad ni cotizar automáticamente.
7. Guardar en la memoria ya existente del bot; no crear un formulario ni base de datos web.
8. Preservar el resto de artistas, acceso, firma, deduplicación y controles humanos.

## Prueba de aceptación todavía pendiente

Con autorización para intervenir el bot y un remitente de prueba autorizado:
- Activar solo el número de Carlos después de revisar el cambio.
- Enviar el texto exacto del CTA desde WhatsApp.
- Verificar recepción, respuesta, orden de preguntas y persistencia.
- Enviar una referencia y probar un cover con foto, antigüedad, colores y detalles.
- Verificar handoff y pausa al responder el artista.
- Confirmar entrega real en WhatsApp, no solo un HTTP 200.

**No se envió ningún mensaje de prueba, no se activó el bot y no se modificó el servicio. La integración de extremo a extremo sigue pendiente.**
