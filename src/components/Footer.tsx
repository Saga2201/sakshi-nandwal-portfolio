import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-card-border bg-card">
      <div className="container-narrow section-pad flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.tagline} · {site.location}
          </p>
          <p className="mt-4 text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          aria-label="Social"
        >
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:text-teal-dark focus-ring rounded-sm"
          >
            LinkedIn
          </a>
          <a
            href={site.links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:text-teal-dark focus-ring rounded-sm"
          >
            YouTube
          </a>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal hover:text-teal-dark focus-ring rounded-sm"
          >
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
