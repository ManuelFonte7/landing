"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { hero, brand } from "@/content";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const wordsRef = useRef<HTMLSpanElement>(null);

  // Per un loop senza "salti" ripetiamo la prima parola alla fine
  const words = [...hero.rotatingWords, hero.rotatingWords[0]];

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1) Entrata: titolo, sottotitolo e bottone salgono uno dopo l'altro
      if (!prefersReducedMotion()) {
        gsap.from("[data-hero-in]", {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // 2) Parola che ruota: scorriamo la colonna di parole verso l'alto
      if (wordsRef.current && !prefersReducedMotion()) {
        const steps = words.length - 1;
        const tl = gsap.timeline({ repeat: -1 });
        for (let i = 1; i <= steps; i++) {
          tl.to(wordsRef.current, {
            yPercent: -(100 / words.length) * i,
            duration: 0.7,
            ease: "power3.inOut",
            delay: 1.6, // pausa prima di ogni cambio
          });
        }
        tl.set(wordsRef.current, { yPercent: 0 }); // torna all'inizio senza si veda
      }
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <h1
        data-hero-in
        className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-7xl"
      >
        {hero.titleStart}{" "}
        {/* Finestra alta 1 riga che mostra una parola alla volta */}
        <span className="inline-block h-[1.15em] overflow-hidden align-bottom">
          <span ref={wordsRef} className="block">
            {words.map((w, i) => (
              <span
                key={i}
                className="font-serif block h-[1.15em] italic text-[var(--accent)]"
              >
                {w}
              </span>
            ))}
          </span>
        </span>
      </h1>

      <p
        data-hero-in
        className="mt-6 max-w-xl text-lg opacity-70 md:text-xl"
      >
        {hero.subtitle}
      </p>

      <a
        data-hero-in
        href={brand.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 rounded-full bg-[var(--accent)] px-8 py-4 text-base font-medium text-white transition hover:scale-105"
      >
        {hero.cta}
      </a>
    </section>
  );
}
