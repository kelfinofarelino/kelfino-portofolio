import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ["700"], variable: '--font-syne' });

export const metadata: Metadata = {
  // PENTING: Tambahkan ini agar gambar OG (Preview Link) terbaca di sosmed
  metadataBase: new URL('https://kelfino.my.id'),

  title: {
    default: "Farelino Kelfin | Portfolio",
    template: "%s | Farelino Kelfin"
  },
  description: "Portofolio resmi Muhammad Farelino Kelfin (Kelfino). Mahasiswa Teknik Informatika UPN 'Veteran' Yogyakarta, Web Developer, dan Content Creator dari Indonesia.",
  keywords: ["Muhammad Farelino Kelfin", "Farelino Kelfin", "Kelfino", "Farelino", "Web Developer Jogja", "UPN Veteran Yogyakarta", "Content Creator", "Next.js Developer"],
  authors: [{ name: "Farelino Kelfin", url: "https://kelfino.my.id" }],
  creator: "Farelino Kelfin",
  openGraph: {
    title: "Farelino Kelfin | Portfolio",
    description: "Official Portfolio of Farelino Kelfin. Exploring Code & Creativity.",
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
  },
  verification: {
    google: "QNRD12HvAn5I9ktIjolB89WybBWKxDCOY1wWT3tiNc8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} ${syne.variable}`}>{children}</body>
    </html>
  );
}