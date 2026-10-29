"use client";
import { useEffect, useState } from "react";
import ProjectLink from "../ProjectLink";

// Fits inside the existing header, so no floating overlay covers the page.
export default function MobileProjectCTA({ menuOpen }: { menuOpen: boolean }) {
  const [pastHero, setPastHero] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPastHero(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 74,
        );
      },
      { rootMargin: "-74px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    const modals = new MutationObserver(() =>
      setModalOpen(!!document.querySelector("dialog[open]")),
    );
    modals.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["open"],
    });
    return () => {
      observer.disconnect();
      modals.disconnect();
    };
  }, []);
  if (!pastHero || menuOpen || modalOpen) return null;
  return <ProjectLink className="mobile-project-link">WhatsApp</ProjectLink>;
}
