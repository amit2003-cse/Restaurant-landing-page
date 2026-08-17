import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_NAME, WHATSAPP_NUMBER, DISCOUNT_PERCENT } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: `${SITE_NAME} — Authentic Indian Food | Fast Service & ${DISCOUNT_PERCENT}% Discount`,
  description: `Order delicious food from ${SITE_NAME}. Enjoy authentic Indian dishes like Paneer Butter Masala, Dal Makhani & more. Fast service, fresh ingredients. Order on WhatsApp & get ${DISCOUNT_PERCENT}% discount!`,
  keywords: [
    SITE_NAME,
    "Indian restaurant",
    "authentic Indian food",
    "order food online",
    "Paneer Butter Masala",
    "Dal Makhani",
    "Veg Biryani",
    "fast food delivery",
    "restaurant near me",
    "WhatsApp food order",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} — Authentic Indian Food | Fast Service`,
    description:
      `Experience delicious food crafted with authentic recipes. Order on WhatsApp & get ${DISCOUNT_PERCENT}% discount!`,
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Authentic Indian Food`,
    description:
      `Authentic Indian dishes, fast service, fresh ingredients. Order on WhatsApp & get ${DISCOUNT_PERCENT}% discount!`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_NAME,
    description: `${SITE_NAME} is dedicated to serving freshly prepared dishes with authentic taste and quality ingredients.`,
    servesCuisine: "Indian",
    telephone: `+${WHATSAPP_NUMBER}`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:00",
    },
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "4",
      bestRating: "5",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
