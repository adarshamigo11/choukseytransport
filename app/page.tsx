import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Coverage from "@/components/Coverage";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

const homepageFaqs = [
  {
    question: "Where does Chouksey Transport Packers and Movers provide services?",
    answer: "We provide packers and movers services from Sagar, Madhya Pradesh to all major cities across India. Locally, we serve Sagar City, Makronia, Rajakhedi, Bina, Khurai, Damoh, Rehli, Banda, Bhopal, and Vidisha.",
  },
  {
    question: "Do you provide house shifting in Sagar?",
    answer: "Yes, we provide complete house shifting services in Sagar including packing, loading, transportation, unloading, and unpacking. We handle everything from 1BHK apartments to large independent houses.",
  },
  {
    question: "Do you provide local and domestic relocation?",
    answer: "Yes, we offer both local shifting within Sagar city and domestic relocation from Sagar to any city in India. Our domestic service covers Delhi, Mumbai, Bangalore, Hyderabad, and all major cities.",
  },
  {
    question: "Can I transport my car or bike from Sagar?",
    answer: "Yes, we provide specialized car and bike transportation services from Sagar using enclosed carriers with proper safety measures. We transport vehicles to all major cities across India with insurance coverage.",
  },
  {
    question: "Do you provide commercial goods transportation?",
    answer: "Yes, we offer commercial transportation services including dedicated truck rental, part-load shipping, and regular scheduled transport for businesses in Sagar and across India.",
  },
  {
    question: "How can I get a transportation quotation?",
    answer: "You can get a free quotation by calling us at " + site.phoneDisplay + " or messaging us on WhatsApp. We provide instant quotes with no hidden charges based on your specific requirements.",
  },
  {
    question: "How can I contact Chouksey Transport Packers and Movers?",
    answer: "You can reach us by phone at " + site.phoneDisplay + ", or our other numbers +91 94251 88487 and +91 98931 37841. You can also WhatsApp us or visit our office at Main Road, Near Bus Stand, Sagar, MP 470001.",
  },
];

export default function Home() {
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", url: "/" }]);
  const faqSchema = buildFaqSchema(homepageFaqs);

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Services />

        {/* Service Pages Grid — critical for internal linking / sitelinks */}
        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
              Our Services
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
              Complete Moving and Transportation Services in Sagar
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { href: "/packers-and-movers", title: "Packers and Movers", img: "/images/express-packers-movers-india.jpg", desc: "Professional packing and moving services in Sagar for homes and offices." },
                { href: "/house-shifting", title: "House Shifting", img: "/images/house-shifting-professional.jpg", desc: "Complete home relocation with packing, loading, transport and unpacking." },
                { href: "/office-shifting", title: "Office Shifting", img: "/images/office-commercial-moving.jpg", desc: "Efficient office relocation with minimal business disruption." },
                { href: "/local-shifting", title: "Local Shifting", img: "/images/packers-movers-local-area.jpg", desc: "Quick and affordable local shifting within Sagar city." },
                { href: "/domestic-relocation", title: "Domestic Relocation", img: "/images/domestic-relocation-service-india.jpg", desc: "Pan-India long-distance moving from Sagar to any city." },
                { href: "/car-transportation", title: "Car Transportation", img: "/images/international-moving-services.jpg", desc: "Safe car carrier services with enclosed transport and insurance." },
                { href: "/bike-transportation", title: "Bike Transportation", img: "/images/stress-free-relocation.jpg", desc: "Specialized bike carriers with secure packaging for two-wheelers." },
                { href: "/commercial-transportation", title: "Commercial Transport", img: "/images/house-shifting-loading.jpg", desc: "Dedicated trucks and part-load options for commercial goods." },
                { href: "/packing-unpacking", title: "Packing & Unpacking", img: "/images/furniture-packing-protection.jpg", desc: "Professional packing with quality materials and careful handling." },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={service.img}
                      alt={`${service.title} service in Sagar`}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-navy group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WhyUs />
        <Coverage />
        <Reviews />

        {/* FAQ Section — helps with SEO and voice search */}
        <section className="bg-slate-50 px-4 py-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-sm font-bold uppercase tracking-wide text-accent-strong">
              FAQ
            </p>
            <h2 className="mt-1 text-center text-2xl font-extrabold text-navy sm:text-3xl">
              Frequently Asked Questions — Packers and Movers in Sagar
            </h2>
            <div className="mt-8 space-y-6">
              {homepageFaqs.map((faq) => (
                <div key={faq.question} className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{faq.question}</h3>
                  <p className="mt-2 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Homepage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />
    </>
  );
}
