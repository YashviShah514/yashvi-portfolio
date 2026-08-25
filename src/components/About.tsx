import { FadeIn } from "./FadeIn";

const stats = [
  { label: "Projects shipped", value: "6+" },
  { label: "Focus", value: "Full-stack" },
  { label: "Based in", value: "India" },
  { label: "Specialty", value: "AI Products" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary">
            A bit about how I work
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
            <p>
              I got into building software because I liked the feedback loop —
              write something, watch it work, and immediately see who it helps.
              That instinct has stuck with me through every project since,
              whether it&apos;s a tool for an overloaded court clerk or an app that
              helps someone pick an outfit.
            </p>
            <p>
              Most of what I build sits at the intersection of AI and everyday
              problems that don&apos;t usually get much engineering attention.
              I&apos;m drawn to spaces where a working prototype can change how
              someone actually spends their day, not just look good in a demo.
            </p>
            <p>
              My approach is to get to a working version as fast as possible,
              put it in front of real users, and let their feedback — not my
              assumptions — decide what gets built next. I&apos;d rather ship
              something rough that solves the real problem than something
              polished that solves the wrong one.
            </p>
            <p>
              Outside of building products, I spend time exploring how AI
              systems are changing the shape of software itself, and thinking
              about what that means for the next generation of tools.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wide text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
