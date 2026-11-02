import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Domestic Relocation from Sagar | Pan-India Moving Services - Chouksey Transport",
  description: "Domestic relocation services from Sagar to anywhere in India. Safe, reliable long-distance moving. Call +91 95167 50418 for intercity moving quotes.",
  keywords: ["domestic relocation sagar", "intercity movers sagar", "long distance moving", "pan india packers movers"],
  alternates: { canonical: "/domestic-relocation" },
};

export default function DomesticRelocationPage() {
  return (
    <ServicePageTemplate
      title="Domestic Relocation from Sagar"
      h1="Pan-India Domestic Relocation Services from Sagar"
      description="Moving from Sagar to any city in India? Our domestic relocation service ensures your belongings reach safely across the country with professional handling and on-time delivery."
      heroImage="/images/domestic-relocation-service-india.jpg"
      heroImageAlt="Domestic relocation service across India"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Domestic Relocation", href: "/domestic-relocation" }]}
      content={[
        {
          heading: "Long-Distance Moving Experts",
          text: `${site.name} specializes in domestic relocation from Sagar to all major cities across India. Whether you're moving to Delhi, Mumbai, Bangalore, Hyderabad, or any other city, we provide end-to-end moving solutions. Our experienced team handles long-distance moves with care, using specialized packing materials and secure transport vehicles.`,
        },
        {
          heading: "Safe Transit Across India",
          text: "We use closed container trucks with GPS tracking for all domestic relocations. Your belongings are packed professionally, loaded carefully, and transported safely to your destination. We provide transit insurance options for valuable items and regular updates throughout the journey.",
        },
        {
          heading: "Complete Door-to-Door Service",
          text: "Our domestic relocation service is truly door-to-door. We pack at your Sagar location, transport to your destination city, unload, and unpack at your new home. We also provide furniture assembly, appliance setup, and help you settle into your new residence quickly and comfortably.",
        },
      ]}
      features={[
        "Pan-India coverage to all major cities",
        "GPS-tracked transport vehicles",
        "Professional long-distance packing",
        "Transit insurance available",
        "Door-to-door service",
        "Regular shipment updates",
        "Unpacking and setup at destination",
        "Dedicated move coordinator",
      ]}
      faqs={[
        {
          question: "How long does domestic relocation from Sagar take?",
          answer: "Transit time depends on the destination city. Delhi/Mumbai/Bangalore typically take 5-7 days. Other major cities take 7-10 days. Remote locations may take 10-15 days. We provide exact timelines during quotation.",
        },
        {
          question: "Do you provide insurance for long-distance moves?",
          answer: "Yes, we offer transit insurance for domestic relocations. This covers loss or damage during transport. We recommend insurance for valuable items, electronics, and fragile goods. Insurance charges are typically 1-2% of declared value.",
        },
        {
          question: "Can you track my shipment during transit?",
          answer: "Yes, all our domestic relocation vehicles are GPS-tracked. We provide regular updates on your shipment's location and estimated arrival time. You can contact our team anytime for status updates.",
        },
        {
          question: "What is the cost of domestic relocation from Sagar?",
          answer: "Costs vary based on distance, volume, and destination. For a 1BHK to Delhi/Mumbai, charges start from ₹25,000. For 2BHK, ₹35,000-₹50,000. For 3BHK and above, ₹60,000+. Contact us for an accurate quote based on your specific requirements.",
        },
      ]}
      relatedServices={[
        { name: "Packers and Movers", href: "/packers-and-movers" },
        { name: "Car Transportation", href: "/car-transportation" },
        { name: "House Shifting", href: "/house-shifting" },
      ]}
    />
  );
}
