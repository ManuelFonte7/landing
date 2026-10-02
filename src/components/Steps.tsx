"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { steps } from "@/content";

// Sezione "sticky": resta ferma a schermo mentre scorri e cambia passo.
// ScrollTrigger "blocca" (pin) la sezione per la durata di N schermate
// e ci dice a che punto siamo (progress da 0 a 1).
export default function Steps() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const total = steps.items.length;

  useEffect(() => {
    const el = section.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: () => `+=${window.innerHeight * total}`, // 1 schermata per passo
        pin: true,
        onUpdate: (self) => {
          // progress 0..1 -> indice del passo attivo 0..total-1
          const i = Math.min(total - 1, Math.floor(self.progress * total));
          setActive(i);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [total]);

  return (
    <section
      ref={section}
      className="flex min-h-screen items-center bg-[var(--surface)] px-6 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2">
        {/* Colonna sinistra: titolo e indicatori */}
        <div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {steps.title}
          </h2>
          <p className="mt-4 max-w-md opacity-60">{steps.intro}</p>

          <ol className="mt-10 flex gap-3">
            {steps.items.map((s, i) => (
              <li
                key={s.title}
                className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm transition-colors duration-300 ${
                  i === active
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--line)] opacity-50"
                }`}
              >
                {i + 1}
              </li>
            ))}
          </ol>
        </div>

        {/* Colonna destra: i passi sono sovrapposti, si vede solo quello attivo */}
        <div className="relative min-h-[240px]">
          {steps.items.map((s, i) => (
            <div
              key={s.title}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-all duration-500 ${
                i === active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-6 opacity-0"
              }`}
            >
              <span className="font-serif text-7xl italic text-[var(--accent)]">
                {i + 1}.
              </span>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-lg opacity-70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
