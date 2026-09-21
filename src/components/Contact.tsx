import { site } from "@/content/site";

export function Contact() {
  const hasEmail = Boolean(site.email && site.email.trim());

  return (
    <section
      id="contact"
      className="section-pad py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <div className="overflow-hidden rounded-[2rem] border border-card-border bg-gradient-to-br from-card via-card to-teal-soft/40 p-8 shadow-sm sm:p-12 lg:p-14">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {site.contact.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.contact.body}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-dark focus-ring"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={site.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-warm-soft focus-ring"
            >
              YouTube · {site.links.youtubeLabel}
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-indigo-soft focus-ring"
            >
              Instagram · {site.links.instagramLabel}
            </a>
            {hasEmail ? (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-soft px-6 py-3 text-sm font-semibold text-teal-dark transition hover:bg-teal hover:text-white focus-ring"
              >
                Email
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-dashed border-card-border bg-background/60 px-5 py-3 text-sm font-medium text-muted">
                Email coming soon
              </span>
            )}
          </div>

          {!hasEmail ? (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              {site.contact.ctaNote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
