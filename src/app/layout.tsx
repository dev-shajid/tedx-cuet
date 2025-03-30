import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

// Font definitions remain the same
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// JSON-LD structured data remains the same
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  // ...existing JSON-LD content...
};

export const metadata: Metadata = {
  title: "TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading",
  description: "Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world. Connect with like-minded individuals and be part of the global TEDx community.",
  keywords: ["TEDx", "TEDxCUET", "ideas worth spreading", "CUET", "conference", "speakers", "innovation", "inspiration", "technology", "design", "education", "Chittagong", "Bangladesh", "thought leadership"],
  authors: [{ name: "TEDxCUET Organizing Team" }],
  creator: "TEDxCUET",
  publisher: "TEDxCUET",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://tedx-cuet.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading",
    description: "Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world.",
    url: "https://tedx-cuet.vercel.app",
    siteName: "TEDxCUET",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tedx-cuet.vercel.app/tedx.jpeg",
        width: 1200,
        height: 630,
        alt: "TEDxCUET 2025: Innovation Through Diversity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading",
    description: "Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world.",
    creator: "@tedxcuet",
    images: ["https://tedx-cuet.vercel.app/tedx.jpeg"],
  },
  // ...rest of metadata remains the same
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Canonical link */}
        <link rel="canonical" href="https://tedx-cuet.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Explicit Open Graph tags for platforms that don't support Next.js metadata */}
        <meta property="og:title" content="TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading" />
        <meta property="og:description" content="Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world." />
        <meta property="og:image" content="https://tedx-cuet.vercel.app/tedx.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://tedx-cuet.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TEDxCUET" />
        
        {/* Explicit Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TEDxCUET 2025: Innovation Through Diversity | Ideas Worth Spreading" />
        <meta name="twitter:description" content="Join us at TEDxCUET 2025 to experience inspiring talks from visionaries, innovators, and thought leaders that will transform how you see the world." />
        <meta name="twitter:image" content="https://tedx-cuet.vercel.app/tedx.jpeg" />
        <meta name="twitter:creator" content="@tedxcuet" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Use next/script for better performance */}
        <Script
          id="event-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}