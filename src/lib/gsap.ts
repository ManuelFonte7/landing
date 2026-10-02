// Registra GSAP e il plugin ScrollTrigger una sola volta.
// Importa sempre gsap da qui: `import { gsap, ScrollTrigger } from "@/lib/gsap"`
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP usa `window`, quindi registriamo il plugin solo nel browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

// True se l'utente ha chiesto di ridurre le animazioni (accessibilità)
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
