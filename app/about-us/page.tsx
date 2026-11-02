import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site, waHref } from "@/lib/site";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { MessageCircle, MapPin, Phone, Truck, ShieldCheck, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chouksey Transport Packers and Movers | Sagar, MP",
  description: "Learn about Chouksey Transport Packers and Movers — trusted moving company in Sagar, Madhya Pradesh. Professional relocation services with years of experience.",
  keywords: ["about chouksey transport", "packers movers about us sagar", "moving company sagar mp"],
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <Breadcrumbs items={[{ name: "About Us", href: "/about-us" }]} />
      <main id="main-content">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  About {site.name}
                </h1>
                <p className="mt-4 text-lg text-white/90">
                  Your trusted packers and movers in Sagar, Madhya Pradesh. We provide safe, reliable, and affordable relocation services for homes, offices, and commercial goods across India.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl md:aspect-square">
                <Image
                  src="/images/planning-moving-service.jpg"
                  alt="Chouksey Transport team planning a move in Sagar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
              Trusted Packers and Movers in Sagar, Madhya Pradesh
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              {site.name} ({site.nameHindi}) is a professional moving and transportation company based in Sagar, Madhya Pradesh. We specialize in house shifting, office relocation, packing and unpacking, vehicle transportation, and commercial goods movement. Our commitment to quality service and customer satisfaction has made us one of the most trusted packers and movers in Sagar.
            </p>
            <p className="mt-4 text-lg text-slate-700">
              We understand that moving is not just about transporting goods — it&apos;s about moving your life, your memories, and your business. That&apos;s why we treat every move with the care and attention it deserves. From careful packing with quality materials to safe loading, transportation, and unpacking at your destination, we handle everything so you don&apos;t have to worry.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
              What We Do
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Truck, title: "Packers and Movers", desc: "Complete packing and moving services for homes and offices in Sagar and across India." },
                { icon: MapPin, title: "Local and Domestic Relocation", desc: "Whether moving within Sagar or to another city, we ensure safe and timely delivery." },
                { icon: ShieldCheck, title: "Safe and Insured Transport", desc: "All moves are handled with care and backed by insurance coverage for your peace of mind." },
                { icon: Users, title: "Trained Professional Staff", desc: "Our experienced team of packers, loaders, and drivers ensures smooth relocation." },
                { icon: Clock, title: "24/7 Availability", desc: "We're available round the clock for bookings, queries, and emergency moves." },
                { icon: Phone, title: "Free Quotes", desc: "Call us at " + site.phoneDisplay + " for a free, no-obligation moving quote." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl bg-white p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
              Areas We Serve
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
              Based in Sagar, Madhya Pradesh, we provide moving and transportation services across the region and pan-India.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {site.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-navy/5 px-4 py-2 text-sm font-semibold text-navy"
                >
                  {area}
                </span>
              ))}
              <span className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">
                All India
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy py-12 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Move? Contact Us Today
            </h2>
            <p className="mt-3 text-white/90">
              Call {site.phoneDisplay} or WhatsApp us for a free quote. We&apos;re available 24/7.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton pulse className="w-full sm:w-auto" />
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B5E20] px-8 py-4 text-lg font-extrabold text-white shadow-lg hover:bg-[#145218] sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about-us" },
          ])),
        }}
      />
    </>
  );
}
