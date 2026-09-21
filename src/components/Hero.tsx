import { site } from "@/content/site";

export function Hero() {
  const snapshot = site.experience.slice(0, 3).map((job) => ({
    role: job.role,
    company: job.company,
  }));

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-teal-soft/80 blur-3xl" />
        <div className="absolute bottom-0 left-[-8%] h-80 w-80 rounded-full bg-indigo-soft/70 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-warm-soft/60 blur-2xl" />
      </div>

      <div className="container-narrow section-pad">
        <div className="max-w-3xl">
          <p className="fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-teal"
              aria-hidden="true"
            />
            Open to Recruitment &amp; HR roles
          </p>

          <h1
            id="hero-heading"
            className="fade-up delay-1 font-display text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {site.name}
          </h1>

          <p className="fade-up delay-2 mt-4 text-lg font-medium text-indigo sm:text-xl">
            {site.tagline}
            <span className="mx-2 text-card-border" aria-hidden="true">
              ·
            </span>
            <span className="text-muted">{site.location}</span>
          </p>

          <p className="fade-up delay-3 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {site.headline}
          </p>

          <div className="fade-up delay-4 mt-9 flex flex-wrap gap-3">
            <a
              href="#expertise"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark focus-ring"
            >
              View expertise
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-teal/40 hover:bg-teal-soft focus-ring"
            >
              Contact
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal-soft focus-ring"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <ul
          className="fade-up delay-4 mt-12 grid gap-3 sm:grid-cols-3"
          aria-label="Recent roles"
        >
          {snapshot.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-card-border/90 bg-card/70 px-4 py-3.5 shadow-sm backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-foreground">{item.role}</p>
              <p className="mt-0.5 text-xs font-medium text-muted">
                {item.company}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
