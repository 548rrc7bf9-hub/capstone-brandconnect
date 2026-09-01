import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import backpacks from "@/assets/products-backpacks.jpg.asset.json";
import duffel from "@/assets/products-duffel.jpg.asset.json";
import shoulder from "@/assets/products-shoulder.jpg.asset.json";
import tactical from "@/assets/products-tactical.jpg.asset.json";
import coolerTote from "@/assets/product-cooler-tote.jpg.asset.json";
import shinsegaeSet from "@/assets/product-shinsegae-set.jpg.asset.json";
import coolerBox from "@/assets/product-cooler-box.jpg.asset.json";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Capstone HS Inc." },
      {
        name: "description",
        content:
          "A selection of bags produced by Capstone HS Inc.: backpacks, duffels, shoulder and waist bags, tactical packs and insulated carriers.",
      },
      { property: "og:title", content: "Products — Capstone HS Inc." },
      {
        property: "og:description",
        content: "Backpacks, duffels, shoulder bags, tactical packs and insulated carriers.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const RANGES = [
  { src: backpacks.url, title: "Backpacks & Daypacks", body: "School, city and hiking packs." },
  { src: duffel.url, title: "Duffels & Travel Bags", body: "Sports duffels and gear carriers." },
  { src: shoulder.url, title: "Shoulder & Waist Bags", body: "Messenger, sling and waist styles." },
  { src: tactical.url, title: "Tactical & Outdoor", body: "Field packs and technical carriers." },
];

const FEATURED = [
  { src: coolerTote.url, title: "Insulated tote set" },
  { src: shinsegaeSet.url, title: "Retail program — Shinsegae" },
  { src: coolerBox.url, title: "Insulated carrier box" },
];

function Products() {
  return (
    <>
      <PageHead
        eyebrow="Products"
        title="A selection of what we have built."
        intro="Every item shown was produced to a customer's design and specification. Ranges below are representative, not a catalogue."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {RANGES.map((r) => (
            <figure key={r.title} className="bg-background">
              <img
                src={r.src}
                alt={r.title}
                loading="lazy"
                className="aspect-[4/3] w-full bg-paper object-contain p-6"
              />
              <figcaption className="border-t border-border p-8">
                <h2 className="font-display text-xl font-bold text-primary">{r.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Selected programs</Label>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {FEATURED.map((f) => (
              <figure key={f.title}>
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="aspect-square w-full bg-paper object-contain p-6"
                />
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                  {f.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
