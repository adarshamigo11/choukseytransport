import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { buildSchema, buildWebSiteSchema, buildActionSchema } from "@/lib/schema";
import StickyCallBar from "@/components/StickyCallBar";

const title =
  "Packers and Movers in Sagar | Transport & Truck Rental – Chouksey Transport";
const description =
  "Best packers and movers in Sagar, MP — house & office shifting, packing, loading, unloading and truck rental services in Sagar, Makronia, Rajakhedi, Bina, Khurai, Damoh, Rehli, Banda and all India. Call +91 95167 50418 for instant quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.shortName}` },
  description,
  keywords: [
    // Primary keywords
    "packers and movers in sagar",
    "transport in sagar",
    "best packers and movers in sagar",
    "chouksey transport sagar",
    "chouksey packers and movers",
    // Service keywords
    "truck rental services in sagar",
    "house shifting sagar",
    "office shifting sagar",
    "house shifting services sagar",
    "packing and loading sagar",
    "goods transport sagar",
    "relocation services sagar",
    "local transport sagar",
    "long distance movers sagar",
    // Area-specific keywords
    "packers and movers makronia",
    "packers and movers rehli",
    "packers and movers banda",
    "packers and movers bina",
    "packers and movers damoh",
    "packers and movers khurai",
    "packers and movers rajakhedi",
    "transport in makronia",
    "transport in rehli",
    "transport in banda",
    "transport in bina",
    "transport in damoh",
    "transport in khurai",
    // Hindi keywords
    "सागर पैकर्स एंड मूवर्स",
    "चौकसे पैकर्स एंड मूवर्स",
    "सागर में पैकर्स एंड मूवर्स",
    "सागर में ट्रांसपोर्ट",
    "मकरोनिया पैकर्स एंड मूवर्स",
    "रहली पैकर्स एंड मूवर्स",
    "बांदा पैकर्स एंड मूवर्स",
    // Long-tail keywords
    "cheap packers and movers in sagar",
    "affordable transport in sagar",
    "top packers and movers sagar",
    "reliable movers sagar mp",
    "sagar madhya pradesh movers",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2545",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = JSON.stringify([
    buildSchema(),
    buildWebSiteSchema(),
    buildActionSchema(),
  ]);

  return (
    <html lang="en-IN">
      <body className="pb-24 antialiased md:pb-0">
        {children}
        <StickyCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </body>
    </html>
  );
}
