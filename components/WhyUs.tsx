import { HandCoins, MapPinned, ShieldCheck, Users } from "lucide-react";
import CallPrompt from "./CallPrompt";

const reasons = [
  {
    icon: MapPinned,
    title: "Local Expertise in Sagar",
    text: "We know Sagar's roads, colonies and nearby routes, so pickups and deliveries run smoothly and on time.",
  },
  {
    icon: HandCoins,
    title: "Transparent Pricing",
    text: "A clear quote before we start. No hidden charges, no last-minute surprises.",
  },
  {
    icon: Users,
    title: "Trained Handling Staff",
    text: "Experienced packers and loaders who treat your belongings like their own.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable Transport",
    text: "Well-maintained trucks and careful handling from pickup to doorstep.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
          Why Choose Us
        </p>
        <h2 id="why-title" className="mt-1 text-2xl font-extrabold text-navy sm:text-4xl">
          Why Chouksey Transport is the Best Packers and Movers in Sagar
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200">
              <Icon className="h-8 w-8 text-accent-strong" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <CallPrompt
          heading="Get a clear, no-surprise quote"
          sub="Speak to us directly — answers in minutes, not days."
        />
      </div>
    </section>
  );
}
