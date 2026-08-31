import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/capstone-hs-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Capstone HS Inc. — OEM Bag Manufacturing & Brand Licensing" },
      {
        name: "description",
        content:
          "Since 1987, Capstone HS Inc. has produced sports, outdoor and casual bags through OEM manufacturing, and holds exclusive licensing agentship for Santa Barbara Polo & Racquet Club in Korea and Vietnam.",
      },
      {
        property: "og:title",
        content: "Capstone HS Inc. — OEM Bag Manufacturing & Brand Licensing",
      },
      {
        property: "og:description",
        content:
          "Torrance, California and Ho Chi Minh City, Vietnam. OEM bag manufacturing and exclusive brand licensing agentship since 1987.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Licensing", href: "#licensing" },
  { label: "History", href: "#history" },
  { label: "Contact", href: "#contact" },
];

const TIMELINE = [
  {
    year: "1987",
    title: "HANSEI Co., Ltd. founded in Seoul",
    body: "Established as a purchasing and inspection agency serving international buyers.",
  },
  {
    year: "1993",
    title: "Reorganized as a corporation",
    body: "Formalized operations and expanded the sourcing and quality control team.",
  },
  {
    year: "1995",
    title: "Subcontract production begins",
    body: "First subcontract manufacturing programs in El Salvador and the Philippines.",
  },
  {
    year: "1998",
    title: "Indonesia operations",
    body: "Two company-operated factories opened in Indonesia.",
  },
  {
    year: "2000",
    title: "Vietnam factory",
    body: "Production established in Vietnam, close to key material suppliers.",
  },
  {
    year: "2002",
    title: "Qingdao, China",
    body: "A fourth facility opened in Qingdao to serve growing volume.",
  },
  {
    year: "2007",
    title: "Capstone HS, Inc. established in the U.S.",
    body: "A United States entity formed to work directly with North American brands.",
  },
  {
    year: "Today",
    title: "Torrance & Ho Chi Minh City",
    body: "Manufacturing runs through trusted subcontract factories, with sourcing, development and quality control managed directly by our own team.",
  },
];

const CAPABILITIES = [
  {
    n: "01",
    title: "Sourcing & Development",
    body: "Material sourcing, costing and sample development handled in-house across our supplier network in Asia.",
  },
  {
    n: "02",
    title: "OEM Production",
    body: "Sports, outdoor and casual bags built to your specification through vetted subcontract factories.",
  },
  {
    n: "03",
    title: "Quality Control",
    body: "In-line and final inspection managed by our own staff on the ground, not left to the factory.",
  },
  {
    n: "04",
    title: "Logistics & Export",
    body: "Documentation, consolidation and shipment coordination from Vietnam to your destination port.",
  },
];

const CLIENTS = [
  "Oakley",
  "OUTDOOR Products",
  "Liberty Mountain",
  "AmeriBag",
  "Singing Rock",
  "Shinsegae / E-mart",
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Capstone HS Inc."
              className="h-10 w-auto object-contain object-left"
              style={{ clipPath: "inset(0 0 36% 36%)", marginLeft: "-2.1rem" }}
            />
            <span className="font-display text-lg font-800 tracking-tight text-primary">
              Capstone HS <span className="text-steel">Inc.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
              Established 1987 · Torrance, CA · Ho Chi Minh City
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Manufacturing and brand
              <br />
              licensing, under one roof.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Capstone HS Inc. is a Torrance, California based company operating at the intersection
              of manufacturing and brand licensing. For decades our team has produced sports,
              outdoor and casual bags through OEM manufacturing, working with recognized
              international labels along the way — and we continue that work today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
              >
                Start a conversation
              </a>
              <a
                href="#manufacturing"
                className="inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Our capabilities
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:pt-2">
            <dl className="divide-y divide-border border-y border-border">
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-sm text-muted-foreground">Founded</dt>
                <dd className="font-display text-2xl font-bold text-primary">1987</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-sm text-muted-foreground">Offices</dt>
                <dd className="font-display text-2xl font-bold text-primary">US · VN</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-sm text-muted-foreground">Model</dt>
                <dd className="font-display text-2xl font-bold text-primary">OEM</dd>
              </div>
              <div className="flex items-baseline justify-between py-5">
                <dt className="text-sm text-muted-foreground">Licensing markets</dt>
                <dd className="font-display text-2xl font-bold text-primary">KR · VN</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">About</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary">
              Two businesses, one team.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-8">
            <p>
              Alongside manufacturing, we operate as a brand licensing agent, representing global
              lifestyle brands and holding agentship rights across the Korean and Vietnamese
              markets.
            </p>
            <p>
              With a presence in the United States and Vietnam, we bring both hands-on production
              expertise and on-the-ground market knowledge to every brand partnership we take on.
              Today our production runs through trusted subcontract factories, while sourcing,
              development and quality control stay with our own team.
            </p>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section id="manufacturing" className="border-b border-border bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                Manufacturing
              </p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold tracking-tight text-primary">
                OEM production for sports, outdoor and casual bags.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build to your design and your specification. Our focus is OEM — we do not offer ODM
              programs.
            </p>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((c) => (
              <div key={c.n} className="bg-background p-8">
                <span className="font-display text-sm font-bold text-steel">{c.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
              Labels we have produced for
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {CLIENTS.map((client) => (
                <li key={client} className="font-display text-lg font-semibold text-primary/70">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LICENSING */}
      <section id="licensing" className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/60">
              Brand Licensing
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
              Exclusive agentship,
              <br />
              carefully managed.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
              We represent global lifestyle brands in Korea and Vietnam — handling territory rights,
              licensee relationships and production oversight as a single accountable partner.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-primary-foreground p-10 text-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                Current license
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-primary">
                Santa Barbara Polo &amp; Racquet Club
              </h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Capstone HS Inc. holds the exclusive licensing agentship for SBPRC across Korea and
                Vietnam, in partnership with Interasia &amp; Associates.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Korea", "Vietnam", "In partnership with Interasia & Associates"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section id="history" className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">History</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-primary">
            From a Seoul sourcing office to a US–Vietnam operation.
          </h2>

          <ol className="mt-14 border-l border-border">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative grid gap-2 pb-12 pl-8 sm:grid-cols-12 sm:gap-6">
                <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-primary" />
                <div className="font-display text-xl font-bold text-primary sm:col-span-2">
                  {item.year}
                </div>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">Contact</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary">
            Two offices, one point of contact.
          </h2>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                United States — Head Office
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">Torrance, California</h3>
              <address className="mt-5 text-base not-italic leading-relaxed text-muted-foreground">
                2530 Sepulveda Blvd., #203
                <br />
                Torrance, CA 90505
                <br />
                United States
              </address>
            </div>
            <div className="bg-background p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-steel">
                Vietnam — Operations
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">Ho Chi Minh City</h3>
              <address className="mt-5 text-base not-italic leading-relaxed text-muted-foreground">
                3rd Floor, T29 Office Building
                <br />
                Street 13-14G, D5 Street, Lai Thieu Ward
                <br />
                Ho Chi Minh City, Vietnam
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Capstone HS Inc. logo"
              className="h-8 w-auto object-contain object-left"
              style={{ clipPath: "inset(0 0 36% 36%)", marginLeft: "-1.7rem" }}
            />
            <span className="font-display text-sm font-bold tracking-tight text-primary">
              Capstone HS Inc.
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Capstone HS Inc. — Torrance, CA · Ho Chi Minh City, Vietnam
          </p>
        </div>
      </footer>
    </div>
  );
}
