import { ExternalLink, Star } from "lucide-react";
import CallPrompt from "./CallPrompt";
import { site } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export default function Reviews() {
  const stats = [
    site.rating && { label: `Rating (${site.rating.count} reviews)`, value: `${site.rating.value} ★` },
    site.completedMoves && { label: "Relocations completed", value: site.completedMoves },
    site.foundedYear && { label: "Serving since", value: site.foundedYear },
  ].filter(Boolean) as { label: string; value: string }[];

  // Nothing real to show yet → render nothing instead of inventing proof.
  if (stats.length === 0 && reviews.length === 0 && !site.googleMapsUrl) return null;

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-strong">
          Customer Reviews
        </p>
        <h2 id="reviews-title" className="mt-1 text-2xl font-extrabold text-navy sm:text-4xl">
          Trusted by Families &amp; Businesses in Sagar
        </h2>

        {stats.length > 0 && (
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-navy p-5 text-center text-white">
                <dd className="text-3xl font-extrabold text-accent">{s.value}</dd>
                <dt className="mt-1 text-sm text-white/80">{s.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {reviews.length > 0 && (
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name + r.text} className="rounded-2xl bg-paper p-6 ring-1 ring-slate-200">
                <div className="flex gap-0.5" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 text-slate-700">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-navy">
                  {r.name} <span className="font-medium text-slate-500">· {r.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {site.googleMapsUrl && (
          <a
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-bold text-navy-light underline"
          >
            Read our reviews on Google <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        )}

        <CallPrompt heading="Join our happy customers — call now" />
      </div>
    </section>
  );
}
