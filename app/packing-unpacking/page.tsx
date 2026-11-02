import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packing and Unpacking Services in Sagar | Professional Packing - Chouksey Transport",
  description: "Professional packing and unpacking services in Sagar. Quality materials, trained staff, safe handling. Call +91 95167 50418 for packing service quotes.",
  keywords: ["packing unpacking sagar", "professional packing services sagar", "packing materials sagar", "loading unloading sagar"],
  alternates: { canonical: "/packing-unpacking" },
};

export default function PackingUnpackingPage() {
  return (
    <ServicePageTemplate
      title="Packing and Unpacking Services in Sagar"
      h1="Professional Packing & Unpacking Services in Sagar"
      description="Expert packing and unpacking services in Sagar using quality materials and proven techniques. We ensure your belongings are packed safely for transit and unpacked carefully at your new location."
      heroImage="/images/furniture-packing-protection.jpg"
      heroImageAlt="Professional packing and unpacking service"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Packing & Unpacking", href: "/packing-unpacking" }]}
      content={[
        {
          heading: "Quality Packing Services",
          text: `${site.name} uses premium packing materials and proven techniques to ensure your belongings are protected during transit. From fragile glassware and electronics to heavy furniture and appliances, our trained packing staff handles everything with care. We use bubble wrap, corrugated sheets, carton boxes, packing paper, and specialized protective covers.`,
        },
        {
          heading: "Systematic Unpacking Service",
          text: "Our unpacking service ensures you can settle into your new home quickly and comfortably. We carefully unpack all items, remove packing materials, and place your belongings where you want them. We also assemble furniture and set up appliances so your new home is ready to live in from day one.",
        },
        {
          heading: "Standalone Packing Service",
          text: "Need packing materials and expertise without the full moving service? We offer standalone packing services in Sagar. Our team will come to your location, pack all your items professionally, and you can arrange your own transport. This is ideal for those who have their own vehicle but need expert packing help.",
        },
      ]}
      features={[
        "Premium packing materials",
        "Bubble wrap and corrugated sheets",
        "Specialized fragile item packing",
        "Furniture protective covers",
        "Labeled boxes for easy unpacking",
        "Trained packing staff",
        "Standalone packing available",
        "Eco-friendly material options",
      ]}
      faqs={[
        {
          question: "What packing materials do you use?",
          answer: "We use high-quality packing materials including multi-layer bubble wrap, corrugated sheets, sturdy carton boxes of various sizes, packing paper, strong tape, and specialized protective covers for furniture. For fragile items, we use extra-thick padding and marked cartons.",
        },
        {
          question: "Can you pack only fragile items like glassware and electronics?",
          answer: "Yes, we specialize in packing fragile and delicate items. Our trained staff knows how to properly wrap and secure glassware, crockery, electronics, mirrors, and other breakable items. We use specialized materials and techniques to prevent damage during transit.",
        },
        {
          question: "Do you offer packing-only services without transport?",
          answer: "Yes, we offer standalone packing services. Our team will come to your location in Sagar, professionally pack all your items, and you can arrange your own transportation. This is perfect if you have your own vehicle or a friend helping with the move.",
        },
        {
          question: "How much does professional packing cost in Sagar?",
          answer: "Packing costs depend on the volume of items and materials required. For a 1BHK, packing charges start from ₹2,000. For 2BHK, ₹3,000-₹5,000. For 3BHK and above, ₹5,000-₹8,000. This includes all materials and labor. Contact us for an exact quote.",
        },
      ]}
      relatedServices={[
        { name: "House Shifting", href: "/house-shifting" },
        { name: "Packers and Movers", href: "/packers-and-movers" },
        { name: "Local Shifting", href: "/local-shifting" },
      ]}
    />
  );
}
