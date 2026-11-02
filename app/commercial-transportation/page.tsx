import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Transportation in Sagar | Goods Transport Services - Chouksey Transport",
  description: "Commercial goods transportation services in Sagar, MP. Dedicated trucks, part-load options, safe delivery. Call +91 95167 50418 for commercial transport quotes.",
  keywords: ["commercial transportation sagar", "goods transport sagar", "truck rental sagar", "commercial movers sagar"],
  alternates: { canonical: "/commercial-transportation" },
};

export default function CommercialTransportationPage() {
  return (
    <ServicePageTemplate
      title="Commercial Transportation in Sagar"
      h1="Commercial Goods Transportation Services in Sagar"
      description="Reliable commercial transportation services in Sagar for businesses and industries. Dedicated trucks, part-load options, and timely delivery of goods across Madhya Pradesh and India."
      heroImage="/images/office-commercial-moving.jpg"
      heroImageAlt="Commercial goods transportation service"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Commercial Transportation", href: "/commercial-transportation" }]}
      content={[
        {
          heading: "Business Transport Solutions",
          text: `${site.name} provides comprehensive commercial transportation services in Sagar and across Madhya Pradesh. Whether you need to move raw materials, finished goods, or office equipment, we have the right vehicles and expertise to handle your commercial cargo safely and on time.`,
        },
        {
          heading: "Dedicated and Part-Load Options",
          text: "We offer both dedicated truck rental for full loads and shared transport options for part-load shipments. Our fleet includes mini trucks, large containers, and open-body vehicles to accommodate all types of commercial goods. Choose the option that best fits your budget and timeline.",
        },
        {
          heading: "Industrial and Retail Transport",
          text: "From industrial machinery to retail stock, we handle all types of commercial goods. Our experienced team ensures proper loading, secure transport, and safe unloading at your destination. We serve businesses across Sagar, Bina, Khurai, Damoh, Rehli, Banda, and all major cities in India.",
        },
      ]}
      features={[
        "Dedicated and part-load options",
        "Mini trucks to large containers",
        "GPS-tracked commercial vehicles",
        "Experienced loading crew",
        "Pan-India delivery network",
        "Competitive commercial rates",
        "Regular and scheduled transport",
        "Goods safety guarantee",
      ]}
      faqs={[
        {
          question: "What types of commercial goods do you transport?",
          answer: "We transport all types of commercial goods including industrial equipment, raw materials, retail stock, office furniture, electronics, machinery, agricultural products, and construction materials. Our fleet handles everything from small parcels to large industrial cargo.",
        },
        {
          question: "Do you offer dedicated truck rental for commercial use?",
          answer: "Yes, we provide dedicated truck rental for commercial clients who need exclusive transport. This ensures your goods are the only cargo in the vehicle, providing faster delivery and reduced handling. Available in Sagar and for intercity routes.",
        },
        {
          question: "Can you handle regular scheduled commercial transport?",
          answer: "Absolutely. We offer scheduled commercial transport services for businesses with regular shipping needs. Whether it's daily, weekly, or monthly shipments, we can set up a consistent transport schedule that fits your business operations.",
        },
        {
          question: "What areas do you serve for commercial transportation?",
          answer: "We serve all commercial areas in Sagar and surrounding towns including Makronia, Bina, Khurai, Damoh, Rehli, and Banda. We also provide intercity and pan-India commercial transport to major business hubs across India.",
        },
      ]}
      relatedServices={[
        { name: "Office Shifting", href: "/office-shifting" },
        { name: "Packers and Movers", href: "/packers-and-movers" },
        { name: "Domestic Relocation", href: "/domestic-relocation" },
      ]}
    />
  );
}
