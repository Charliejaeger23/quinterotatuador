"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { photoPath, portfolioData } from "@/app/data/portfolio";
export default function PortfolioSection() {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const active = portfolioData[index];
  const change = (step: number) =>
    setIndex((i) => (i + step + portfolioData.length) % portfolioData.length);
  function close() {
    dialog.current?.close();
  }
  return (
    <section id="obras" className="section portfolio">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Portafolio</p>
          <h2>
            Obras seleccionadas<span className="red-period">.</span>
          </h2>
        </div>
        <p>
          Seis piezas. Distintas historias.
          <br />
          Una mirada al trabajo sobre la piel.
        </p>
      </div>
      <div className="portfolio-grid">
        {portfolioData.map((item, i) => (
          <figure key={item.id}>
            <button
              className="work-image"
              aria-label={"Ampliar " + item.title}
              aria-haspopup="dialog"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setIndex(i);
                dialog.current?.showModal();
                document.body.style.overflow = "hidden";
              }}
            >
              <Image
                src={photoPath(item.id)}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw"
              />
              <span className="zoom-hint" aria-hidden="true">
                Ver obra ↗
              </span>
            </button>
            <figcaption>
              <div>
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
              <span className="work-number">0{i + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Vista ampliada de la obra"
        onClose={() => {
          document.body.style.overflow = "";
          opener.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            change(1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            change(-1);
          }
          if (e.key === "Tab") {
            const buttons = e.currentTarget.querySelectorAll("button");
            const first = buttons[0],
              last = buttons[buttons.length - 1];
            if (e.shiftKey && document.activeElement === first) {
              e.preventDefault();
              last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }}
      >
        <div className="lightbox-top">
          <span aria-live="polite">
            {index + 1} / {portfolioData.length} · {active.title}
          </span>
          <button onClick={close} autoFocus aria-label="Cerrar imagen ampliada">
            Cerrar ×
          </button>
        </div>
        <div className="lightbox-image">
          <Image
            src={photoPath(active.id)}
            alt={active.alt}
            width={active.width}
            height={active.height}
          />
        </div>
        <div className="lightbox-bottom">
          <button onClick={() => change(-1)} aria-label="Obra anterior">
            ← Anterior
          </button>
          <span>{active.category}</span>
          <button onClick={() => change(1)} aria-label="Obra siguiente">
            Siguiente →
          </button>
        </div>
      </dialog>
    </section>
  );
}
