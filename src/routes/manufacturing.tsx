import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import { CAPABILITIES, CLIENTS } from "@/lib/site-content";
import exterior from "@/assets/factory-exterior.jpg.asset.json";
import office from "@/assets/office.jpg.asset.json";
import showroom from "@/assets/showroom.jpg.asset.json";
import sampleRoom from "@/assets/sample-room.jpg.asset.json";
import sewingLine from "@/assets/sewing-line.jpg.asset.json";
import assembly from "@/assets/assembly.jpg.asset.json";
import cutting from "@/assets/cutting-machine.jpg.asset.json";
import warehouse from "@/assets/warehouse.jpg.asset.json";
import materials from "@/assets/materials.jpg.asset.json";

const GALLERY = [
  { src: sewingLine.url, caption: "Sewing line" },
  { src: assembly.url, caption: "Assembly & finishing" },
  { src: cutting.url, caption: "Automatic cutting" },
  { src: sampleRoom.url, caption: "Sample room" },
  { src: showroom.url, caption: "Showroom" },
  { src: materials.url, caption: "Material store" },
  { src: warehouse.url, caption: "Packing & export" },
  { src: office.url, caption: "Sourcing & QC office" },
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
        intro="We build to your design and your specification. Our focus is OEM — we do not offer ODM programs."
      />
      <section className="mx-auto max-w-6xl px-6 pt-16">
        <figure>
          <img
            src={exterior.url}
            alt="Factory exterior"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
            Production facility
          </figcaption>
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
          <Label>Inside the operation</Label>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g) => (
              <figure key={g.caption}>
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Labels we have produced for</Label>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {CLIENTS.map((client) => (
              <li key={client} className="font-display text-lg font-semibold text-primary/70">
                {client}
              </li>
            ))}
          </ul>
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
