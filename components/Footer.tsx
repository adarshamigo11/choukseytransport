import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { site, telHref, waHref, allPhones } from "@/lib/site";

const serviceLinks = [
  { href: "/packers-and-movers", label: "Packers and Movers in Sagar" },
  { href: "/house-shifting", label: "House Shifting in Sagar" },
  { href: "/office-shifting", label: "Office Shifting in Sagar" },
  { href: "/local-shifting", label: "Local Shifting in Sagar" },
  { href: "/domestic-relocation", label: "Domestic Relocation from Sagar" },
  { href: "/car-transportation", label: "Car Transportation from Sagar" },
  { href: "/bike-transportation", label: "Bike Transportation from Sagar" },
  { href: "/commercial-transportation", label: "Commercial Transport in Sagar" },
  { href: "/packing-unpacking", label: "Packing and Unpacking in Sagar" },
];

const areaLinks = [
  { href: "/packers-and-movers", label: "Packers Movers Makronia" },
  { href: "/packers-and-movers", label: "Packers Movers Bina" },
  { href: "/packers-and-movers", label: "Packers Movers Khurai" },
  { href: "/packers-and-movers", label: "Packers Movers Damoh" },
  { href: "/packers-and-movers", label: "Packers Movers Rehli" },
  { href: "/packers-and-movers", label: "Packers Movers Banda" },
  { href: "/domestic-relocation", label: "Sagar to Bhopal Transport" },
  { href: "/domestic-relocation", label: "Sagar to Vidisha Transport" },
];

export default function Footer() {
  const a = site.address;
  return (
    <footer className="bg-navy-dark text-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
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

        <nav aria-label="Our Services">
          <p className="font-bold text-white">Our Services</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Areas We Serve">
          <p className="font-bold text-white">Areas We Serve</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {areaLinks.map((l, idx) => (
              <li key={`${l.label}-${idx}`}>
                <Link href={l.href} className="hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="font-bold text-accent hover:text-white">
                Contact Us — Call or WhatsApp
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved. |{" "}
        <Link href="/" className="hover:text-accent">Packers and Movers in Sagar</Link> |{" "}
        <Link href="/about-us" className="hover:text-accent">About Us</Link>
      </div>
    </footer>
  );
}
