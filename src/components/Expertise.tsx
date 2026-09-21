import { site } from "@/content/site";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative section-pad py-16 sm:py-20 bg-teal-dark text-white"
      aria-labelledby="expertise-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 60%, rgba(196,120,74,0.18), transparent 35%)",
        }}
      />

      <div className="container-narrow relative">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-soft/90">
            Core expertise
          </p>
          <h2
            id="expertise-heading"
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            What she brings to recruitment &amp; HR
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            The capabilities hiring managers care about — technical recruiting
            foundation, coaching depth, stakeholder fluency, and service-led
            communication.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.expertise.map((item, index) => {
            const highlighted = "highlight" in item && Boolean(item.highlight);
            return (
              <li
                key={item.title}
                className={`group flex flex-col rounded-2xl border p-6 transition duration-300 ${
                  highlighted
                    ? "border-warm/50 bg-white/10 shadow-lg shadow-black/10"
                    : "border-white/15 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                      highlighted
                        ? "bg-warm text-white"
                        : "bg-white/15 text-white"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {highlighted ? (
                    <span className="rounded-full bg-warm/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#faf0e8]">
                      Signature strength
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
