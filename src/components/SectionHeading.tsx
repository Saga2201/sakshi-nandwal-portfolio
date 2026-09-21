type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
