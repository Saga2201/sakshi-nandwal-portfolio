import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="section-pad py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="container-narrow">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">
          <SectionHeading
            eyebrow="About"
            title="A path built around people"
            id="about-heading"
          />
          <div className="space-y-5 rounded-3xl border border-card-border bg-card p-7 shadow-sm sm:p-9">
            {site.about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-base leading-relaxed text-muted sm:text-[1.05rem]"
              >
                {p}
              </p>
            ))}
            <p className="border-t border-card-border pt-5 text-sm font-medium leading-relaxed text-indigo">
              {site.positioning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
