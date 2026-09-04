import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import logoBassPro from "@/assets/logo-basspro.png.asset.json";
import logoBushnell from "@/assets/logo-bushnell.png.asset.json";
import logoCaseLogic from "@/assets/logo-case-logic.png.asset.json";
import logoFieldline from "@/assets/logo-fieldline.webp.asset.json";
import logoHerveChapelier from "@/assets/logo-herve-chapelier.svg.asset.json";
import logoHummel from "@/assets/logo-hummel.svg.asset.json";
import logoLibertyMountain from "@/assets/logo-liberty-mountain.webp.asset.json";
import logoOutdoorProducts from "@/assets/logo-outdoor-products.png.asset.json";
import logoSingingRock from "@/assets/logo-singing-rock.webp.asset.json";
import logoSpyder from "@/assets/logo-spyder.jpg.asset.json";
import logoStoneIsland from "@/assets/logo-stone-island.png.asset.json";
import logoYeah from "@/assets/logo-yeah.jpg.asset.json";
import logoYakPak from "@/assets/yakpak-logo.webp.asset.json";

const TRUSTED_BY = [
  { src: logoBassPro.url, name: "Bass Pro Shops" },
  { src: logoOutdoorProducts.url, name: "OUTDOOR Products" },
  { src: logoStoneIsland.url, name: "Stone Island" },
  { src: logoCaseLogic.url, name: "Case Logic" },
  { src: logoLibertyMountain.url, name: "Liberty Mountain" },
  { src: logoSingingRock.url, name: "Singing Rock" },
  { src: logoBushnell.url, name: "Bushnell" },
  { src: logoHerveChapelier.url, name: "Hervé Chapelier" },
  { src: logoHummel.url, name: "hummel" },
  { src: logoSpyder.url, name: "Spyder" },
  { src: logoFieldline.url, name: "Fieldline" },
  { src: logoYeah.url, name: "Yeah!" },
  { src: logoYakPak.url, name: "Yak Pak" },
];

export const Route = createFileRoute("/trusted-by")({
  head: () => ({
    meta: [
      { title: "Brands We've Manufactured For — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Brands that have trusted Capstone HS Inc. with OEM bag manufacturing.",
      },
      { property: "og:title", content: "Brands We've Manufactured For — Capstone HS Inc." },
      {
        property: "og:description",
        content: "Long-standing manufacturing relationships with recognized labels across sports, outdoor and lifestyle.",
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
        title="Brands we've manufactured for."
        intro="Long-standing manufacturing relationships with recognized labels across sports, outdoor and lifestyle."
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Label>Brands we've manufactured for</Label>
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
