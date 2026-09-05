import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import backpacks from "@/assets/products-backpacks.jpg.asset.json";
import duffel from "@/assets/products-duffel.jpg.asset.json";
import shoulder from "@/assets/products-shoulder.jpg.asset.json";
import tactical from "@/assets/products-tactical.jpg.asset.json";
import coolerTote from "@/assets/product-cooler-tote.jpg.asset.json";
import shinsegaeSet from "@/assets/product-shinsegae-set.jpg.asset.json";
import coolerBox from "@/assets/product-cooler-box.jpg.asset.json";
import showroom1 from "@/assets/dsc_0772.jpg.asset.json";
import showroom2 from "@/assets/dsc_0773.jpg.asset.json";
import showroom3 from "@/assets/dsc_0774.jpg.asset.json";
import showroom4 from "@/assets/dsc_0777.jpg.asset.json";
import showroom5 from "@/assets/dsc_0778.jpg.asset.json";
import showroom6 from "@/assets/dsc_0780.jpg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Work by Capstone HS Inc." },
      {
        name: "description",
        content:
          "A visual archive of bags produced by Capstone HS Inc. — backpacks, duffels, shoulder bags, tactical packs and insulated carriers, plus the rooms they were built in.",
      },
      { property: "og:title", content: "Gallery — Work by Capstone HS Inc." },
      {
        property: "og:description",
        content: "A visual archive of programs produced for international labels and retail groups.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const WORK = [
  { src: backpacks.url, caption: "Backpack program" },
  { src: duffel.url, caption: "Sports duffel" },
  { src: shoulder.url, caption: "Shoulder & waist bags" },
  { src: tactical.url, caption: "Tactical pack" },
  { src: coolerTote.url, caption: "Insulated tote set" },
  { src: shinsegaeSet.url, caption: "Retail program set" },
  { src: coolerBox.url, caption: "Insulated carrier box" },
];

const SHOWROOM = [
  { src: showroom1.url, caption: "Showroom floor" },
  { src: showroom2.url, caption: "Meeting room & sample display" },
  { src: showroom3.url, caption: "Sample display" },
  { src: showroom4.url, caption: "Product racks" },
  { src: showroom5.url, caption: "OUTDOOR Products display" },
  { src: showroom6.url, caption: "Camo program display" },
];


function Gallery() {
  return (
    <>
      <PageHead
        eyebrow="Gallery"
        title="Everything we have built, in one place."
        intro="A visual archive of programs produced to our customers' designs — and the rooms they were built in."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Label>Product archive</Label>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w) => (
            <figure key={w.caption} className="bg-background">
              <img
                src={w.src}
                alt={w.caption}
                loading="lazy"
                className="aspect-square w-full bg-paper object-contain p-6"
              />
              <figcaption className="border-t border-border px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                {w.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Earlier chapters of the company — the Qingdao plant in China and our other own-factory
            years — are documented in the history archive.
          </p>
          <Link
            to="/history"
            className="mt-6 inline-block border-b border-steel pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-steel"
          >
            View history archive
          </Link>
        </div>
      </section>
    </>
  );
}
