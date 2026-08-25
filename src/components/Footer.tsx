import { Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const socials = [
  { icon: Mail, href: "mailto:yas514shah@gmail.com", label: "Email" },
  {
    icon: IconBrandLinkedin,
    href: "https://linkedin.com/in/YashviShah",
    label: "LinkedIn",
  },
  { icon: IconBrandGithub, href: "https://github.com/YashviShah514", label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-dark text-surface-light">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-surface-light/70">
          © {year} Yashvi. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-light/20 text-surface-light transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
