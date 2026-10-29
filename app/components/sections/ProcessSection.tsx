const steps = [
  [
    "Escucha",
    "Comenzamos por tu idea, tus referencias y lo que quieres expresar.",
  ],
  [
    "Claridad",
    "Conversamos sobre la zona, el tamaño y las posibilidades de tu proyecto.",
  ],
  [
    "Diseño",
    "La propuesta toma forma a partir de esa conversación y de tu historia.",
  ],
  [
    "Adaptación anatómica",
    "El diseño se piensa en relación con las formas y el movimiento de tu cuerpo.",
  ],
  [
    "Ejecución y cuidado",
    "Trabajamos la pieza y conversamos sobre los cuidados y las dudas posteriores.",
  ],
];
export default function ProcessSection() {
  return (
    <section id="proceso" className="process section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / El proceso</p>
          <h2>
            Una idea merece
            <br />
            su propio camino.
          </h2>
        </div>
        <p>
          La primera conversación también
          <br />
          forma parte del tatuaje.
        </p>
      </div>
      <ol className="steps">
        {steps.map(([title, text], i) => (
          <li key={title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
