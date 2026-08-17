import { Logo } from "./Logo";
import { sections, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo />
          <p className="text-muted-foreground mt-4 max-w-xs text-sm">
            Zahradnické a údržbářské práce pro domácnosti, obce i firmy. {site.areaLong}
          </p>
          <p className="text-muted-foreground mt-4 text-sm">IČO: {site.ico}</p>
        </div>

        <nav aria-label="Odkazy na sekce">
          <h3 className="text-base">Sekce</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-base">Kontakt</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.phoneHref} className="text-muted-foreground hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="text-muted-foreground">pmpsluzby.cz</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="text-muted-foreground mx-auto max-w-6xl px-5 py-6 text-sm">
          © {new Date().getFullYear()} {site.name} · IČO {site.ico} · Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}
