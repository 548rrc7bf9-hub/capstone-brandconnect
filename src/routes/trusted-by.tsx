import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import logoBassPro from "@/assets/logo-basspro.png.asset.json";
import logoLibertyMountain from "@/assets/logo-liberty-mountain.webp.asset.json";
import logoOutdoorProducts from "@/assets/logo-outdoor-products.png.asset.json";
import logoSingingRock from "@/assets/logo-singing-rock.webp.asset.json";
import logoStoneIsland from "@/assets/logo-stone-island.png.asset.json";
import logoCaseLogic from "@/assets/logo-case-logic.png.asset.json";

const TRUSTED_BY = [
  { src: logoBassPro.url, name: "Bass Pro Shops" },
  { src: logoOutdoorProducts.url, name: "OUTDOOR Products" },
  { src: logoStoneIsland.url, name: "Stone Island" },
  { src: logoCaseLogic.url, name: "Case Logic" },
  { src: logoLibertyMountain.url, name: "Liberty Mountain" },
  { src: logoSingingRock.url, name: "Singing Rock" },
];

export const Route = createFileRoute("/trusted-by")({
  head: () => ({
    meta: [
      { title: "Trusted by — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Brands and partners that have trusted Capstone HS Inc. with OEM bag manufacturing.",
      },
      { property: "og:title", content: "Trusted by — Capstone HS Inc." },
      {
        property: "og:description",
        content: "Brands and partners that have trusted Capstone HS Inc. with OEM bag manufacturing.",
      },
      { property: "og:url", content: "/trusted-by" },
    ],
    links: [{ rel: "canonical", href: "/trusted-by" }],
  }),
  component: TrustedBy,
});

function TrustedBy() {
  return (
    <>
      <PageHead
        eyebrow="Trusted by"
        title="Brands we have produced for."
        intro="Long-standing partnerships with recognized labels across sports, outdoor and lifestyle."
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Label>Brand partners</Label>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {TRUSTED_BY.map((brand) => (
            <figure
              key={brand.name}
              className="flex aspect-[16/10] items-center justify-center border border-border bg-background p-8"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
