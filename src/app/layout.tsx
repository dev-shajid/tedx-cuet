import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEDxCUET 2025 | Ideas Worth Spreading",
  description: "Join us for TEDxCUET 2025, an inspiring event featuring thought-provoking talks, innovative ideas, and networking opportunities with thought leaders and changemakers.",
  keywords: ["TEDx", "TEDxCUET", "ideas worth spreading", "CUET", "conference", "speakers", "innovation", "inspiration", "technology", "design", "education"],
  authors: [{ name: "TEDxCUET Organizing Team" }],
  creator: "TEDxCUET",
  publisher: "TEDxCUET",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://tedx-cuet.vercel.app"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TEDxCUET 2025 | Ideas Worth Spreading",
    description: "Join us for TEDxCUET 2025, an inspiring event featuring thought-provoking talks, innovative ideas, and networking opportunities.",
    url: "https://tedx-cuet.vercel.app", // Update with your actual domain
    siteName: "TEDxCUET",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tedx-cuet.vercel.app/tedx.jpeg", // Update with your actual image path
        width: 1200,
        height: 630,
        alt: "TEDxCUET 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxCUET 2025 | Ideas Worth Spreading",
    description: "Join us for TEDxCUET 2025, an inspiring event featuring thought-provoking talks, innovative ideas, and networking opportunities.",
    creator: "@tedxcuet", // Update with your actual Twitter handle
    images: ["https://tedx-cuet.vercel.app/tedx.jpeg"], // Update with your actual image path
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Event",
  verification: {
    // Add your verification strings here 
    google: "google-site-verification-code", // Update with your verification code
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tedx-cuet.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}