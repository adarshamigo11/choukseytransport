import { BadgeCheck, Clock, IndianRupee, MessageCircle, Users } from "lucide-react";
import CallButton from "./CallButton";
import { site, waHref } from "@/lib/site";

const trust = [
  { icon: Clock, text: "24/7 Booking" },
  { icon: IndianRupee, text: "Zero Hidden Charges" },
  { icon: Users, text: "Trained Handling Staff" },
  { icon: BadgeCheck, text: "Safe & On-Time" },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-gradient-to-br from-navy via-navy to-navy-light text-white"
    >
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-14 md:pb-16">
        <p className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
          Sagar · Makronia · Bina · Damoh · All India
        </p>

        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl"
        >
          Packers and Movers in Sagar —{" "}
          <span className="text-accent">Safe, Fast &amp; Budget-Friendly</span> Shifting
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
          {site.name} ({site.nameHindi}) — trusted house &amp; office shifting, packing,
          loading-unloading and truck rental in Sagar, MP and across India. One call, and
          we handle the rest.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <CallButton pulse className="w-full sm:w-auto" />
          <a
            href={waHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-lg font-bold hover:bg-white/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>
        <p className="mt-3 text-sm text-white/70">
          Free quote in minutes · Call anytime, day or night
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {trust.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-3 text-sm font-semibold"
            >
              <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
