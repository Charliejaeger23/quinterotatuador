import Image from "next/image";
import { projectHref, siteConfig } from "@/lib/config";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <a className="brand" href="#inicio" aria-label="Volver al inicio">
          <Image
            src="/images/brand/logo-oficial.png"
            width={54}
            height={54}
            alt=""
          />
          <span>
            QUINTERO<span className="brand-sub">TATUADOR</span>
          </span>
        </a>
        <p>
          Valencia / Puerto Cabello
          <br />
          <span>Carabobo, Venezuela</span>
        </p>
        <div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗<span className="sr-only"> (abre otra pestaña)</span>
          </a>
          <a href={projectHref} target="_blank" rel="noopener noreferrer">
            Solicitar proyecto ↗
            <span className="sr-only"> por WhatsApp (abre otra pestaña)</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Carlos Quintero</span>
        <span>La vida es corta y la piel se agota.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
