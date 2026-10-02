import Reveal from "./Reveal";
import { faq } from "@/content";

// FAQ a fisarmonica senza JavaScript: usa i tag nativi <details>/<summary>.
// Accessibile da tastiera e leggero.
export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 md:px-12">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {faq.title}
        </h2>
      </Reveal>

      <Reveal className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {faq.items.map((item) => (
          <details key={item.q} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
              {item.q}
              <span
                aria-hidden
                className="text-2xl transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-4 max-w-2xl opacity-70">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
