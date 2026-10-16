import { site } from "./site";

/** MovingCompany (a LocalBusiness subtype) JSON-LD with NAP, geo, hours, radius. */
export function buildSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: [site.nameHindi, "Chouksey Transport Sagar", site.shortName],
    description:
      "Packers and movers, house & office shifting, loading-unloading and truck rental services in Sagar, Madhya Pradesh, with pan-India relocation.",
    url: site.url,
    telephone: `+${site.phoneIntl}`,
    priceRange: site.priceRange,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
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
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      ...site.serviceAreas.map((a) => ({
        "@type": "City",
        name: a.replace(" City", ""),
      })),
      { "@type": "Country", name: "India" },
    ],
    // Service radius around the Sagar office (km → metres)
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: 200000,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving & Transport Services",
      itemListElement: [
        "House & Office Shifting",
        "Packing, Loading & Unloading",
        "Dedicated & Shared Truck Rental",
        "Pan-India Long Distance Relocation",
      ].map((n) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: n, areaServed: "Sagar, Madhya Pradesh, India" },
      })),
    },
  };

  if (site.foundedYear) schema.foundingDate = site.foundedYear;
  if (site.googleMapsUrl) schema.hasMap = site.googleMapsUrl;
  if (site.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    };
  }
  return schema;
}
