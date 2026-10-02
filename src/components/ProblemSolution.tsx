import Reveal from "./Reveal";
import { problem, results } from "@/content";

// Sezione "problema -> soluzione -> risultati". Server Component:
// le animazioni sono delegate al componente <Reveal>.
export default function ProblemSolution() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 md:px-12">
      <Reveal>
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {problem.headline}
        </h2>
        <p className="mt-6 text-xl opacity-60">{problem.subheadline}</p>
      </Reveal>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-[var(--line)] p-8">
          <h3 className="text-sm font-medium uppercase tracking-widest opacity-50">
            {problem.problemTitle}
          </h3>
          <ul className="mt-6 space-y-3 text-lg">
            {problem.problems.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden className="opacity-40">•</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.15}
          className="rounded-3xl bg-[var(--fg)] p-8 text-[var(--bg)]"
        >
          <h3 className="text-sm font-medium uppercase tracking-widest opacity-60">
            {problem.solutionTitle}
          </h3>
          <p className="mt-6 text-lg leading-relaxed">{problem.solution}</p>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="text-sm font-medium uppercase tracking-widest opacity-50">
          {problem.integrationsTitle}
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {problem.integrations.map((i) => (
            <span
              key={i}
              className="rounded-full border border-[var(--line)] px-5 py-2 text-sm"
            >
              {i}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-24 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {results.map((r, idx) => (
          <Reveal key={r.title} delay={(idx % 2) * 0.12}>
            <h4 className="text-2xl font-semibold tracking-tight">{r.title}</h4>
            <p className="mt-2 opacity-60">{r.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
