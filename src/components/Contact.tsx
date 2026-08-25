"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, Phone } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { FadeIn } from "./FadeIn";

const contactLinks = [
  { icon: Mail, label: "yas514shah@gmail.com", href: "mailto:yas514shah@gmail.com" },
  {
    icon: IconBrandLinkedin,
    label: "linkedin.com/in/YashviShah",
    href: "https://linkedin.com/in/YashviShah",
  },
  {
    icon: IconBrandGithub,
    label: "github.com/YashviShah514",
    href: "https://github.com/YashviShah514",
  },
  { icon: Phone, label: "+91 70435 92219", href: "tel:+917043592219" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary">
            Let&apos;s build something together
          </h2>
          <p className="mt-3 max-w-xl text-base text-foreground">
            Have a project in mind, or just want to talk about AI products? My
            inbox is open.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <ul className="space-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary">
                      <Icon size={16} />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            {submitted ? (
              <div className="flex flex-col items-start gap-3 rounded-lg border border-success/30 bg-success/10 p-6">
                <CheckCircle2 className="text-success" size={28} />
                <p className="text-sm font-medium text-foreground">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-md border border-border bg-transparent px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent"
                >
                  Send message
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
