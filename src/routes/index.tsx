import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/CtaBand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "PMP služby | Zahradnické a údržbářské práce – Stará Boleslav, Praha";
const description =
  "Zahradnické práce, sekání trávy, stříhání živých plotů a údržba zahrad ve Staré Boleslavi, Praze a Středočeském kraji. Tým 20 pracovníků, férová cena bez skrytých poplatků.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "PMP služby" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PMP služby",
          description,
          telephone: "+420776035726",
          email: "info@pmpsluzby.cz",
          url: "https://pmpsluzby.cz",
          areaServed: ["Stará Boleslav", "Brandýs nad Labem", "Praha", "Středočeský kraj"],
          identifier: "22467815",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Gallery />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
