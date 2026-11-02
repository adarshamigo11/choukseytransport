import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Shifting in Sagar | Commercial Office Relocation - Chouksey Transport",
  description: "Professional office shifting and commercial relocation services in Sagar. Minimal downtime, safe equipment transport. Call +91 94251 88487.",
  keywords: ["office shifting sagar", "commercial relocation sagar", "office movers", "corporate shifting"],
  alternates: { canonical: "/office-shifting" },
};

export default function OfficeShiftingPage() {
  return (
    <ServicePageTemplate
      title="Office Shifting in Sagar"
      h1="Professional Office & Commercial Shifting Services"
      description="Minimize downtime with our efficient office shifting services in Sagar. We handle IT equipment, furniture, files, and everything your business needs to relocate smoothly."
      heroImage="/images/office-commercial-moving.jpg"
      heroImageAlt="Professional office shifting service"
      breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Office Shifting", href: "/office-shifting" }]}
      content={[
        {
          heading: "Efficient Office Relocation in Sagar",
          text: `${site.name} understands that office shifting requires careful planning to minimize business disruption. Our experienced team works around your schedule, often completing moves over weekends or after hours. We handle everything from workstations and IT equipment to files, cabinets, and office furniture.`,
        },
        {
          heading: "Specialized Equipment Handling",
          text: "We have extensive experience moving sensitive office equipment including computers, servers, printers, photocopiers, and networking gear. Our team uses anti-static packaging and specialized crates to ensure your IT infrastructure arrives safely and ready to operate.",
        },
        {
          heading: "Commercial Moving Expertise",
          text: "From small offices to large commercial spaces, we handle all types of business relocations in Sagar. Our service includes inventory management, labeled packing for easy unpacking, furniture dismantling and reassembly, and setting up your new office according to your layout plan.",
        },
      ]}
      features={[
        "Weekend and after-hours moving available",
        "IT equipment and server relocation",
        "Furniture dismantling and reassembly",
        "Inventory management and labeling",
        "Minimal business disruption",
        "Secure transport for confidential files",
        "Office layout planning assistance",
        "Dedicated project manager",
      ]}
      faqs={[
        {
          question: "Can you move our office over the weekend to avoid business disruption?",
          answer: "Yes, we specialize in weekend and after-hours office moves. We can start Friday evening and have your office ready by Monday morning. This minimizes downtime for your business.",
        },
        {
          question: "How do you handle IT equipment and servers?",
          answer: "We use anti-static packaging, specialized crates, and climate-controlled transport for IT equipment. Our trained staff handles servers, computers, and networking gear with care. We recommend backing up data before the move.",
        },
        {
          question: "Do you provide moving insurance for office equipment?",
          answer: "Yes, we offer insurance coverage for valuable office equipment. We recommend insuring high-value items like servers, expensive IT equipment, and specialized machinery. Contact us for insurance options.",
        },
      ]}
      relatedServices={[
        { name: "Packers and Movers", href: "/packers-and-movers" },
        { name: "Commercial Transport", href: "/commercial-transportation" },
        { name: "Local Shifting", href: "/local-shifting" },
      ]}
    />
  );
}
