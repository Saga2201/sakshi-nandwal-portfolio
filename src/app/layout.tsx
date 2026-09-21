import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} | Recruitment & HR`;
const description =
  "Sakshi Nandwal — Recruitment & HR professional. Technical recruiting for Big 4 clients, Aviation & Grooming Trainer, former Institutional Outreach Manager at mhitr. Based in Indore, India. Open to talent acquisition and people roles.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Sakshi Nandwal",
    "Recruitment",
    "HR",
    "Talent Acquisition",
    "Technical Recruiter",
    "Indore",
    "Aviation Trainer",
    "People Operations",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title,
    description:
      "People excellence meets structured hiring. Technical recruiting, aviation training, and institutional outreach — Indore, India.",
    type: "website",
    locale: "en_IN",
    siteName: title,
  },
  twitter: {
    card: "summary",
    title,
    description:
      "Recruitment & HR professional — technical recruiting, training, and outreach. Indore, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
