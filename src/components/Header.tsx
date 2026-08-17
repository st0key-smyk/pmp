import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { sections, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-soft backdrop-blur py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#hero" aria-label="PMP služby – domovská stránka" className="min-w-0">
          <Logo variant={scrolled || open ? "dark" : "light"} />
        </a>

        <nav aria-label="Hlavní navigace" className="hidden items-center gap-7 lg:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
          <a href={site.phoneHref} className="btn-base btn-primary px-5 py-2.5 text-sm">
            <Phone size={16} aria-hidden="true" /> {site.phone}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          className={`shrink-0 rounded-full p-2 lg:hidden ${
            scrolled || open ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobilní navigace"
          className="bg-background shadow-soft mx-5 mt-3 rounded-2xl p-4 lg:hidden"
        >
          <ul className="flex flex-col">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="text-foreground hover:text-primary block border-b border-border/70 py-3 font-semibold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="btn-base btn-primary mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            <Phone size={18} aria-hidden="true" /> {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
