const questions = [
  [
    "¿Cómo empiezo mi proyecto?",
    "Escribe por WhatsApp y comparte tu idea, la zona del cuerpo y un tamaño aproximado. Puedes adjuntar referencias para orientar la conversación. Los detalles se confirman en consulta.",
  ],
  [
    "¿Cómo me preparo para la sesión?",
    "Antes de la cita, consulta las indicaciones de preparación específicas para tu proyecto. Comenta cualquier duda sobre tu piel o tu salud; las cuestiones médicas deben revisarse con un profesional sanitario.",
  ],
  [
    "¿Puedo llevar referencias para el diseño?",
    "Sí. Las referencias ayudan a explicar lo que te interesa. El diseño se trabaja de forma personalizada y se adapta a la zona que elijas.",
  ],
  [
    "¿Cuánto cuesta y cuántas sesiones necesito?",
    "Depende del diseño, la zona y el tamaño. El presupuesto, las sesiones, la disponibilidad y las condiciones de reserva se confirman al revisar tu proyecto.",
  ],
  [
    "¿Se puede cubrir un tatuaje que ya tengo?",
    "La viabilidad se evalúa después de revisar el tatuaje. Envía imágenes actuales e indica su antigüedad, colores, tamaño y cualquier detalle relevante.",
  ],
  [
    "¿Qué cuidados necesita y cuánto tarda en cicatrizar?",
    "Los cuidados se explican según el trabajo realizado y tu caso. Confirma las indicaciones en consulta; no hay un plazo único que se pueda prometer para todas las personas.",
  ],
  [
    "¿Cómo consulto una duda después de la sesión?",
    "Puedes escribir por el mismo WhatsApp para aclarar las indicaciones recibidas. Si tienes síntomas que te preocupan, consulta a un profesional sanitario.",
  ],
];
export default function FAQSection() {
  return (
    <section id="preguntas" className="faq section">
      <div>
        <p className="eyebrow">04 / Antes y después</p>
        <h2>
          Hablemos
          <br />
          con claridad.
        </h2>
        <p className="section-note">
          Un buen proyecto empieza
          <br />
          con tus preguntas.
        </p>
      </div>
      <div className="faq-list">
        {questions.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
