import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as ArrowDown, C as Clock, D as Brush, E as CalendarCheck, O as Axe, S as Fence, T as CalendarClock, _ as Menu, a as Truck, b as Leaf, c as SquareStack, d as Scissors, f as Recycle, g as Package, h as PaintRoller, i as UsersRound, k as Award, l as Sprout, m as PhoneCall, n as Wrench, o as TreeDeciduous, p as Phone, r as Users, s as Trash2, t as X, u as Shovel, v as MapPin, w as CircleCheck, x as Hammer, y as Mail } from "../_libs/lucide-react.mjs";
import { a as motion, i as useScroll, n as useReducedMotion, r as useTransform, t as useInView } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CheiqDH1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Textová značka PMP služby.
* Až bude dodáno obrázkové logo, stačí nahradit obsah této komponenty.
*/
function Logo({ variant = "dark", className = "" }) {
	const main = variant === "light" ? "text-primary-foreground" : "text-primary";
	const sub = variant === "light" ? "text-primary-foreground/80" : "text-muted-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-baseline gap-1.5 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-display text-2xl leading-none font-extrabold tracking-tight sm:text-3xl ${main}`,
			children: "PMP"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `text-base leading-none font-light tracking-wide sm:text-lg ${sub}`,
			children: "služby"
		})]
	});
}
var site = {
	name: "PMP služby",
	ico: "22467815",
	phone: "+420 777 123 456",
	phoneHref: "tel:+420777123456",
	email: "info@pmpsluzby.cz",
	area: "Stará Boleslav, Praha a Středočeský kraj",
	areaLong: "Stará Boleslav, Brandýs nad Labem, Praha a celý Středočeský kraj – po dohodě dojedeme skoro kamkoli.",
	workers: 20,
	years: 12,
	jobs: 850
};
var sections = [
	{
		id: "o-nas",
		label: "O nás"
	},
	{
		id: "sluzby",
		label: "Služby"
	},
	{
		id: "jak-to-funguje",
		label: "Jak to funguje"
	},
	{
		id: "realizace",
		label: "Realizace"
	},
	{
		id: "kontakt",
		label: "Kontakt"
	}
];
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-soft backdrop-blur py-2" : "bg-transparent py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#hero",
					"aria-label": "PMP služby – domovská stránka",
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { variant: scrolled || open ? "dark" : "light" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Hlavní navigace",
					className: "hidden items-center gap-7 lg:flex",
					children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${s.id}`,
						className: `text-sm font-semibold transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"}`,
						children: s.label
					}, s.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "btn-base btn-primary px-5 py-2.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 16,
								"aria-hidden": "true"
							}),
							" ",
							site.phone
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-label": open ? "Zavřít menu" : "Otevřít menu",
					"aria-expanded": open,
					className: `shrink-0 rounded-full p-2 lg:hidden ${scrolled || open ? "text-foreground" : "text-primary-foreground"}`,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 26 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 26 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Mobilní navigace",
			className: "bg-background shadow-soft mx-5 mt-3 rounded-2xl p-4 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${s.id}`,
					onClick: () => setOpen(false),
					className: "text-foreground hover:text-primary block border-b border-border/70 py-3 font-semibold",
					children: s.label
				}) }, s.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: site.phoneHref,
				className: "btn-base btn-primary mt-4 w-full",
				onClick: () => setOpen(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						size: 18,
						"aria-hidden": "true"
					}),
					" ",
					site.phone
				]
			})]
		})]
	});
}
var hero_zahrada_default = "/assets/hero-zahrada-CQ9SUs-x.jpg";
function Hero() {
	const reduce = useReducedMotion();
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 140]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hero",
		className: "relative flex min-h-screen items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y },
				className: "absolute inset-0 -top-24 -bottom-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_zahrada_default,
					alt: "Upravená zahrada s posekaným trávníkem a zastřiženými živými ploty",
					width: 1920,
					height: 1080,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-primary-dark/75 absolute inset-0",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-5xl px-5 pt-28 pb-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: reduce ? { opacity: 1 } : {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "text-primary-foreground/85 text-sm font-semibold tracking-[0.2em] uppercase",
						children: site.area
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: reduce ? { opacity: 1 } : {
							opacity: 0,
							y: 26
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .12,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "text-primary-foreground mt-5 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl",
						children: "Zahradnické a údržbářské práce"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: reduce ? { opacity: 1 } : {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .26
						},
						className: "text-primary-foreground/90 mx-auto mt-6 max-w-2xl text-lg sm:text-xl",
						children: [
							"Posekáme trávník, zastřihneme živý plot, postavíme plot i terasu, vymalujeme, vyklidíme a odvezeme odpad. Zvládneme skoro vše, co se týče práce rukama – s týmem",
							" ",
							site.workers,
							" lidí i ve krátkém termínu."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: reduce ? { opacity: 1 } : {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .4
						},
						className: "mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: site.phoneHref,
							className: "btn-base btn-primary w-full sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 18,
								"aria-hidden": "true"
							}), " Zavolat"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#kontakt",
							className: "btn-base btn-on-dark w-full sm:w-auto",
							children: ["Nezávazná poptávka ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								size: 18,
								"aria-hidden": "true"
							})]
						})]
					})
				]
			})
		]
	});
}
function Counter({ to, suffix = "" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .5
	});
	const reduce = useReducedMotion();
	const [value, setValue] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduce) {
			setValue(to);
			return;
		}
		const duration = 1400;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(to * eased));
			if (p < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		reduce,
		to
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [value, suffix]
	});
}
function Reveal({ children, delay = 0, className = "" }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? { opacity: 1 } : {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
var reasons = [
	{
		icon: Users,
		title: "Silný tým a vlastní technika",
		text: "Máme 20 vyškolených pracovníků a vlastní stroje – od profesionálních sekaček a plotostřihů po štěpkovač a přívěsy na odvoz odpadu."
	},
	{
		icon: CalendarCheck,
		title: "Práce načas",
		text: "Termín potvrdíme telefonicky a dodržíme ho. Díky kapacitě týmu zvládneme i velké zakázky během několika dnů."
	},
	{
		icon: Award,
		title: "Zkušenosti a férová cena",
		text: `Za ${site.years} let jsme dokončili přes ${site.jobs} zakázek pro rodiny, obce i firmy. Cenu řekneme dopředu, bez skrytých poplatků.`
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "o-nas",
		className: "section-pad bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-bold tracking-[0.2em] uppercase",
							children: "O nás"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl sm:text-5xl",
							children: "Zavedená firma, která práci dotáhne do konce"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mt-6 text-lg",
							children: [
								"PMP služby jsou zavedená firma se stálým týmem ",
								site.workers,
								" profesionálních pracovníků. Staráme se o zahrady u domů, pozemky obcí i areály firem a k tomu zajistíme běžnou údržbu a drobné stavební práce. Pracujeme v oblasti",
								" ",
								site.areaLong,
								" Díky velikosti týmu a vlastní technice zvládneme i rozsáhlé zakázky v krátkých termínech – a vždy s cenou, kterou znáte předem."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-secondary shadow-soft grid gap-8 rounded-3xl px-6 py-10 sm:grid-cols-3 sm:px-10",
						children: [
							{
								value: site.workers,
								suffix: "",
								label: "pracovníků v týmu"
							},
							{
								value: site.years,
								suffix: "",
								label: "let na trhu"
							},
							{
								value: site.jobs,
								suffix: "+",
								label: "dokončených zakázek"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-primary text-5xl font-extrabold sm:text-6xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-secondary-foreground mt-2 font-semibold",
								children: s.label
							})]
						}, s.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08 * i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-border bg-card h-full rounded-3xl border p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-accent text-accent-foreground mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, {
										size: 24,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl",
									children: r.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground mt-3",
									children: r.text
								})
							]
						})
					}, r.title))
				})
			]
		})
	});
}
var zahrada = [
	{
		icon: Sprout,
		title: "Sekání a údržba trávníku",
		text: "Jednorázově i pravidelně po celou sezónu, včetně vyžínání okrajů."
	},
	{
		icon: Scissors,
		title: "Stříhání živých plotů",
		text: "Tvarování tújí, ptačího zobu i vysokých plotů z plošiny."
	},
	{
		icon: TreeDeciduous,
		title: "Řez a kácení dřevin",
		text: "Zdravotní a bezpečnostní řez, kácení stromů i v obtížném terénu."
	},
	{
		icon: Shovel,
		title: "Výsadba",
		text: "Stromy, keře, trvalky a živé ploty včetně přípravy půdy."
	},
	{
		icon: Leaf,
		title: "Úklid listí",
		text: "Podzimní vyčištění trávníku, záhonů i okapů od listí."
	},
	{
		icon: Axe,
		title: "Štěpkování větví",
		text: "Vlastní štěpkovač – z hromady větví zbyde použitelná štěpka."
	},
	{
		icon: SquareStack,
		title: "Zakládání trávníku",
		text: "Setí i pokládka travního koberce s úpravou terénu."
	},
	{
		icon: Truck,
		title: "Odvoz zeleného odpadu",
		text: "Naložíme a zlikvidujeme trávu, větve i listí."
	}
];
var ostatni = [
	{
		icon: Hammer,
		title: "Drobné zednické práce",
		text: "Vyzdívky, omítky, spárování, opravy schodů a soklů."
	},
	{
		icon: PaintRoller,
		title: "Malování",
		text: "Malby interiérů i fasád včetně zakrytí a úklidu po práci."
	},
	{
		icon: Package,
		title: "Montáž nábytku",
		text: "Skříně, kuchyně, postele i zahradní nábytek smontujeme a ukotvíme."
	},
	{
		icon: Fence,
		title: "Stavba a opravy plotů",
		text: "Pletivo, dřevěné i systémové ploty, betonování sloupků."
	},
	{
		icon: Brush,
		title: "Terasy a dřevěné konstrukce",
		text: "Dřevěné terasy, pergoly, přístřešky a jejich renovace."
	},
	{
		icon: Trash2,
		title: "Vyklízení a úklid",
		text: "Vyklidíme sklepy, garáže, půdy i celé domy a uklidíme po sobě."
	},
	{
		icon: Recycle,
		title: "Odvoz odpadu",
		text: "Odvoz stavebního i objemného odpadu na sběrný dvůr."
	},
	{
		icon: Wrench,
		title: "Drobné opravy v domě",
		text: "Kliky, kapající kohoutky, police, prahy – hodinový manžel s týmem."
	}
];
function Cards({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .04 * i,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-border bg-card hover:shadow-lift h-full rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary mb-4 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
							size: 26,
							"aria-hidden": "true"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-extrabold",
						children: it.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-2 text-sm",
						children: it.text
					})
				]
			})
		}, it.title))
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sluzby",
		className: "section-pad bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-bold tracking-[0.2em] uppercase",
							children: "Služby"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-3xl sm:text-5xl",
							children: "Co pro vás zajistíme"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-5 text-lg",
							children: "Nabídku dělíme na zahradu a ostatní ruční práce. Pokud něco v seznamu nenajdete, zavolejte – většinou to zvládneme také."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl",
						children: "Zahrada"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, { items: zahrada })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl sm:text-3xl",
						children: "Ostatní práce"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cards, { items: ostatni })]
				})
			]
		})
	});
}
var steps = [
	{
		icon: PhoneCall,
		title: "Zavoláte nebo napíšete",
		text: "Řeknete nám, co potřebujete – stačí pár vět nebo fotka pozemku. Ozveme se zpravidla týž den."
	},
	{
		icon: CalendarClock,
		title: "Domluvíme termín a cenu",
		text: "Práci nacením dopředu a potvrdíme datum. Žádné skryté poplatky ani dodatečné navyšování."
	},
	{
		icon: UsersRound,
		title: "Pošleme tým a odvedeme práci",
		text: "Přijedeme s vlastní technikou, práci dokončíme v termínu a po sobě uklidíme včetně odvozu odpadu."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "jak-to-funguje",
		className: "section-pad bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-primary text-sm font-bold tracking-[0.2em] uppercase",
					children: "Jak to funguje"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-3xl sm:text-5xl",
					children: "Tři kroky k hotové práci"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-border bg-card h-full list-none rounded-3xl border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-primary text-primary-foreground font-display grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg font-extrabold",
									children: i + 1
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "text-primary shrink-0",
									size: 26,
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3",
								children: s.text
							})
						]
					})
				}, s.title))
			})]
		})
	});
}
var photos = [
	{
		src: "/assets/real-1-CtuQ5J9x.jpg",
		alt: "Pracovník PMP služby seká trávník profesionální sekačkou u rodinného domu"
	},
	{
		src: "/assets/real-2-D31RHYsJ.jpg",
		alt: "Zastřižený vysoký živý plot z tújí po úpravě naším týmem"
	},
	{
		src: "/assets/real-3-D14IiBdR.jpg",
		alt: "Nově postavený dřevěný plot okolo zahrady rodinného domu"
	},
	{
		src: "/assets/real-4-ByiISnvQ.jpg",
		alt: "Stavba dřevěné terasy na zahradě během realizace"
	},
	{
		src: "/assets/real-5-B3uWGwfH.jpg",
		alt: "Podzimní úklid listí na zahradě a připravené pytle k odvozu"
	},
	{
		src: "/assets/real-6-COHkUiik.jpg",
		alt: "Řez vzrostlého stromu s motorovou pilou a štěpkování větví"
	}
];
function Gallery() {
	const [open, setOpen] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(null);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "realizace",
		className: "section-pad bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-sm font-bold tracking-[0.2em] uppercase",
						children: "Realizace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl sm:text-5xl",
						children: "Ukázky z naší práce"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-5 text-lg",
						children: "Vybrané zahrady, ploty a terasy, které jsme dokončili. Kliknutím fotku zvětšíte."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: photos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05 * i,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(i),
						className: "shadow-soft hover:shadow-lift group block w-full overflow-hidden rounded-2xl",
						"aria-label": `Zvětšit fotku: ${p.alt}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.src,
							alt: p.alt,
							loading: "lazy",
							width: 1024,
							height: 768,
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					})
				}, p.src))
			})]
		}), open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Zvětšená fotografie realizace",
			onClick: () => setOpen(null),
			className: "bg-primary-dark/90 fixed inset-0 z-[60] flex items-center justify-center p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setOpen(null),
				"aria-label": "Zavřít",
				className: "text-primary-foreground absolute top-5 right-5 rounded-full p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photos[open].src,
				alt: photos[open].alt,
				className: "max-h-[85vh] w-auto max-w-full rounded-2xl object-contain",
				onClick: (e) => e.stopPropagation()
			})]
		})]
	});
}
function CtaBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary-dark py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-4xl px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-primary-foreground text-3xl sm:text-4xl",
					children: "Potřebujete práci hotovou rychle?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-primary-foreground/85 mx-auto mt-4 max-w-2xl text-lg",
					children: [
						"Máme kapacitu ",
						site.workers,
						" pracovníků a vlastní techniku. Zavolejte a termín domluvíme hned."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.phoneHref,
						className: "btn-base btn-primary w-full sm:w-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								size: 18,
								"aria-hidden": "true"
							}),
							" ",
							site.phone
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#kontakt",
						className: "btn-base btn-on-dark w-full sm:w-auto",
						children: "Napsat poptávku"
					})]
				})
			]
		})
	});
}
function Contact() {
	const [values, setValues] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const set = (key) => (e) => setValues((v) => ({
		...v,
		[key]: e.target.value
	}));
	const validate = () => {
		const err = {};
		if (values.name.trim().length < 2) err.name = "Zadejte prosím své jméno.";
		if (!/^(\+?\d[\d\s]{8,})$/.test(values.phone.trim())) err.phone = "Zadejte platné telefonní číslo, např. +420 776 035 726.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) err.email = "Zadejte platnou e-mailovou adresu.";
		if (values.message.trim().length < 10) err.message = "Popište prosím krátce, co potřebujete.";
		return err;
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const err = validate();
		setErrors(err);
		if (Object.keys(err).length === 0) {
			setSent(true);
			setValues({
				name: "",
				phone: "",
				email: "",
				message: ""
			});
		}
	};
	const inputClass = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontakt",
		className: "section-pad bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-primary text-sm font-bold tracking-[0.2em] uppercase",
						children: "Kontakt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-3xl sm:text-5xl",
						children: "Nezávazná poptávka"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-5 text-lg",
						children: "Napište nám, co potřebujete. Ozveme se zpravidla týž den s termínem a cenou."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "border-border bg-card shadow-soft rounded-3xl border p-6 sm:p-8",
					children: [
						sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							role: "status",
							className: "bg-secondary text-secondary-foreground mb-6 flex items-start gap-3 rounded-2xl px-4 py-3 font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "mt-0.5 shrink-0",
								size: 20,
								"aria-hidden": "true"
							}), "Děkujeme, poptávku máme. Ozveme se vám telefonicky, obvykle do 24 hodin."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "name",
									className: "mb-2 block font-semibold",
									children: "Jméno a příjmení"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "name",
									name: "name",
									value: values.name,
									onChange: set("name"),
									className: inputClass,
									autoComplete: "name"
								}),
								errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-destructive mt-2 text-sm",
									children: errors.name
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "phone",
									className: "mb-2 block font-semibold",
									children: "Telefon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "phone",
									name: "phone",
									type: "tel",
									value: values.phone,
									onChange: set("phone"),
									className: inputClass,
									autoComplete: "tel"
								}),
								errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-destructive mt-2 text-sm",
									children: errors.phone
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "email",
									className: "mb-2 block font-semibold",
									children: "E-mail"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "email",
									name: "email",
									type: "email",
									value: values.email,
									onChange: set("email"),
									className: inputClass,
									autoComplete: "email"
								}),
								errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-destructive mt-2 text-sm",
									children: errors.email
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "mb-2 block font-semibold",
									children: "Popis práce"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 5,
									value: values.message,
									onChange: set("message"),
									placeholder: "Např. posekat 800 m² trávníku a zastřihnout 30 m živého plotu ve Staré Boleslavi.",
									className: inputClass
								}),
								errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-destructive mt-2 text-sm",
									children: errors.message
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-base btn-primary mt-7 w-full sm:w-auto",
							children: "Odeslat poptávku"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-4 text-sm",
							children: "Údaje použijeme pouze pro vyřízení vaší poptávky."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-secondary h-full rounded-3xl p-7 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl",
							children: "Spojte se s námi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-7 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "text-primary mt-1 shrink-0",
										size: 22,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: "Telefon"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: site.phoneHref,
											className: "text-primary hover:underline",
											children: site.phone
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "text-primary mt-1 shrink-0",
										size: 22,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: "E-mail"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${site.email}`,
											className: "text-primary break-all hover:underline",
											children: site.email
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "text-primary mt-1 shrink-0",
										size: 22,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: "Oblast působení"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: site.areaLong
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
										className: "text-primary mt-1 shrink-0",
										size: 22,
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block font-semibold",
											children: "Kdy pracujeme"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Po–So 7:00–19:00, telefon bereme i po pracovní době."
										})]
									})]
								})
							]
						})]
					})
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-background border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-4 max-w-xs text-sm",
						children: ["Zahradnické a údržbářské práce pro domácnosti, obce i firmy. ", site.areaLong]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-4 text-sm",
						children: ["IČO: ", site.ico]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Odkazy na sekce",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base",
						children: "Sekce"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${s.id}`,
							className: "text-muted-foreground hover:text-primary",
							children: s.label
						}) }, s.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base",
					children: "Kontakt"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: site.phoneHref,
							className: "text-muted-foreground hover:text-primary",
							children: site.phone
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "text-muted-foreground hover:text-primary",
							children: site.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-muted-foreground",
							children: "pmpsluzby.cz"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground mx-auto max-w-6xl px-5 py-6 text-sm",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					site.name,
					" · IČO ",
					site.ico,
					" · Všechna práva vyhrazena."
				]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
