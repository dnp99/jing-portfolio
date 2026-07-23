import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://dnp99.github.io/jing-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jingting Su, RN | Community & Primary Care Nurse",
  description:
    "Registered Nurse in the GTA with experience in community, primary, oncology, infusion, palliative, and geriatric care.",
  openGraph: {
    title: "Jingting Su, RN | Community & Primary Care Nurse",
    description:
      "Coordinated, compassionate care for complex needs at home and in the community.",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${newsreader.variable} ${manrope.variable} ${mono.variable}`}
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
