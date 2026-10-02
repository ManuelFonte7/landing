import { brand } from "@/content";

// Nessuna animazione qui, quindi niente "use client": è un Server Component.
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md md:px-12">
      <a href="#top" className="text-xl font-semibold tracking-tight">
        {brand.name}
      </a>
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${brand.email}`}
          className="hidden text-sm opacity-70 transition hover:opacity-100 sm:block"
        >
          Contattaci
        </a>
        <a
          href={brand.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--fg)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-80"
        >
          Prenota una call
        </a>
      </div>
    </header>
  );
}
