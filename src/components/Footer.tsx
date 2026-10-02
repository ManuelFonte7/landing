import { brand } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="text-lg font-semibold">{brand.name}</p>
          <p className="mt-3 text-sm opacity-60">
            <a href={`mailto:${brand.email}`} className="hover:opacity-100">
              {brand.email}
            </a>
            <br />
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
          </p>
        </div>

        <ul className="flex gap-6 text-sm opacity-60">
          {brand.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 text-xs opacity-50 md:flex-row md:justify-between">
        <p>
          © {year} {brand.name} · P. IVA 00000000000 · Tutti i diritti riservati.
        </p>
        {/* Crea queste pagine (obbligatorie in Italia): /privacy-policy ecc. */}
        <p className="flex gap-4">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/termini-di-servizio">Termini di Servizio</a>
          <a href="/cookie-policy">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
}
