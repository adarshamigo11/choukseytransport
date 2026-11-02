import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packers and Movers in Sagar | Best Moving Services - Chouksey Transport",
  description: "Top-rated packers and movers in Sagar, MP. Professional house & office shifting, packing, loading, unloading services. Call +91 95167 50418 for free quote.",
  keywords: ["packers and movers in sagar", "best packers and movers sagar", "moving services sagar", "packers movers MP"],
  alternates: { canonical: "/packers-and-movers" },
  openGraph: {
    title: "Packers and Movers in Sagar | Best Moving Services - Chouksey Transport",
    description: "Professional packers and movers in Sagar. Safe, fast & budget-friendly relocation services.",
    url: "https://www.choukseytransportpackersandmovers.in/packers-and-movers",
  },
};

export default function PackersAndMoversPage() {
  return (
    <ServicePageTemplate
      title="Packers and Movers in Sagar"
      h1="Best Packers and Movers in Sagar, MP"
      description="Professional packing and moving services in Sagar. Safe, reliable, and affordable relocation for homes and offices across Madhya Pradesh and India."
      heroImage="/images/express-packers-movers-india.jpg"
      heroImageAlt="Professional packers and movers service in Sagar"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Packers and Movers", href: "/packers-and-movers" }]}
      content={[
        {
          heading: "Trusted Packers and Movers in Sagar",
          text: `${site.name} provides comprehensive packing and moving solutions in Sagar, Madhya Pradesh. With years of experience in the relocation industry, we have helped thousands of families and businesses move safely and efficiently. Our team of trained professionals ensures your belongings reach their destination in perfect condition.`,
        },
        {
          heading: "Complete Moving Solutions",
          text: "From careful packing with quality materials to safe loading, transportation, and unpacking at your new location — we handle everything. Whether you're moving within Sagar city or relocating to another state, our packers and movers service covers all your needs. We specialize in house shifting, office relocation, vehicle transport, and commercial goods movement.",
        },
        {
          heading: "Why We're the Best Packers and Movers in Sagar",
          text: "Our commitment to quality service, transparent pricing, and customer satisfaction makes us the preferred choice for packers and movers in Sagar. We use premium packing materials, maintain a fleet of well-equipped vehicles, and employ trained staff who handle your belongings with care. Our local expertise in Sagar and surrounding areas ensures smooth, timely relocations.",
        },
      ]}
      features={[
        "Professional packing with quality materials",
        "Safe loading and unloading by trained staff",
        "Well-maintained transport vehicles",
        "Insurance coverage for valuable items",
        "On-time delivery guarantee",
        "Transparent pricing with no hidden charges",
        "Local expertise in Sagar and MP",
        "Pan-India relocation services",
        "24/7 customer support",
      ]}
      faqs={[
        {
          question: "What areas do your packers and movers services cover in Sagar?",
          answer: "We provide packers and movers services across all areas of Sagar city including Makronia, Rajakhedi, and surrounding localities. We also serve nearby towns like Bina, Khurai, Damoh, Rehli, and Banda.",
        },
        {
          question: "How much do packers and movers charge in Sagar?",
          answer: "Our charges depend on the distance, volume of goods, and type of service required. For local shifting within Sagar, charges typically start from ₹5,000. Contact us at +91 95167 50418 for a free, no-obligation quote.",
        },
        {
          question: "Do you provide packing materials?",
          answer: "Yes, we provide all packing materials including cartons, bubble wrap, packing paper, tape, and protective covers for furniture. Our packing materials are high-quality and designed to keep your belongings safe during transit.",
        },
        {
          question: "How far in advance should I book packers and movers?",
          answer: "We recommend booking at least 3-5 days in advance for local moves and 7-10 days for intercity or long-distance relocations. However, we also accommodate urgent moves subject to availability.",
        },
      ]}
      relatedServices={[
        { name: "House Shifting", href: "/house-shifting" },
        { name: "Office Shifting", href: "/office-shifting" },
        { name: "Local Shifting", href: "/local-shifting" },
        { name: "Domestic Relocation", href: "/domestic-relocation" },
      ]}
    />
  );
}
