import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad py-16 sm:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Experience"
          title="Career timeline"
          description="Roles that connect recruiting, aviation service, training, and institutional outreach — without invented metrics."
          id="experience-heading"
        />

        <ol className="relative space-y-0 border-l-2 border-teal/25 ml-3 sm:ml-4">
          {site.experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-teal bg-background"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              </span>

              <article className="rounded-2xl border border-card-border bg-card p-6 shadow-sm transition hover:border-teal/30 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <time className="rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold text-teal-dark">
                    {job.period}
                  </time>
                </div>
                <p className="mt-1.5 text-sm font-semibold text-indigo">
                  {job.company}
                  <span className="mx-2 font-normal text-card-border">·</span>
                  <span className="font-medium text-muted">{job.location}</span>
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-[0.95rem]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
