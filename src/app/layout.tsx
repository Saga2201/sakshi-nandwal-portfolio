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

export const metadata: Metadata = {
  title: `${site.name} | Recruitment & HR`,
  description:
    "Portfolio of Sakshi Nandwal — Technical Recruiter background, Aviation & Grooming Trainer, Institutional Outreach Manager. Based in Indore. Open to recruitment and HR roles.",
  openGraph: {
    title: `${site.name} | Recruitment & HR`,
    description:
      "People excellence meets structured hiring. Technical recruiting, training, and outreach — Indore, India.",
    type: "website",
    locale: "en_IN",
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
