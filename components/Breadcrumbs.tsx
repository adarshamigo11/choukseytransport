import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 px-4 py-3">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 text-sm text-slate-600">
        <li className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-1 hover:text-accent" aria-label="Home">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            {idx === items.length - 1 ? (
              <span className="font-semibold text-navy" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-accent">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
