import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import img1 from "@/assets/real-1.jpg";
import img2 from "@/assets/real-2.jpg";
import img3 from "@/assets/real-3.jpg";
import img4 from "@/assets/real-4.jpg";
import img5 from "@/assets/real-5.jpg";
import img6 from "@/assets/real-6.jpg";

const photos = [
  { src: img1, alt: "Pracovník PMP služby seká trávník profesionální sekačkou u rodinného domu" },
  { src: img2, alt: "Zastřižený vysoký živý plot z tújí po úpravě naším týmem" },
  { src: img3, alt: "Nově postavený dřevěný plot okolo zahrady rodinného domu" },
  { src: img4, alt: "Stavba dřevěné terasy na zahradě během realizace" },
  { src: img5, alt: "Podzimní úklid listí na zahradě a připravené pytle k odvozu" },
  { src: img6, alt: "Řez vzrostlého stromu s motorovou pilou a štěpkování větví" },
];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="realizace" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Realizace</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Ukázky z naší práce</h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Vybrané zahrady, ploty a terasy, které jsme dokončili. Kliknutím fotku zvětšíte.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal key={p.src} delay={0.05 * i}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="shadow-soft hover:shadow-lift group block w-full overflow-hidden rounded-2xl"
                aria-label={`Zvětšit fotku: ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Zvětšená fotografie realizace"
          onClick={() => setOpen(null)}
          className="bg-primary-dark/90 fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Zavřít"
            className="text-primary-foreground absolute top-5 right-5 rounded-full p-2"
          >
            <X size={28} />
          </button>
          <img
            src={photos[open]!.src}
            alt={photos[open]!.alt}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
