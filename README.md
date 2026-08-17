# PMP Zahradnické Služby

Vytvoř one-page web pro českou firmu poskytující zahradnické a údržbářské služby.

Stack: React + Vite + TypeScript, Tailwind CSS, framer-motion pro animace, lucide-react

pro ikony. Veškerý text na webu v češtině, žádný lorem ipsum – piš reálné české texty.

FIRMA

- Název: PMP služby (domána pmpsluzby.cz)

- IČO: 22467815 (patří do footeru)

- Kontakt: telefon [DOPLŇ], e-mail [DOPLŇ]

- Oblast působení: [DOPLŇ – např. Brno a okolí do 30 km]

- Zavedená firma s týmem 20 profesionálních pracovníků – díky tomu zvládne i velké

  zakázky a krátké termíny. Pozice: kapacita, spolehlivost, férová cena bez skrytých

  poplatků. Mluv o firmě v množném čísle ("zajistíme", "náš tým"), nikdy jako o

  jednom člověku nebo živnostníkovi.

ZNAČKA (logo zatím nedodáno)

Místo loga použij v headeru i footeru textovou značku: velkým výrazným písmem "PMP"

a hned vedle menším, lehčím řezem "služby". Uděláš to jako samostatnou komponentu,

aby se dala později nahradit obrázkovým logem.

STRUKTURA (jedna stránka, plynulý scroll, sticky header s odkazy na sekce)

1. Hero – celá výška obrazovky, velký nadpis "Zahradnické a údržbářské práce",

   podtitulek o tom, že firma zvládne skoro vše, co se týče práce rukama,

   dvě CTA tlačítka: "Zavolat" (tel: odkaz) a "Nezávazná poptávka" (scroll na kontakt).

   Na pozadí fotka zeleně/zahrady s tmavým overlayem.

2. O nás – krátký odstavec o firmě + pás se třemi čísly (animovaně dopočítaná při

   scrollu): 20 pracovníků, [DOPLŇ] let na trhu, [DOPLŇ]+ dokončených zakázek.

   Pod tím 3 důvody proč nás zvolit (ikona + nadpis + věta): silný tým a vlastní

   technika, práce načas, zkušenosti.

3. Služby – dvě skupiny karet:

   ZAHRADA: sekání a údržba trávníku, stříhání živých plotů, řez a kácení dřevin,

   výsadba, úklid listí, štěpkování větví, zakládání trávníku, odvoz zeleného odpadu.

   OSTATNÍ PRÁCE: drobné zednické práce, malování, montáž nábytku, stavba a opravy plotů,

   terasy a dřevěné konstrukce, vyklízení a úklid, odvoz odpadu, drobné opravy v domě.

   Karty v gridu, na hover se lehce nadzvednou.

4. Jak to funguje – 3 kroky vedle sebe: 1) zavoláte nebo napíšete,

   2) domluvíme termín a cenu, 3) pošleme tým a odvedeme práci.

5. Realizace – galerie 6 placeholder fotek v mřížce, lightbox po kliknutí.

6. Kontakt – formulář (jméno, telefon, e-mail, popis práce) + vedle kontaktní údaje,

   telefon a e-mail jako klikatelné odkazy. Formulář zatím jen s validací

   a potvrzovací zprávou, backend neřeš.

7. Footer – textová značka PMP služby, IČO, kontakt, rok, odkazy na sekce.

DESIGN – zeleno-bílá

Bílá je základní pozadí, zelená hlavní barva značky (hluboká, přírodní zelená),

světle zelená jako pozadí střídajících se sekcí, tmavá antracitová na běžný text.

Zelené plné tlačítko jako hlavní CTA, bílé s zeleným rámem jako sekundární.

Hero a CTA pás mají tmavě zelené pozadí s bílým textem. Žádné další barvy.

Čistý, důvěryhodný vzhled, ne korporátní. Bezserifový font s výrazným nadpisovým řezem.

Velkorysé mezery mezi sekcemi, zaoblené rohy, jemné stíny. Mobile-first,

plně responzivní – na telefonu hamburger menu.

ANIMACE (střídmě, ne cirkus)

- Sekce a karty se při scrollu jemně objevují zdola (framer-motion whileInView, stagger).

- Hero: pozadí s lehkým parallaxem, nadpis se objeví po načtení.

- Čísla v sekci O nás se dopočítají, když se dostanou do viewportu.

- Sticky header se po odscrollování zmenší a dostane bílé pozadí se stínem.

- Smooth scroll na kotvy, hover efekty na tlačítkách a kartách.

- Respektuj prefers-reduced-motion.

SEO A DETAILY

Title a meta description v češtině s klíčovými slovy (zahradnické práce, sekání trávy,

údržba zahrad + [Stará Boleslav, Praha, Středočeský kraj ale skoro všude ). Sémantické HTML, alt texty u obrázků, favicon,

Open Graph tagy. Kód rozděl do komponent po sekcích, značku PMP jako <Logo />.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/435cbe95-7a28-4771-ba70-c8fe67f12d3d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
