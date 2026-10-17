import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import { site, telHref, waHref } from "@/lib/site";
import { MapPin, MessageCircle, Phone, Clock, Truck, Package, Home, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Chouksey Transport — Packers and Movers in Sagar",
  description: `Call ${site.phoneDisplay} for instant quote on packers and movers, transport, house shifting, office relocation and truck rental in Sagar, Makronia, Rehli, Bina, Khurai, Damoh, Banda. Open 24/7.`,
  openGraph: {
    title: "Contact Chouksey Transport — Packers and Movers in Sagar",
    description: `Call ${site.phoneDisplay} for instant quote. Open 24/7.`,
  },
};

const services = [
  { icon: Home, name: "House Shifting", desc: "Complete home relocation in Sagar and nearby areas" },
  { icon: Building2, name: "Office Shifting", desc: "Professional office and commercial space relocation" },
  { icon: Package, name: "Packing & Loading", desc: "Safe packing, loading and unloading services" },
  { icon: Truck, name: "Truck Rental", desc: "Dedicated and shared trucks for goods transport" },
];

const areas = [
  "Sagar City", "Makronia", "Rajakhedi", "Bina", "Khurai",
  "Damoh", "Rehli", "Banda", "Bhopal", "Vidisha",
];

export default function ContactPage() {
  const a = site.address;

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero / CTA */}
        <section className="bg-gradient-to-br from-navy via-navy to-navy-light text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Contact Chouksey Transport
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Get an instant quote for packers and movers, transport, house shifting
              and truck rental in Sagar, MP. Call or WhatsApp us — we are available 24/7.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton pulse className="w-full sm:w-auto" />
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-extrabold text-white shadow-lg hover:bg-[#1ebe5d] sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                WhatsApp Now
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">
              {site.phoneDisplay} · Free quote in minutes · No obligation
            </p>
          </div>
        </section>

        {/* Contact details */}
        <section className="bg-white py-12">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <Phone className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
              <h2 className="mt-3 text-lg font-bold text-navy">Call Us</h2>
              <a href={telHref} className="mt-2 block text-2xl font-extrabold text-navy hover:text-accent">
                {site.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-slate-600">Available 24/7 for bookings</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <MessageCircle className="mx-auto h-10 w-10 text-[#25D366]" aria-hidden="true" />
              <h2 className="mt-3 text-lg font-bold text-navy">WhatsApp</h2>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-2xl font-extrabold text-navy hover:text-[#25D366]"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-1 text-sm text-slate-600">Chat with us instantly</p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 text-center">
              <MapPin className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
              <h2 className="mt-3 text-lg font-bold text-navy">Office Address</h2>
              <address className="mt-2 text-sm not-italic text-slate-700">
                {a.street}<br />
                {a.locality}, {a.region} {a.postalCode}<br />
                India
              </address>
              <Clock className="mx-auto mt-2 h-4 w-4 text-slate-400" aria-hidden="true" />
              <p className="text-xs text-slate-500">Open 24 hours, 7 days a week</p>
            </div>
          </div>
        </section>

        {/* Services we offer */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-extrabold text-navy">
              Our Services in Sagar
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-600">
              Call {site.phoneDisplay} for any of these services — instant quote, zero hidden charges.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, name, desc }) => (
                <div key={name} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
                  <Icon className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 font-bold text-navy">{name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas we serve */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-extrabold text-navy">
              Areas We Serve — Transport & Packers and Movers
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-600">
              We provide packers and movers and transport services across Sagar district and nearby cities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-navy/5 px-4 py-2 text-sm font-semibold text-navy"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy py-12 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Move? Call Now for a Free Quote
            </h2>
            <p className="mt-3 text-white/80">
              Whether it is house shifting, office relocation, or truck rental in Sagar —
              one call to {site.phoneDisplay} and we handle everything.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CallButton pulse className="w-full sm:w-auto" />
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-extrabold text-white shadow-lg hover:bg-[#1ebe5d] sm:w-auto"
              >
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
