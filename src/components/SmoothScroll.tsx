"use client";
// "use client" = questo componente gira nel browser (serve per usare
// useEffect, window, GSAP...). Senza, Next.js lo eseguirebbe solo sul server.

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// Attiva lo scroll "morbido" e lo sincronizza con ScrollTrigger.
// Non mostra nulla a schermo: basta inserirlo una volta nella pagina.
export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.1 });

    // Ogni volta che Lenis scorre, avvisiamo ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Usiamo il "ticker" di GSAP per far avanzare Lenis a ogni frame
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Pulizia quando il componente viene rimosso
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
