import { MessageCircle, Phone } from "lucide-react";
import { telHref, waHref, allPhones } from "@/lib/site";

/** Persistent bottom bar — mobile only (hidden from md up). */
export default function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-accent bg-navy shadow-[0_-8px_24px_rgba(0,0,0,0.25)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <p className="flex items-center justify-center gap-2 pt-1.5 text-[11px] font-semibold text-white">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        24/7 Available for Booking
      </p>
      <div className="grid grid-cols-5 gap-2 p-2">
        <a
          href={`tel:+${allPhones[0].intl}`}
          aria-label={`Call ${allPhones[0].display}`}
          className="col-span-3 flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-base font-extrabold text-white active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp (opens in new tab)"
          className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-[#1B5E20] py-3 text-base font-extrabold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
      <div className="grid grid-cols-2 gap-2 px-2 pb-2">
        <a
          href={`tel:+${allPhones[1].intl}`}
          aria-label={`Call ${allPhones[1].display}`}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-accent/80 py-2 text-xs font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {allPhones[1].display}
        </a>
        <a
          href={`tel:+${allPhones[2].intl}`}
          aria-label={`Call ${allPhones[2].display}`}
          className="flex items-center justify-center gap-1.5 rounded-lg bg-accent/80 py-2 text-xs font-bold text-white active:scale-[0.98]"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {allPhones[2].display}
        </a>
      </div>
    </div>
  );
}
