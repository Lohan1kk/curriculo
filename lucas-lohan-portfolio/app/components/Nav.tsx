"use client";
import { useEffect, useState } from "react";
import { NAV, WHATSAPP } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header>
      <div className="wrap nav">
        <a href="#inicio" className="logo" aria-label="Lucas Lohan, ir ao início">
          Lucas Lohan <span>/ LL</span>
        </a>
        <button
          className="burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="links"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`links${open ? " open" : ""}`} id="links" aria-label="Principal">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`l${active === n.id ? " on" : ""}`}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <a className="btn primary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Vamos conversar
          </a>
        </nav>
      </div>
    </header>
  );
}
