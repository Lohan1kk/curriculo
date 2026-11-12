"use client";
import { useEffect, useState } from "react";

export default function Effects() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const y = document.getElementById("y");
    if (y) y.textContent = String(new Date().getFullYear());

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));

    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      id="top"
      className={show ? "show" : ""}
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
