import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import { CAPABILITIES } from "@/lib/site-content";
import exterior from "@/assets/factory-exterior.jpg.asset.json";
import showroom from "@/assets/showroom.jpg.asset.json";
import sampleRoom from "@/assets/sample-room.jpg.asset.json";
import sewingLine from "@/assets/sewing-line.jpg.asset.json";
import assembly from "@/assets/assembly.jpg.asset.json";
import cutting from "@/assets/cutting-machine.jpg.asset.json";
import showroom1 from "@/assets/dsc_0772.jpg.asset.json";
import showroom2 from "@/assets/dsc_0773.jpg.asset.json";
import showroom3 from "@/assets/dsc_0774.jpg.asset.json";
import showroom4 from "@/assets/dsc_0777.jpg.asset.json";
import showroom5 from "@/assets/dsc_0778.jpg.asset.json";
import showroom6 from "@/assets/dsc_0780.jpg.asset.json";

const MAKING = [
  { src: sampleRoom.url, caption: "Sample development" },
  { src: cutting.url, caption: "Cutting" },
  { src: sewingLine.url, caption: "Sewing" },
  { src: assembly.url, caption: "Assembly & finishing" },
  { src: showroom.url, caption: "Showroom" },
];

const SHOWROOM = [
  { src: showroom1.url, caption: "Showroom floor" },
  { src: showroom2.url, caption: "Meeting room & sample display" },
  { src: showroom3.url, caption: "Sample display" },
  { src: showroom4.url, caption: "Product racks" },
  { src: showroom5.url, caption: "OUTDOOR Products display" },
  { src: showroom6.url, caption: "Camo program display" },
];

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Capstone HS Inc." },
      {
        name: "description",
        content:
          "OEM production of sports, outdoor and casual bags: sourcing, development, quality control and export handled by our own team in Vietnam.",
      },
      { property: "og:title", content: "Manufacturing — Capstone HS Inc." },
      {
        property: "og:description",
        content: "OEM bag production built to your design and specification.",
      },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: Manufacturing,
});

function Manufacturing() {
  return (
    <>
      <PageHead
        eyebrow="Manufacturing"
        title="OEM production for sports, outdoor and casual bags."
        intro="We build to your design and specification. As an OEM supplier, we control sourcing, development and quality in-house, with cut-make-trim production carried out by vetted partner factories. We do not offer ODM programs."
      />
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <figure>
          <img
            src={exterior.url}
            alt="Factory exterior"
            className="aspect-[21/9] w-full object-cover"
          />
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((c) => (
            <div key={c.n} className="bg-background p-8">
              <span className="font-display text-sm font-bold text-brass">{c.n}</span>
              <h2 className="mt-4 font-display text-xl font-bold text-primary">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Our model</Label>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              We are the OEM supplier, not the factory. Every raw material is sourced and specified
              by our team, and every BOM and costing decision is made in-house. We place CMT orders
              with partner factories we have vetted and worked with for years, then manage quality
              control, timelines and export directly.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>How it is made</Label>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MAKING.map((m) => (
              <figure key={m.caption}>
                <img
                  src={m.src}
                  alt={m.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                  {m.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Archive — Vietnam showroom</Label>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold text-primary">
            Finished programs, ready for shipment.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            From our former in-house facility in Vietnam — the showroom where completed programs
            were displayed before shipment.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWROOM.map((s) => (
              <figure key={s.caption}>
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Retail & licensee programs</Label>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              In Korea, we supplied OUTDOOR PRODUCTS bags to ABC Mart as a licensee. In the United
              States, we produced for OUTDOOR PRODUCTS and FieldLine, with finished goods reaching
              Walmart shelves through those brand partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
