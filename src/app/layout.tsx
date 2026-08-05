import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UK Premium Co-Living | Luxury Living in Whitefield, Bengaluru",
  description: "Experience ultra-premium luxury co-living at Kundalahalli Gate, Whitefield, Bengaluru. Fully furnished private & sharing rooms, bespoke amenities, and a vibrant community.",
  keywords: [
    "premium co-living bengaluru",
    "luxury pg whitefield",
    "uk premium co-living",
    "co-living whitefield",
    "luxury rooms bengaluru",
    "best pg in whitefield",
    "premium double sharing pg whitefield"
  ],
  authors: [{ name: "UK Premium Co-Living" }],
  openGraph: {
    title: "UK Premium Co-Living | Luxury Living in Whitefield, Bengaluru",
    description: "Experience ultra-premium luxury co-living at Kundalahalli Gate, Whitefield, Bengaluru. Fully furnished private & sharing rooms, bespoke amenities.",
    url: "https://ukpremiumcoliving.com",
    siteName: "UK Premium Co-Living",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UK Premium Co-Living Luxury Living Space"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Premium Co-Living | Luxury Living in Whitefield, Bengaluru",
    description: "Experience ultra-premium luxury co-living at Kundalahalli Gate, Whitefield, Bengaluru.",
    images: ["/images/hero.jpg"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Accommodation",
              "name": "UK Premium Co-Living",
              "image": "https://ukpremiumcoliving.com/images/hero.jpg",
              "description": "Luxury Co-Living for Students & Working Professionals in Whitefield, Bengaluru.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4/2 Ashvir, ITPL Main Road, Opposite Starbucks, Kundalahalli Gate, AECS Layout, Munnekolala, Whitefield",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560037",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9590449",
                "longitude": "77.7151867"
              },
              "priceRange": "₹15000 - ₹35000",
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "High Speed WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Housekeeping", "value": true }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
