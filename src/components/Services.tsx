import {
  Axe,
  Brush,
  Fence,
  Hammer,
  Leaf,
  PaintRoller,
  Recycle,
  Scissors,
  Shovel,
  Sprout,
  Trash2,
  TreeDeciduous,
  Truck,
  Wrench,
  Package,
  SquareStack,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Item = { icon: LucideIcon; title: string; text: string };

const zahrada: Item[] = [
  { icon: Sprout, title: "Sekání a údržba trávníku", text: "Jednorázově i pravidelně po celou sezónu, včetně vyžínání okrajů." },
  { icon: Scissors, title: "Stříhání živých plotů", text: "Tvarování tújí, ptačího zobu i vysokých plotů z plošiny." },
  { icon: TreeDeciduous, title: "Řez a kácení dřevin", text: "Zdravotní a bezpečnostní řez, kácení stromů i v obtížném terénu." },
  { icon: Shovel, title: "Výsadba", text: "Stromy, keře, trvalky a živé ploty včetně přípravy půdy." },
  { icon: Leaf, title: "Úklid listí", text: "Podzimní vyčištění trávníku, záhonů i okapů od listí." },
  { icon: Axe, title: "Štěpkování větví", text: "Vlastní štěpkovač – z hromady větví zbyde použitelná štěpka." },
  { icon: SquareStack, title: "Zakládání trávníku", text: "Setí i pokládka travního koberce s úpravou terénu." },
  { icon: Truck, title: "Odvoz zeleného odpadu", text: "Naložíme a zlikvidujeme trávu, větve i listí." },
];

const ostatni: Item[] = [
  { icon: Hammer, title: "Drobné zednické práce", text: "Vyzdívky, omítky, spárování, opravy schodů a soklů." },
  { icon: PaintRoller, title: "Malování", text: "Malby interiérů i fasád včetně zakrytí a úklidu po práci." },
  { icon: Package, title: "Montáž nábytku", text: "Skříně, kuchyně, postele i zahradní nábytek smontujeme a ukotvíme." },
  { icon: Fence, title: "Stavba a opravy plotů", text: "Pletivo, dřevěné i systémové ploty, betonování sloupků." },
  { icon: Brush, title: "Terasy a dřevěné konstrukce", text: "Dřevěné terasy, pergoly, přístřešky a jejich renovace." },
  { icon: Trash2, title: "Vyklízení a úklid", text: "Vyklidíme sklepy, garáže, půdy i celé domy a uklidíme po sobě." },
  { icon: Recycle, title: "Odvoz odpadu", text: "Odvoz stavebního i objemného odpadu na sběrný dvůr." },
  { icon: Wrench, title: "Drobné opravy v domě", text: "Kliky, kapající kohoutky, police, prahy – hodinový manžel s týmem." },
];

function Cards({ items }: { items: Item[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={0.04 * i}>
          <article className="border-border bg-card hover:shadow-lift h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5">
            <span className="text-primary mb-4 inline-flex">
              <it.icon size={26} aria-hidden="true" />
            </span>
            <h4 className="font-display text-lg font-extrabold">{it.title}</h4>
            <p className="text-muted-foreground mt-2 text-sm">{it.text}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function Services() {
  return (
    <section id="sluzby" className="section-pad bg-secondary">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Služby</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Co pro vás zajistíme</h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Nabídku dělíme na zahradu a ostatní ruční práce. Pokud něco v seznamu nenajdete,
            zavolejte – většinou to zvládneme také.
          </p>
        </Reveal>

        <div className="mt-14">
          <h3 className="text-2xl sm:text-3xl">Zahrada</h3>
          <Cards items={zahrada} />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl">Ostatní práce</h3>
          <Cards items={ostatni} />
        </div>
      </div>
    </section>
  );
}
