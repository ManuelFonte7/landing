import Reveal from "./Reveal";
import { cta, brand } from "@/content";

export default function Cta() {
  return (
    <section className="px-6 py-32 md:px-12">
      <Reveal className="mx-auto max-w-5xl rounded-[2rem] bg-[var(--accent)] px-8 py-20 text-center text-white md:px-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg opacity-90">{cta.text}</p>
        <a
          href={brand.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-medium text-[var(--accent)] transition hover:scale-105"
        >
          {cta.button}
        </a>
      </Reveal>
    </section>
  );
}
