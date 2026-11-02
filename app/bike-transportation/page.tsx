import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bike Transportation from Sagar | Motorcycle Transport - Chouksey Transport",
  description: "Safe bike and motorcycle transportation from Sagar to any city. Specialized bike carriers, secure packaging. Call +91 94251 88487 for bike transport quotes.",
  keywords: ["bike transportation sagar", "motorcycle transport", "bike carrier sagar", "bike relocation india"],
  alternates: { canonical: "/bike-transportation" },
};

export default function BikeTransportationPage() {
  return (
    <ServicePageTemplate
      title="Bike Transportation from Sagar"
      h1="Safe & Secure Bike Transportation Services from Sagar"
      description="Transport your motorcycle safely from Sagar to any city in India. We use specialized bike carriers with secure packaging to ensure your two-wheeler reaches without a scratch."
      heroImage="/images/stress-free-relocation.jpg"
      heroImageAlt="Professional bike transportation service"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Bike Transportation", href: "/bike-transportation" }]}
      content={[
        {
          heading: "Specialized Bike Carriers",
          text: `${site.name} provides professional bike transportation services from Sagar using specialized two-wheeler carriers. Our bikes are secured with proper tie-down systems and protective packaging to prevent any damage during transit. Whether it's a regular commuter bike or a premium motorcycle, we handle all types with care.`,
        },
        {
          heading: "Safe Packaging and Loading",
          text: "We use bubble wrap, corrugated sheets, and specialized covers to protect your bike's body, mirrors, and accessories. Our trained staff loads bikes using proper techniques that prevent scratches, dents, and mechanical damage. We also drain fuel to safe levels for transport safety.",
        },
        {
          heading: "Pan-India Bike Delivery",
          text: "We transport bikes from Sagar to all major cities and towns across India. Our network ensures reliable delivery with tracking and regular updates. We also offer door-to-door pickup and delivery for your convenience.",
        },
      ]}
      features={[
        "Specialized two-wheeler carriers",
        "Protective packaging and wrapping",
        "Secure tie-down systems",
        "Insurance coverage included",
        "Pan-India delivery network",
        "Door-to-door service",
        "GPS tracking available",
        "Competitive rates",
      ]}
      faqs={[
        {
          question: "How is my bike protected during transport?",
          answer: "We use multiple layers of protection: bubble wrap for the body, corrugated sheets for panels, and specialized covers. Bikes are secured with proper tie-down straps in the carrier to prevent movement. We also drain fuel to safe levels.",
        },
        {
          question: "Can you transport premium and sports bikes?",
          answer: "Yes, we transport all types of motorcycles including premium bikes, sports bikes, cruisers, and vintage motorcycles. We use extra padding and careful handling for high-value bikes. Our carriers are designed to accommodate all bike sizes.",
        },
        {
          question: "How long does bike transport from Sagar take?",
          answer: "Transit time depends on destination. Nearby cities (Bhopal, Indore) take 2-3 days. Delhi/Mumbai take 4-6 days. South India takes 6-8 days. We provide exact timelines during booking.",
        },
        {
          question: "What is the cost of bike transportation from Sagar?",
          answer: "Bike transport costs start from ₹3,000 for nearby cities. Delhi/Mumbai costs ₹5,000-₹7,000. South India costs ₹7,000-₹10,000. Premium bikes may cost slightly more. Contact us for an exact quote based on your bike model and destination.",
        },
      ]}
      relatedServices={[
        { name: "Car Transportation", href: "/car-transportation" },
        { name: "Domestic Relocation", href: "/domestic-relocation" },
        { name: "Packers and Movers", href: "/packers-and-movers" },
      ]}
    />
  );
}
