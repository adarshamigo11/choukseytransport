import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { buildSchema } from "@/lib/schema";
import StickyCallBar from "@/components/StickyCallBar";

const title =
  "Packers and Movers in Sagar | Transport & Truck Rental – Chouksey Transport";
const description =
  "Best packers and movers in Sagar, MP — house & office shifting, packing, loading, unloading and truck rental services in Sagar, Makronia, Rajakhedi, Bina, Khurai, Damoh, Rehli, Bhopal, Vidisha and all India. Call Chouksey Transport for an instant quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.shortName}` },
  description,
  keywords: [
    "packers and movers in sagar",
    "transport in sagar",
    "best packers and movers in sagar",
    "chouksey transport sagar",
    "truck rental services in sagar",
    "house shifting sagar",
    "packers and movers makronia",
    "packers and movers bina",
    "packers and movers damoh",
    "चौकसे पैकर्स एंड मूवर्स",
    "सागर पैकर्स एंड मूवर्स",
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
  return (
    <html lang="en-IN">
      <body className="pb-24 antialiased md:pb-0">
        {children}
        <StickyCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
        />
      </body>
    </html>
  );
}
