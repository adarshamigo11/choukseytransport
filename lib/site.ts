/**
 * SINGLE SOURCE OF TRUTH for business details.
 * Replace every value marked TODO before going live — they feed the header,
 * sticky call bar, footer, WhatsApp link and the JSON-LD schema.
 *
 * Optional trust numbers (rating, completedMoves, foundedYear) are null by
 * default so nothing unverified is shown or sent to Google. Fill them in only
 * with real figures.
 */
type Site = {
  name: string;
  nameHindi: string;
  shortName: string;
  url: string;
  phoneIntl: string;
  phoneDisplay: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  geo: { lat: number; lng: number };
  priceRange: string;
  googleMapsUrl: string | null;
  foundedYear: string | null;
  completedMoves: string | null;
  rating: { value: string; count: string } | null;
  serviceAreas: string[];
};

export const site: Site = {
  name: "Chouksey Transport Packers & Movers",
  nameHindi: "चौकसे पैकर्स एंड मूवर्स",
  shortName: "Chouksey Packers & Movers",
  // TODO: production domain (or set NEXT_PUBLIC_SITE_URL in Vercel)
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chouksey-packers.vercel.app",
  // Phone number: 9516750418
  phoneIntl: "919516750418",
  phoneDisplay: "+91 95167 50418",
  // Address (update with your actual office address)
  address: {
    street: "Main Road, Near Bus Stand",
    locality: "Sagar",
    region: "Madhya Pradesh",
    postalCode: "470001",
    country: "IN",
  },
  // TODO: exact office coordinates (Sagar city centre as default)
  geo: { lat: 23.8388, lng: 78.7378 },
  priceRange: "₹₹",
  // TODO: Google Maps / Business Profile link (shown on reviews section)
  googleMapsUrl: null,
  foundedYear: null, // e.g. "2012"
  completedMoves: null, // e.g. "3,000+"
  rating: null, // e.g. { value: "4.8", count: "95" } — must match real Google reviews
  serviceAreas: [
    "Sagar City",
    "Sagar",
    "Makronia",
    "Rajakhedi",
    "Bina",
    "Khurai",
    "Damoh",
    "Rehli",
    "Banda",
    "Bhopal",
    "Vidisha",
  ],
};

export const telHref = `tel:+${site.phoneIntl}`;

export const waHref = (
  text = "Hello, I need a quote for packers & movers / truck rental in Sagar."
) => `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(text)}`;
