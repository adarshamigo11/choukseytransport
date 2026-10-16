import { Building2, Home, Package, Route, Truck } from "lucide-react";
import CallPrompt from "./CallPrompt";

const services = [
  {
    icon: Home,
    title: "House & Office Shifting",
    text: "Complete home and office relocation in Sagar and nearby towns — careful handling of furniture, appliances and fragile items.",
    points: ["1BHK to large homes", "Shops & offices", "Furniture dismantle & refit"],
  },
  {
    icon: Package,
    title: "Packing, Loading & Unloading",
    text: "Quality packing material and trained staff for safe loading and unloading, so your goods reach undamaged.",
    points: ["Bubble wrap & cartons", "Trained loaders", "Careful unloading"],
  },
  {
    icon: Truck,
    title: "Dedicated & Shared Truck Rental",
    text: "Truck rental services in Sagar for full-load or part-load goods transport — pick the size that fits your budget.",
    points: ["Mini to large trucks", "Full or part load", "Local & intercity"],
  },
  {
    icon: Route,
    title: "Pan-India Long Distance Relocation",
    text: "Reliable transport from Sagar to Bhopal, Indore, Delhi and every major city across India.",
    points: ["Door-to-door service", "Goods transport", "Planned delivery schedule"],
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
          Our Services
        </p>
        <h2 id="services-title" className="mt-1 text-2xl font-extrabold text-navy sm:text-4xl">
          Packers, Movers &amp; Transport Services in Sagar
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          From a single room to a full truck load — everything you need for a stress-free
          move, under one roof.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {services.map(({ icon: Icon, title, text, points }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-slate-600">{text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <CallPrompt
          heading="Need a mover or truck today?"
          sub="Tell us your route and load — we'll quote you on the call."
        />
      </div>
    </section>
  );
}
