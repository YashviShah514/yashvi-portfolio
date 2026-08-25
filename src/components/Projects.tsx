import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { projects, type ProjectStatus } from "@/data/projects";
import { FadeIn } from "./FadeIn";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-success/15 text-success border border-success/30",
  "In Progress": "bg-alert/15 text-alert border border-alert/30",
  "Competition Entry": "bg-primary/15 text-primary border border-primary/30",
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-primary">
            Things I&apos;ve been building
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn
              key={project.title}
              delay={i * 0.08}
              className="flex flex-col rounded-lg border border-border p-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-primary">
                  {project.title}
                </h3>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    statusStyles[project.status]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-1 text-sm font-medium text-accent">
                {project.tagline}
              </p>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    <IconBrandGithub size={16} />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
