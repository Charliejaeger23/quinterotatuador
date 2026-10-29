import ProjectLink from "../ProjectLink";
export default function FinalCTASection() {
  return (
    <section id="solicitar" className="final-cta section">
      <p className="eyebrow">05 / Tu próximo proyecto</p>
      <h2>
        Todo comienza
        <br />
        con tu historia.
      </h2>
      <p>
        Cuéntame qué tienes en mente.
        <br />
        Conversemos por WhatsApp sobre tu próxima pieza.
      </p>
      <ProjectLink />
      <p className="contact-number">+58 412 958 3666</p>
      <div className="project-guide">
        <span>Tu idea</span>
        <span>Zona corporal</span>
        <span>Tamaño aproximado</span>
        <span>Referencias</span>
      </div>
    </section>
  );
}
