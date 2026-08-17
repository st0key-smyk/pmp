import { CalendarCheck, Award, Users } from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: Users,
    title: "Silný tým a vlastní technika",
    text: "Máme 20 vyškolených pracovníků a vlastní stroje – od profesionálních sekaček a plotostřihů po štěpkovač a přívěsy na odvoz odpadu.",
  },
  {
    icon: CalendarCheck,
    title: "Práce načas",
    text: "Termín potvrdíme telefonicky a dodržíme ho. Díky kapacitě týmu zvládneme i velké zakázky během několika dnů.",
  },
  {
    icon: Award,
    title: "Zkušenosti a férová cena",
    text: `Za ${site.years} let jsme dokončili přes ${site.jobs} zakázek pro rodiny, obce i firmy. Cenu řekneme dopředu, bez skrytých poplatků.`,
  },
];

export function About() {
  return (
    <section id="o-nas" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">O nás</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">
            Zavedená firma, která práci dotáhne do konce
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            PMP služby jsou zavedená firma se stálým týmem {site.workers} profesionálních
            pracovníků. Staráme se o zahrady u domů, pozemky obcí i areály firem a k tomu
            zajistíme běžnou údržbu a drobné stavební práce. Pracujeme v oblasti{" "}
            {site.areaLong} Díky velikosti týmu a vlastní technice zvládneme i rozsáhlé zakázky
            v krátkých termínech – a vždy s cenou, kterou znáte předem.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <div className="bg-secondary shadow-soft grid gap-8 rounded-3xl px-6 py-10 sm:grid-cols-3 sm:px-10">
            {[
              { value: site.workers, suffix: "", label: "pracovníků v týmu" },
              { value: site.years, suffix: "", label: "let na trhu" },
              { value: site.jobs, suffix: "+", label: "dokončených zakázek" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-primary text-5xl font-extrabold sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-secondary-foreground mt-2 font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={0.08 * i}>
              <article className="border-border bg-card h-full rounded-3xl border p-7">
                <span className="bg-accent text-accent-foreground mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <r.icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-xl">{r.title}</h3>
                <p className="text-muted-foreground mt-3">{r.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
