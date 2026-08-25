import { experience } from "@/data/experience";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-primary/5">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary">
            Where I&apos;ve spent my time
          </h2>
        </FadeIn>

        <ol className="mt-12 space-y-10 border-l border-border pl-8">
          {experience.map((entry, i) => (
            <FadeIn
              as="li"
              key={`${entry.role}-${entry.org}`}
              delay={i * 0.05}
              className="relative"
            >
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />
              <p className="text-xs font-medium uppercase tracking-wide text-muted">
                {entry.period}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-primary">
                {entry.role}
              </h3>
              <p className="text-sm font-medium text-accent">{entry.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
