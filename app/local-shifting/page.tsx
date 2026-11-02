import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local Shifting in Sagar | Local Packers and Movers - Chouksey Transport",
  description: "Local shifting services in Sagar, MP. Quick and affordable local house and office relocation. Same-day service available. Call +91 94251 88487.",
  keywords: ["local shifting sagar", "local packers movers sagar", "local movers", "within city shifting"],
  alternates: { canonical: "/local-shifting" },
};

export default function LocalShiftingPage() {
  return (
    <ServicePageTemplate
      title="Local Shifting in Sagar"
      h1="Quick & Affordable Local Shifting Services in Sagar"
      description="Need to move within Sagar city? Our local shifting service provides quick, affordable, and reliable relocation for homes and offices in Sagar and nearby areas."
      heroImage="/images/packers-movers-local-area.jpg"
      heroImageAlt="Local shifting service in Sagar"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Local Shifting", href: "/local-shifting" }]}
      content={[
        {
          heading: "Fast Local Moving Services",
          text: `${site.name} offers same-day and next-day local shifting services across Sagar. Whether you're moving from one locality to another within Sagar city, or relocating to nearby areas like Makronia, Rajakhedi, or Bina, our local expertise ensures a smooth, hassle-free move.`,
        },
        {
          heading: "Affordable Local Relocation",
          text: "Local moves are typically completed in a single day, making them cost-effective. Our transparent pricing means no surprises — you know the exact cost before we start. Local shifting charges start from ₹5,000 for a 1BHK within Sagar city.",
        },
        {
          heading: "Serving All Sagar Localities",
          text: "We provide local shifting services in all areas of Sagar including the city center, Makronia, Rajakhedi, and surrounding neighborhoods. Our familiarity with local routes, parking situations, and building layouts ensures efficient moves.",
        },
      ]}
      features={[
        "Same-day service available",
        "Affordable local rates",
        "Complete packing and unpacking",
        "Furniture handling and reassembly",
        "Local area expertise",
        "Flexible scheduling",
        "No hidden charges",
        "Experienced local staff",
      ]}
      faqs={[
        {
          question: "Do you provide same-day local shifting service?",
          answer: "Yes, we offer same-day local shifting services in Sagar subject to availability. For guaranteed same-day service, we recommend booking at least one day in advance. Call +91 94251 88487 to check availability.",
        },
        {
          question: "What areas in Sagar do you serve for local shifting?",
          answer: "We serve all areas of Sagar city including the main city, Makronia, Rajakhedi, and all localities. We also serve nearby towns like Bina, Khurai, Damoh, Rehli, and Banda for local moves.",
        },
        {
          question: "How much does local shifting cost in Sagar?",
          answer: "Local shifting in Sagar starts from ₹5,000 for a 1BHK. For 2BHK, ₹8,000-₹12,000. For 3BHK and above, ₹15,000+. The exact cost depends on distance, volume, and specific requirements. Contact us for a free quote.",
        },
      ]}
      relatedServices={[
        { name: "House Shifting", href: "/house-shifting" },
        { name: "Office Shifting", href: "/office-shifting" },
        { name: "Packers and Movers", href: "/packers-and-movers" },
      ]}
    />
  );
}
