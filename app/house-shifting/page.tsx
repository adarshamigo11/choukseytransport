import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "House Shifting in Sagar | Home Relocation Services - Chouksey Transport",
  description: "Professional house shifting services in Sagar, MP. Safe home relocation with packing, loading, transport & unpacking. Call +91 95167 50418 for free quote.",
  keywords: ["house shifting sagar", "home relocation sagar", "house shifting services", "home movers sagar"],
  alternates: { canonical: "/house-shifting" },
};

export default function HouseShiftingPage() {
  return (
    <ServicePageTemplate
      title="House Shifting in Sagar"
      h1="Professional House Shifting Services in Sagar"
      description="Complete home relocation services in Sagar. From packing your household items to safe transport and unpacking at your new home — we handle everything with care."
      heroImage="/images/house-shifting-professional.jpg"
      heroImageAlt="Professional house shifting service in Sagar"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "House Shifting", href: "/house-shifting" }]}
      content={[
        {
          heading: "Complete House Shifting Solutions in Sagar",
          text: `${site.name} specializes in house shifting services across Sagar and surrounding areas. Whether you're moving within Sagar city or relocating to another town, our experienced team ensures your household belongings reach safely. We handle everything from careful packing of fragile items to loading furniture and transporting it to your new home.`,
        },
        {
          heading: "Safe and Efficient Home Relocation",
          text: "Our house shifting service includes professional packing with quality materials, careful loading by trained staff, safe transportation in well-maintained vehicles, and unpacking at your new location. We treat your belongings like our own, ensuring zero damage during the move. From 1BHK apartments to large independent houses, we handle all types of home relocations.",
        },
        {
          heading: "Local Expertise in Sagar",
          text: "Being based in Sagar, we have extensive knowledge of local routes, building layouts, and parking situations. This local expertise allows us to plan efficient moves and avoid common challenges. We serve all areas of Sagar including Makronia, Rajakhedi, and nearby localities.",
        },
      ]}
      features={[
        "Professional packing of household items",
        "Furniture dismantling and reassembly",
        "Safe loading with protective equipment",
        "Climate-controlled transport options",
        "Unpacking and arrangement at new home",
        "Insurance coverage for valuable items",
        "Flexible scheduling including weekends",
        "Experienced and trained moving staff",
      ]}
      faqs={[
        {
          question: "How long does house shifting take in Sagar?",
          answer: "Local house shifting within Sagar typically takes 1-2 days. This includes packing (half day), loading and transport (few hours), and unpacking (half day). For larger homes or complex moves, it may take 2-3 days.",
        },
        {
          question: "Do you pack fragile items like glassware and electronics?",
          answer: "Yes, we specialize in packing fragile items. We use bubble wrap, packing paper, and specialized cartons for glassware, crockery, electronics, and other delicate items. Our trained staff knows how to pack these items safely to prevent damage.",
        },
        {
          question: "Can you move heavy furniture like almirahs and beds?",
          answer: "Absolutely. We have experience moving all types of heavy furniture including almirahs, beds, sofas, dining tables, and more. We dismantle large furniture for transport and reassemble it at your new location.",
        },
        {
          question: "What is the cost of house shifting in Sagar?",
          answer: "House shifting costs depend on the size of your home, distance, and volume of items. For a 1BHK within Sagar, charges start from ₹5,000. For 2BHK, ₹8,000-₹12,000. For 3BHK and above, ₹15,000+. Call +91 95167 50418 for an exact quote.",
        },
      ]}
      relatedServices={[
        { name: "Packers and Movers", href: "/packers-and-movers" },
        { name: "Local Shifting", href: "/local-shifting" },
        { name: "Packing & Unpacking", href: "/packing-unpacking" },
        { name: "Domestic Relocation", href: "/domestic-relocation" },
      ]}
    />
  );
}
