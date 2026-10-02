import Reveal from "./Reveal";
import VideoCard from "./VideoCard";
import { caseStudies } from "@/content";

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 md:px-12">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
          {caseStudies.title}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {caseStudies.items.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.12}>
            <VideoCard src={c.video} poster={c.poster} title={c.title} />
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">
              {c.title}
            </h3>
            <p className="mt-1 opacity-60">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
