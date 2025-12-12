import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; 

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ["700"], variable: '--font-syne' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kelfino.my.id'),
  title: {
    default: "Farelino Kelfin | Portfolio",
    template: "%s | Farelino Kelfin"
  },
  description: "Portofolio resmi Muhammad Farelino Kelfin (Kelfino). Mahasiswa Teknik Informatika UPN 'Veteran' Yogyakarta, Full Stack Developer.",
  keywords: ["Farelino Kelfin", "Kelfino", "Web Developer Jogja", "Next.js Portfolio"],
  authors: [{ name: "Farelino Kelfin", url: "https://kelfino.my.id" }],
  creator: "Farelino Kelfin",
  openGraph: {
    title: "Farelino Kelfin | Portfolio",
    description: "Official Portfolio of Farelino Kelfin.",
    url: "https://kelfino.my.id",
    siteName: "Kelfino Portfolio",
    images: [
      {
        url: "/assets/image/g2.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/icon.png", 
    apple: "/icon.png",
  },
  verification: {
    google: "QNRD12HvAn5I9ktIjolB89WybBWKxDCOY1wWT3tiNc8",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Farelino Kelfin",
  "url": "https://kelfino.my.id",
  "image": "https://kelfino.my.id/assets/image/g2.png",
  "sameAs": [
    "https://www.linkedin.com/in/farelino-kelfin-117637ab/",
    "https://github.com/kelfinofarelino",
    "https://instagram.com/farelino.kelfino/"
  ],
  "jobTitle": "Full Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} ${syne.variable}`}>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  );
}