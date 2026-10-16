import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";

export default function CallButton({
  label = "Call Now for Instant Quote",
  className = "",
  pulse = false,
  size = "lg",
}: {
  label?: string;
  className?: string;
  pulse?: boolean;
  size?: "sm" | "lg";
}) {
  const pad = size === "lg" ? "px-6 py-4 text-lg" : "px-4 py-2.5 text-sm";
  return (
    <a
      href={telHref}
      aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-accent font-bold text-white shadow-lg transition hover:bg-accent-strong active:scale-[0.98] ${pad} ${
        pulse ? "animate-pulseRing" : ""
      } ${className}`}
    >
      <Phone className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      {label}
    </a>
  );
}
