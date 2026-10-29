import Image from "next/image";
import { siteConfig } from "@/lib/config";
export default function ArtistSection() {
  return (
    <section id="artista" className="artist section">
      <div className="artist-mark">
        <Image
          src="/images/brand/logo-oficial.png"
          alt="Símbolo oficial de Quinterotatuador"
          width={480}
          height={480}
        />
        <p>
          La vida es corta
          <br />y la piel se agota.
        </p>
      </div>
      <div className="artist-copy">
        <p className="eyebrow">03 / El artista</p>
        <h2>
          Carlos
          <br />
          Quintero<span className="red-period">.</span>
        </h2>
        <p className="artist-intro">
          Una mirada personal.
          <br />
          Un trabajo hecho contigo.
        </p>
        <p>
          Mi camino profesional en el tatuaje comenzó en 2015. Cada proyecto
          parte de una conversación: entender tu idea, encontrar su forma y
          pensar cómo habitará tu piel.
        </p>
        <p>
          Trabajo el tatuaje personalizado con atención al diseño, a la anatomía
          y a los detalles que hacen propia cada pieza.
        </p>
        <a
          className="text-link"
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Conoce más en Instagram <span aria-hidden="true">↗</span>
          <span className="sr-only"> (abre otra pestaña)</span>
        </a>
      </div>
    </section>
  );
}
