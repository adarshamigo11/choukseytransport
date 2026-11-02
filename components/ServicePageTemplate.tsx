import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site, waHref } from "@/lib/site";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";

interface ServicePageProps {
  title: string;
  h1: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbs: { name: string; href: string }[];
  content: {
    heading: string;
    text: string;
  }[];
  features: string[];
  faqs?: { question: string; answer: string }[];
  relatedServices?: { name: string; href: string }[];
}

export default function ServicePageTemplate({
  title,
  h1,
  description,
  heroImage,
  heroImageAlt,
  breadcrumbs,
  content,
  features,
  faqs = [],
  relatedServices = [],
}: ServicePageProps) {
  return (
    <>
      <Header />
      <Breadcrumbs items={breadcrumbs} />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  {h1}
                </h1>
                <p className="mt-4 text-lg text-white/90">{description}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <CallButton pulse className="w-full sm:w-auto" />
                  <a
                    href={waHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp us (opens in new tab)"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1B5E20] px-6 py-4 text-lg font-extrabold text-white shadow-lg hover:bg-[#145218] sm:w-auto"
                  >
                    <MessageCircle className="h-6 w-6" aria-hidden="true" />
                    WhatsApp Now
                  </a>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl md:aspect-square">
                <Image
                  src={heroImage}
                  alt={heroImageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {content.map((section, idx) => (
          <section key={idx} className={idx % 2 === 0 ? "bg-white py-12" : "bg-slate-50 py-12"}>
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">{section.heading}</h2>
              <p className="mt-4 text-lg text-slate-700">{section.text}</p>
            </div>
          </section>
        ))}

        {/* Features Section */}
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
              Why Choose Our Services
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm"
                >
                  <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <p className="font-semibold text-navy">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="bg-white py-12">
            <div className="mx-auto max-w-4xl px-4">
              <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-6">
                {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold text-navy">{faq.question}</h3>
                  <p className="mt-2 text-slate-700">{faq.answer}</p>
                </div>
              ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="bg-slate-50 py-12">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-center text-2xl font-extrabold text-navy sm:text-3xl">
                Related Services
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-full bg-white px-6 py-3 font-semibold text-navy shadow-sm hover:bg-accent hover:text-white transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-navy py-12 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-white/90">
              Contact {site.name} today for a free quote. Call {site.phoneDisplay} or WhatsApp us.
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
      {/* Page-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            buildBreadcrumbSchema([
              { name: "Home", url: "/" },
              ...breadcrumbs.map((b) => ({ name: b.name, url: b.href })),
            ]),
            ...(faqs.length > 0 ? [buildFaqSchema(faqs)] : []),
          ]),
        }}
      />
    </>
  );
}
