import Image from "next/image";
import ProjectLink from "../ProjectLink";
export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="red-dash" /> Carlos Quintero · Venezuela
        </p>
        <h1>
          Tu historia.
          <br />
          Tu piel.
          <br />
          <span>Una sola obra.</span>
        </h1>
        <p className="hero-statement">
          Aquí no repetimos diseños.
          <br />
          Porque nadie repite tu historia.
        </p>
        <p className="hero-description">
          Tatuaje personalizado, desde la primera conversación hasta el último
          detalle.
        </p>
        <div className="hero-actions">
          <ProjectLink />
          <a className="text-link" href="#obras">
            Explorar las obras <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>Valencia / Puerto Cabello</span>
          <span>Desde 2015</span>
        </div>
      </div>
      <figure className="hero-photo">
        <Image
          src="/images/portfolio/leon-rosa-valor.jpg"
          alt="Tatuaje de león y rosa de Carlos Quintero, realizado en negro y gris sobre un brazo."
          width={961}
          height={1280}
          priority
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <figcaption>
          <span>01 / León y rosa</span>
          <span>Realismo en grises</span>
        </figcaption>
      </figure>
    </section>
  );
}
