import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { Nav } from "@/components/Nav/Nav";
import { TopHashCleaner } from "@/components/TopHashCleaner/TopHashCleaner";
import { siteInfo } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Unix Peak Travel is a Thailand-based tour company for tailor-made trips, private tours, group tours, corporate travel, MICE, and B2B travel programs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://unixpeaktravel.com"),
  title: {
    default: "Unix Peak Travel | Thailand Tours & Tailor-Made Trips",
    template: "%s | Unix Peak Travel",
  },
  description: siteDescription,
  keywords: [
    "Unix Peak Travel",
    "Thailand travel company",
    "Thailand private tours",
    "tailor-made travel",
    "corporate travel",
    "MICE Thailand",
  ],
  applicationName: siteInfo.companyName,
  creator: siteInfo.companyName,
  publisher: siteInfo.companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unix Peak Travel | Thailand Tours & Tailor-Made Trips",
    description: siteDescription,
    url: "/",
    siteName: siteInfo.companyName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unix Peak Travel | Thailand Tours & Tailor-Made Trips",
    description: siteDescription,
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body id="top">
        <TopHashCleaner />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
