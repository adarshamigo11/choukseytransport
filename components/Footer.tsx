import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site, telHref, waHref, allPhones } from "@/lib/site";

const links = [
  { href: "#services", label: "Packers and Movers in Sagar" },
  { href: "#services", label: "Transport in Sagar" },
  { href: "#services", label: "Truck Rental Services in Sagar" },
  { href: "#why-us", label: "Best Packers and Movers in Sagar" },
  { href: "#coverage", label: "House Shifting in Makronia & Rajakhedi" },
  { href: "#coverage", label: "Packers Movers Bina, Khurai, Damoh, Rehli, Banda" },
  { href: "#coverage", label: "Sagar to Bhopal & Vidisha Transport" },
  { href: "/contact", label: "Contact Us — Call or WhatsApp" },
];

export default function Footer() {
  const a = site.address;
  return (
    <footer className="bg-navy-dark text-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-white">{site.name}</p>
          <p className="text-sm">{site.nameHindi}</p>
          <p className="mt-3 text-sm">
            Safe, fast &amp; budget-friendly packers and movers in Sagar, MP and across
            India.
          </p>
        </div>

        <div>
          <p className="font-bold text-white">Contact</p>
          <address className="mt-3 space-y-2 text-sm not-italic">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {a.street}, {a.locality}, {a.region} {a.postalCode}, India
              </span>
            </p>
            <p>
              <a href={telHref} className="flex items-center gap-2 font-bold text-white hover:text-accent">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </p>
            {allPhones.slice(1).map((phone) => (
              <p key={phone.intl}>
                <a href={`tel:+${phone.intl}`} className="flex items-center gap-2 font-bold text-white hover:text-accent">
                  <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                  {phone.display}
                </a>
              </p>
            ))}
            <p>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                WhatsApp chat
              </a>
            </p>
            <p>Open 24/7 for bookings</p>
          </address>
        </div>

        <nav aria-label="Footer">
          <p className="font-bold text-white">Popular Searches</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                {l.href.startsWith("/") ? (
                  <Link href={l.href} className="hover:text-accent">
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className="hover:text-accent">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
