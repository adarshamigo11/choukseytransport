import Link from "next/link";
import { Truck } from "lucide-react";
import CallButton from "./CallButton";
import { site } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#coverage", label: "Areas We Serve" },
  { href: "#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy text-accent">
            <Truck className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-navy sm:text-base">
              Chouksey Transport
            </span>
            <span className="block text-[11px] font-medium text-slate-600 sm:text-xs">
              Packers &amp; Movers · {site.nameHindi}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {nav.map((n) =>
            n.href.startsWith("/") ? (
              <Link key={n.href} href={n.href} className="hover:text-accent-strong">
                {n.label}
              </Link>
            ) : (
              <a key={n.href} href={n.href} className="hover:text-accent-strong">
                {n.label}
              </a>
            )
          )}
        </nav>

        <CallButton label={site.phoneDisplay} size="sm" />
      </div>

      <div className="hidden border-t border-slate-100 bg-slate-50 md:block">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-xs font-semibold text-slate-600">
          <li>House Shifting</li>
          <li>Office Shifting</li>
          <li>Packing &amp; Loading</li>
          <li>Truck Rental</li>
          <li>Pan-India Relocation</li>
        </ul>
      </div>
    </header>
  );
}
