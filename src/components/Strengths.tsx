import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function Strengths() {
  return (
    <section
      id="strengths"
      className="section-pad py-16 sm:py-20 bg-indigo-soft/40"
      aria-labelledby="strengths-heading"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Why hire Sakshi"
          title="Aviation + training + recruiting → HR value"
          description="A rare blend: enterprise recruiting discipline, trainer-level coaching, and aviation-grade composure — mapped to what people teams need."
          id="strengths-heading"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {site.strengths.map((item, index) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-card-border bg-card p-7 shadow-sm sm:p-8"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-4 font-display text-7xl font-semibold text-teal/10"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
