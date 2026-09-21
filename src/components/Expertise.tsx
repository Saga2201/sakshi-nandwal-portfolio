import { site } from "@/content/site";

export function Expertise() {
  const highlighted = site.expertise.filter(
    (item) => "highlight" in item && Boolean(item.highlight),
  );
  const rest = site.expertise.filter(
    (item) => !("highlight" in item && Boolean(item.highlight)),
  );

  return (
    <section
      id="expertise"
      className="relative section-pad py-16 sm:py-24 bg-teal-dark text-white"
      aria-labelledby="expertise-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 15%, rgba(255,255,255,0.14), transparent 42%), radial-gradient(circle at 82% 70%, rgba(196,120,74,0.22), transparent 38%)",
        }}
      />

      <div className="container-narrow relative">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#d4ebea]">
            Core expertise
          </p>
          <h2
            id="expertise-heading"
            className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            What she brings to recruitment &amp; HR
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            The capabilities hiring managers care about — technical recruiting
            foundation, coaching depth, stakeholder fluency, and service-led
            communication.
          </p>
        </div>

        {highlighted.length > 0 ? (
          <ul className="mb-4 grid gap-4">
            {highlighted.map((item) => {
              const index = site.expertise.findIndex(
                (e) => e.title === item.title,
              );
              return (
                <li key={item.title}>
                  <article className="relative overflow-hidden rounded-3xl border border-warm/45 bg-gradient-to-br from-white/15 via-white/10 to-warm/10 p-7 shadow-xl shadow-black/15 sm:p-9 lg:flex lg:items-start lg:gap-10">
                    <div className="mb-5 flex flex-wrap items-center gap-3 lg:mb-0 lg:shrink-0 lg:flex-col lg:items-start lg:gap-4">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-warm text-sm font-bold text-white shadow-md shadow-black/20"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full bg-warm/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#faf0e8] ring-1 ring-warm/40">
                        Signature strength
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-2xl font-semibold leading-snug text-white sm:text-[1.65rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        ) : null}

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => {
            const index = site.expertise.findIndex(
              (e) => e.title === item.title,
            );
            return (
              <li key={item.title}>
                <article className="card-lift group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-6 hover:border-white/25 hover:bg-white/10">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
