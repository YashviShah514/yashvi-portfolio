import { interests } from "@/data/interests";
import { FadeIn } from "./FadeIn";

export function Interests() {
  return (
    <section id="interests" className="scroll-mt-24 bg-primary/5">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Interests
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-primary">
            What I like thinking about
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {interests.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
