import { MessageCircle } from "lucide-react";
import CallButton from "./CallButton";
import { site, waHref } from "@/lib/site";

/** Reusable click-to-call micro-prompt placed between sections. */
export default function CallPrompt({
  heading,
  sub,
}: {
  heading: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-navy px-5 py-6 text-center text-white shadow-lg sm:px-8">
      <p className="text-lg font-extrabold sm:text-xl">{heading}</p>
      {sub && <p className="mt-1 text-sm text-white/80">{sub}</p>}
      <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <CallButton label={`Call ${site.phoneDisplay}`} className="w-full sm:w-auto" />
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-4 text-lg font-bold text-white hover:bg-white/10 sm:w-auto"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
