import { createFileRoute, Link } from "@tanstack/react-router";
import { Label } from "@/components/site-chrome";
import { NAV } from "@/lib/site-content";
import heroPhoto from "@/assets/sewing-line.jpg.asset.json";
import productsPhoto from "@/assets/products-backpacks.jpg.asset.json";

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
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const STATS = [
  { k: "Founded", v: "1987" },
  { k: "Offices", v: "US · VN" },
  { k: "Model", v: "OEM" },
  { k: "Licensing markets", v: "KR · VN" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img
          src={heroPhoto.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklab, var(--navy-deep) 92%, transparent) 0%, color-mix(in oklab, var(--navy-deep) 65%, transparent) 60%, color-mix(in oklab, var(--navy-deep) 35%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:py-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-soft">
            Established 1987 · Torrance, CA · Ho Chi Minh City
          </p>
          <h1 className="mt-6 max-w-[17ch] font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            Manufacturing and brand licensing, under one roof.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Capstone HS Inc. is a Torrance, California based company operating at the intersection
            of manufacturing and brand licensing. For decades our team has produced sports, outdoor
            and casual bags through OEM manufacturing, working with recognized international labels
            along the way — and we continue that work today.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-sm border border-primary-foreground/55 px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.22em] transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              Start a conversation
            </Link>
            <Link
              to="/manufacturing"
              className="rounded-sm border border-brass px-8 py-4 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-brass-soft transition-colors hover:bg-brass hover:text-primary"
            >
              Our capabilities
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-primary-foreground/15 pt-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-primary-foreground/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/80 transition-colors hover:border-brass hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-0 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.k} className="px-6 py-8 text-center">
              <b className="block font-display text-2xl font-extrabold text-primary">{s.v}</b>
              <span className="text-[11px] uppercase tracking-[0.18em] text-steel">{s.k}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto grid max-w-6xl gap-px border border-border bg-border md:grid-cols-2">
          <div className="bg-background p-12">
            <Label>Manufacturing</Label>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary">
              OEM production for sports, outdoor and casual bags.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We build to your design and your specification, through vetted subcontract factories,
              with sourcing, development and quality control kept in-house.
            </p>
            <Link
              to="/manufacturing"
              className="mt-8 inline-block border-b border-brass pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass"
            >
              View capabilities
            </Link>
          </div>
          <div className="bg-background p-12">
            <Label>Brand Licensing</Label>
            <h2 className="mt-4 font-display text-2xl font-bold text-primary">
              Exclusive agentship in Korea and Vietnam.
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We hold the exclusive licensing agentship for Santa Barbara Polo &amp; Racquet Club
              across Korea and Vietnam, in partnership with Interasia &amp; Associates.
            </p>
            <Link
              to="/licensing"
              className="mt-8 inline-block border-b border-brass pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass"
            >
              View licensing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
