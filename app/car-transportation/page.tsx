import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Transportation from Sagar | Vehicle Transport Services - Chouksey Transport",
  description: "Safe car transportation services from Sagar to any city in India. Enclosed car carriers, insurance coverage. Call +91 95167 50418 for car transport quotes.",
  keywords: ["car transportation sagar", "car carrier sagar", "vehicle transport", "car relocation india"],
  alternates: { canonical: "/car-transportation" },
};

export default function CarTransportationPage() {
  return (
    <ServicePageTemplate
      title="Car Transportation from Sagar"
      h1="Safe & Reliable Car Transportation Services from Sagar"
      description="Need to transport your car from Sagar to another city? We provide secure car carrier services with enclosed transport, insurance coverage, and door-to-door delivery across India."
      heroImage="/images/international-moving-services.jpg"
      heroImageAlt="Professional car transportation service"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Car Transportation", href: "/car-transportation" }]}
      content={[
        {
          heading: "Secure Car Carrier Services",
          text: `${site.name} offers professional car transportation services from Sagar to all major cities in India. We use specialized car carriers with hydraulic loading systems to ensure your vehicle is transported safely without any damage. Our enclosed carriers protect your car from weather, road debris, and transit risks.`,
        },
        {
          heading: "Door-to-Door Vehicle Transport",
          text: "We pick up your car from your location in Sagar and deliver it to your destination address. Our team handles all documentation, insurance, and logistics. You can track your vehicle's journey and receive regular updates until it reaches you safely.",
        },
        {
          heading: "Insurance and Safety",
          text: "Every car transport comes with comprehensive insurance coverage. We document your vehicle's condition before loading with photos and videos. Our trained drivers follow safe driving practices, and our carriers are regularly maintained for optimal safety.",
        },
      ]}
      features={[
        "Enclosed car carriers for protection",
        "Hydraulic loading/unloading system",
        "Comprehensive insurance coverage",
        "GPS-tracked vehicles",
        "Door-to-door pickup and delivery",
        "Pre-transport vehicle inspection",
        "Pan-India coverage",
        "Competitive pricing",
      ]}
      faqs={[
        {
          question: "How long does car transportation from Sagar take?",
          answer: "Transit time depends on the destination. Delhi/Mumbai/Bangalore take 4-6 days. Other major cities take 5-8 days. Remote locations may take 8-12 days. We provide exact timelines during booking.",
        },
        {
          question: "Is my car insured during transport?",
          answer: "Yes, all car transports include comprehensive insurance coverage at no extra cost. This covers damage during loading, transit, and unloading. We document your car's condition before transport with photos.",
        },
        {
          question: "Can you transport luxury and high-value cars?",
          answer: "Absolutely. We have experience transporting all types of vehicles including luxury cars, SUVs, sports cars, and classic vehicles. We use enclosed carriers with extra padding and secure tie-down systems for high-value vehicles.",
        },
        {
          question: "What is the cost of car transportation from Sagar?",
          answer: "Costs depend on distance and vehicle type. For Delhi/Mumbai, charges start from ₹8,000 for a sedan. For Bangalore/Chennai, ₹12,000-₹15,000. SUVs and larger vehicles cost slightly more. Contact us for an exact quote.",
        },
      ]}
      relatedServices={[
        { name: "Bike Transportation", href: "/bike-transportation" },
        { name: "Domestic Relocation", href: "/domestic-relocation" },
        { name: "Commercial Transport", href: "/commercial-transportation" },
      ]}
    />
  );
}
