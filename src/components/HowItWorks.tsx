import { PhoneCall, CalendarClock, Users2 } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: PhoneCall,
    title: "Zavoláte nebo napíšete",
    text: "Řeknete nám, co potřebujete – stačí pár vět nebo fotka pozemku. Ozveme se zpravidla týž den.",
  },
  {
    icon: CalendarClock,
    title: "Domluvíme termín a cenu",
    text: "Práci nacením dopředu a potvrdíme datum. Žádné skryté poplatky ani dodatečné navyšování.",
  },
  {
    icon: Users2,
    title: "Pošleme tým a odvedeme práci",
    text: "Přijedeme s vlastní technikou, práci dokončíme v termínu a po sobě uklidíme včetně odvozu odpadu.",
  },
];

export function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Jak to funguje
          </p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Tři kroky k hotové práci</h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.1 * i}>
              <li className="border-border bg-card h-full list-none rounded-3xl border p-8">
                <div className="flex items-center gap-4">
                  <span className="bg-primary text-primary-foreground font-display grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-extrabold">
                    {i + 1}
                  </span>
                  <s.icon className="text-primary shrink-0" size={26} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="text-muted-foreground mt-3">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
