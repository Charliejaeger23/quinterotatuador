"use client";
import Image from "next/image";
import { useState } from "react";
import ProjectLink from "../ProjectLink";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <a
        href="#inicio"
        className="brand"
        aria-label="Quinterotatuador, inicio"
        onClick={() => setOpen(false)}
      >
        <Image
          src="/images/brand/logo-oficial.png"
          width={54}
          height={54}
          alt=""
          priority
        />
        <span>
          QUINTERO<span className="brand-sub">TATUADOR</span>
        </span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Cerrar −" : "Menú +"}
      </button>
      <nav
        id="main-nav"
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Navegación principal"
        onClick={() => setOpen(false)}
      >
        <a href="#obras">Obras</a>
        <a href="#proceso">El proceso</a>
        <a href="#artista">El artista</a>
        <a href="#preguntas">Preguntas</a>
        <ProjectLink className="nav-cta" />
      </nav>
    </header>
  );
}
