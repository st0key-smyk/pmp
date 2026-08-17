import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-primary-dark py-16 sm:py-20">
      <Reveal className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-primary-foreground text-3xl sm:text-4xl">
          Potřebujete práci hotovou rychle?
        </h2>
        <p className="text-primary-foreground/85 mx-auto mt-4 max-w-2xl text-lg">
          Máme kapacitu {site.workers} pracovníků a vlastní techniku. Zavolejte a termín
          domluvíme hned.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={site.phoneHref} className="btn-base btn-primary w-full sm:w-auto">
            <Phone size={18} aria-hidden="true" /> {site.phone}
          </a>
          <a href="#kontakt" className="btn-base btn-on-dark w-full sm:w-auto">
            Napsat poptávku
          </a>
        </div>
      </Reveal>
    </section>
  );
}
