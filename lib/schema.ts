import { site, allPhones } from "./site";

/** MovingCompany (a LocalBusiness subtype) JSON-LD with NAP, geo, hours, radius. */
export function buildSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: [
      site.nameHindi,
      "Chouksey Transport Sagar",
      site.shortName,
      "Chouksey Packers and Movers",
      "Transport in Sagar",
    ],
    description:
      "Chouksey Transport Packers & Movers — best packers and movers, transport services, house & office shifting, packing-loading-unloading, dedicated & shared truck rental in Sagar, Makronia, Rehli, Bina, Khurai, Damoh, Banda, Rajakhedi, Bhopal, Vidisha and all India. Call +91 95167 50418 for instant quote.",
    url: site.url,
    telephone: `+${site.phoneIntl}`,
    priceRange: site.priceRange,
    image: `${site.url}/opengraph-image`,
    logo: `${site.url}/icon.svg`,
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
    // ContactPoint for Google call actions and sitelinks
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${site.phoneIntl}`,
        contactType: "customer service",
        availableLanguage: ["Hindi", "English"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: `+${site.phoneIntl}`,
        contactType: "sales",
        availableLanguage: ["Hindi", "English"],
        areaServed: "IN",
      },
      ...allPhones.slice(1).map((phone) => ({
        "@type": "ContactPoint" as const,
        telephone: `+${phone.intl}`,
        contactType: "customer service",
        availableLanguage: ["Hindi", "English"],
        areaServed: "IN",
      })),
    ],
    areaServed: [
      ...site.serviceAreas.map((a) => ({
        "@type": "City",
        name: a.replace(" City", ""),
      })),
      { "@type": "AdministrativeArea", name: "Sagar District" },
      { "@type": "AdministrativeArea", name: "Damoh District" },
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
      name: "Moving & Transport Services in Sagar",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packers and Movers in Sagar",
            description: "Professional house and office shifting services in Sagar with safe packing, loading, transport and unloading.",
            areaServed: "Sagar, Madhya Pradesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transport Services in Sagar",
            description: "Reliable transport and truck rental services in Sagar for goods, furniture, and commercial cargo across Madhya Pradesh and India.",
            areaServed: "Sagar, Madhya Pradesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Shifting in Sagar",
            description: "Complete house shifting and relocation service in Sagar, Makronia, Rehli, Bina, Khurai, Damoh and Banda.",
            areaServed: "Sagar District, Madhya Pradesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Truck Rental in Sagar",
            description: "Dedicated and shared truck rental in Sagar for local and intercity goods transport.",
            areaServed: "Sagar, Madhya Pradesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packing and Loading Services",
            description: "Professional packing, loading and unloading services for safe relocation in Sagar and nearby areas.",
            areaServed: "Sagar, Madhya Pradesh",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Long Distance Relocation",
            description: "Pan-India long distance relocation and moving services from Sagar, Madhya Pradesh.",
            areaServed: "India",
          },
        },
      ],
    },
    // SameAs links — add your social profiles here
    sameAs: [] as string[],
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

/** WebSite schema with SearchAction — helps Google show sitelinks search box */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.name + " — Packers and Movers, Transport Services in Sagar",
    publisher: { "@id": `${site.url}/#business` },
    inLanguage: ["en-IN", "hi"],
  };
}

/** LocalBusiness action markup — encourages Google to show Call action in SERPs */
export function buildActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Call Chouksey Transport",
    actionStatus: "PotentialActionStatus",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `tel:+${site.phoneIntl}`,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Call for Quote",
      target: `tel:+${site.phoneIntl}`,
    },
  };
}
