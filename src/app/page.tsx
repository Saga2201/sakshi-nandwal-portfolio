import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { Strengths } from "@/components/Strengths";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  url: site.links.linkedin,
  sameAs: [
    site.links.linkedin,
    site.links.instagram,
    site.links.youtube,
  ],
  description: site.headline,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="absolute left-4 top-4 z-[100] -translate-y-16 rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white opacity-0 transition focus:translate-y-0 focus:opacity-100 focus-ring"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
