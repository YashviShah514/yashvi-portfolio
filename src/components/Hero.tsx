import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 bg-surface-dark text-surface-light">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-24 md:flex-row md:py-32">
        <FadeIn className="flex flex-1 flex-col items-start gap-6 text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Hi, I&apos;m Yashvi
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Building AI-powered products for real-world problems
          </h1>
          <p className="max-w-xl text-base text-surface-light/80 sm:text-lg">
            I&apos;m a full-stack developer who likes turning messy, real-world problems
            into products people actually use — from courtroom case triage to AI-powered
            wardrobes. I care about shipping fast without losing sight of the user.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-surface-light/30 px-5 py-3 text-sm font-semibold text-surface-light transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch <Mail size={16} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-1 justify-center md:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[22rem] md:w-[22rem]">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-accent to-primary opacity-40 blur-2xl" />
            <div className="relative h-full w-full rounded-[2.5rem] bg-gradient-to-br from-accent to-primary p-1.5 shadow-2xl">
              <div className="h-full w-full overflow-hidden rounded-[2.25rem] bg-surface-dark">
                <Image
                  src="/headshot.jpg"
                  alt="Portrait of Yashvi"
                  width={352}
                  height={352}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
