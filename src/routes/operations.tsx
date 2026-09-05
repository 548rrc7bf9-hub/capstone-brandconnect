import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import office from "@/assets/office.jpg.asset.json";
import showroom from "@/assets/showroom.jpg.asset.json";
import sampleRoom from "@/assets/sample-room.jpg.asset.json";
import sewingLine from "@/assets/sewing-line.jpg.asset.json";
import assembly from "@/assets/assembly.jpg.asset.json";
import cutting from "@/assets/cutting-machine.jpg.asset.json";
import warehouse from "@/assets/warehouse.jpg.asset.json";
import materials from "@/assets/materials.jpg.asset.json";
import office1 from "@/assets/dsc_0781.jpg.asset.json";
import office2 from "@/assets/dsc_0782.jpg.asset.json";
import office3 from "@/assets/dsc_0784.jpg.asset.json";
import office4 from "@/assets/dsc_0785.jpg.asset.json";
import sampleSewing from "@/assets/dsc_0786.jpg.asset.json";
import sampleWorkshop from "@/assets/dsc_0787.jpg.asset.json";
import vnExterior from "@/assets/img_2811.jpg.asset.json";
import floorOverview from "@/assets/dsc_0822.jpg.asset.json";
import spreading from "@/assets/dsc_0820.jpg.asset.json";
import dieCutting from "@/assets/dsc_0821.jpg.asset.json";
import specialMachines from "@/assets/dsc_0819.jpg.asset.json";
import sewingRoom from "@/assets/dsc_0823.jpg.asset.json";
import trimming from "@/assets/dsc_0818.jpg.asset.json";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Inside the operation at Capstone HS Inc. — sewing lines, automatic cutting, sample room, material store, packing and export, and our sourcing & QC office.",
      },
      { property: "og:title", content: "Operations — Capstone HS Inc." },
      {
        property: "og:description",
        content:
          "Sewing, cutting, sampling, material control, packing and export — the day-to-day of our production floors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/operations" },
    ],
    links: [{ rel: "canonical", href: "/operations" }],
  }),
  component: Operations,
});

const OPERATION = [
  { src: sewingLine.url, caption: "Sewing line" },
  { src: assembly.url, caption: "Assembly & finishing" },
  { src: cutting.url, caption: "Automatic cutting" },
  { src: sampleRoom.url, caption: "Sample room" },
  { src: showroom.url, caption: "Showroom" },
  { src: materials.url, caption: "Material store" },
  { src: warehouse.url, caption: "Packing & export" },
  { src: office.url, caption: "Sourcing & QC office" },
  { src: office1.url, caption: "Sourcing office" },
  { src: office2.url, caption: "QC & merchandising office" },
  { src: office3.url, caption: "Production planning office" },
  { src: office4.url, caption: "Merchandising office" },
  { src: sampleSewing.url, caption: "Sample sewing" },
  { src: sampleWorkshop.url, caption: "Sample workshop" },
];

function Operations() {
  return (
    <>
      <PageHead
        eyebrow="Operations"
        title="Inside the operation."
        intro="From material store to packing and export — the floors and rooms where every program is developed, built and checked."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Label>Inside the operation</Label>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Archive images from our former in-house facility in Vietnam.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATION.map((g) => (
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
      </section>
    </>
  );
}
