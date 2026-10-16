import { Globe2, MapPin } from "lucide-react";
import CallPrompt from "./CallPrompt";
import { site } from "@/lib/site";

export default function Coverage() {
  return (
    <section id="coverage" aria-labelledby="coverage-title" className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
          Areas We Serve
        </p>
        <h2 id="coverage-title" className="mt-1 text-2xl font-extrabold text-navy sm:text-4xl">
          Transport &amp; Packers Movers in Sagar, Makronia, Bina, Damoh &amp; Beyond
        </h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Based in Sagar, Madhya Pradesh, we serve the whole region and run pan-India
          routes.
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {site.serviceAreas.map((a) => (
            <li
              key={a}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-navy"
            >
              <MapPin className="h-4 w-4 shrink-0 text-accent-strong" aria-hidden="true" />
              {a}
            </li>
          ))}
          <li className="col-span-2 flex items-center gap-2 rounded-xl bg-navy px-3 py-3 text-sm font-bold text-white sm:col-span-1">
            <Globe2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            All-India Routes
          </li>
        </ul>

        <CallPrompt
          heading="Moving from or to your town?"
          sub="Call and tell us the pickup and drop location."
        />
      </div>
    </section>
  );
}
