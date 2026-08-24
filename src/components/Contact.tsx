import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = (): Errors => {
    const err: Errors = {};
    if (values.name.trim().length < 2) err.name = "Zadejte prosím své jméno.";
    if (!/^(\+?\d[\d\s]{8,})$/.test(values.phone.trim()))
      err.phone = "Zadejte platné telefonní číslo, např. +420 776 035 726.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      err.email = "Zadejte platnou e-mailovou adresu.";
    if (values.message.trim().length < 10) err.message = "Popište prosím krátce, co potřebujete.";
    return err;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSent(true);
      setValues({ name: "", phone: "", email: "", message: "" });
    }
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <section id="kontakt" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Kontakt</p>
          <h2 className="mt-4 text-3xl sm:text-5xl">Nezávazná poptávka</h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Napište nám, co potřebujete. Ozveme se zpravidla týž den s termínem a cenou.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="border-border bg-card shadow-soft rounded-3xl border p-6 sm:p-8">
              {sent && (
                <p
                  role="status"
                  className="bg-secondary text-secondary-foreground mb-6 flex items-start gap-3 rounded-2xl px-4 py-3 font-semibold"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0" size={20} aria-hidden="true" />
                  Děkujeme, poptávku máme. Ozveme se vám telefonicky, obvykle do 24 hodin.
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold">Jméno a příjmení</label>
                  <input id="name" name="name" value={values.name} onChange={set("name")} className={inputClass} autoComplete="name" />
                  {errors.name && <p className="text-destructive mt-2 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold">Telefon</label>
                  <input id="phone" name="phone" type="tel" value={values.phone} onChange={set("phone")} className={inputClass} autoComplete="tel" />
                  {errors.phone && <p className="text-destructive mt-2 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className="mb-2 block font-semibold">E-mail</label>
                <input id="email" name="email" type="email" value={values.email} onChange={set("email")} className={inputClass} autoComplete="email" />
                {errors.email && <p className="text-destructive mt-2 text-sm">{errors.email}</p>}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block font-semibold">Popis práce</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  placeholder="Např. posekat 800 m² trávníku a zastřihnout 30 m živého plotu ve Staré Boleslavi."
                  className={inputClass}
                />
                {errors.message && <p className="text-destructive mt-2 text-sm">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-base btn-primary mt-7 w-full sm:w-auto">
                Odeslat poptávku
              </button>
              <p className="text-muted-foreground mt-4 text-sm">
                Údaje použijeme pouze pro vyřízení vaší poptávky.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-secondary h-full rounded-3xl p-7 sm:p-8">
              <h3 className="text-2xl">Spojte se s námi</h3>
              <ul className="mt-7 space-y-6">
                <li className="flex gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold">Telefon</span>
                    <a href={site.phoneHref} className="text-primary hover:underline">{site.phone}</a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold">E-mail</span>
                    <a href={`mailto:${site.email}`} className="text-primary break-all hover:underline">
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold">Oblast působení</span>
                    <span className="text-muted-foreground">{site.areaLong}</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Clock className="text-primary mt-1 shrink-0" size={22} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-semibold">Kdy pracujeme</span>
                    <span className="text-muted-foreground">Po–So 7:00–19:00, telefon bereme i po pracovní době.</span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
