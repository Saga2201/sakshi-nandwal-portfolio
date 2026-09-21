import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-card-border bg-card">
      <div className="container-narrow section-pad flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold text-foreground">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {site.tagline} · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
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
        </div>
        <p className="text-xs text-muted sm:text-right">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
