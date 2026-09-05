import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import { TIMELINE } from "@/lib/site-content";
import gate from "@/assets/china-img_2807.jpg.asset.json";
import yard from "@/assets/china-img_2808.jpg.asset.json";
import lobby from "@/assets/china-img_2809.jpg.asset.json";
import speech from "@/assets/china-img_2810.jpg.asset.json";
import floor1 from "@/assets/china-img_2812.jpg.asset.json";
import floor2 from "@/assets/china-img_2813.jpg.asset.json";
import floor3 from "@/assets/china-img_2814.jpg.asset.json";
import floor4 from "@/assets/china-img_2815.jpg.asset.json";
import opening from "@/assets/china-img_2816.jpg.asset.json";
import aerial from "@/assets/china-img_2817.jpg.asset.json";
import showroom1 from "@/assets/dsc_0772.jpg.asset.json";
import showroom2 from "@/assets/dsc_0773.jpg.asset.json";
import showroom3 from "@/assets/dsc_0774.jpg.asset.json";
import showroom4 from "@/assets/dsc_0777.jpg.asset.json";
import showroom5 from "@/assets/dsc_0778.jpg.asset.json";
import showroom6 from "@/assets/dsc_0780.jpg.asset.json";

const SHOWROOM = [
  { src: showroom1.url, caption: "Showroom floor" },
  { src: showroom2.url, caption: "Meeting room & sample display" },
  { src: showroom3.url, caption: "Sample display" },
  { src: showroom4.url, caption: "Product racks" },
  { src: showroom5.url, caption: "OUTDOOR Products display" },
  { src: showroom6.url, caption: "Camo program display" },
];


const ARCHIVE = [
  { src: gate.url, caption: "HanSei MFG. Corp., Qingdao — main gate" },
  { src: opening.url, caption: "Opening day, Qingdao" },
  {
    src: speech.url,
    caption: "Opening ceremony — the chairman's address",
  },
  { src: yard.url, caption: "Plant yard" },
  { src: aerial.url, caption: "The site from above" },
  { src: lobby.url, caption: "Reception" },
  { src: floor1.url, caption: "Finishing tables" },
  { src: floor2.url, caption: "Sewing floor" },
  { src: floor3.url, caption: "Main production hall" },
  { src: floor4.url, caption: "Line in operation" },
];

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — Capstone HS Inc." },
      {
        name: "description",
        content:
          "From a 1987 Seoul sourcing office to a US–Vietnam operation: the milestones behind Capstone HS Inc.",
      },
      { property: "og:title", content: "History — Capstone HS Inc." },
      {
        property: "og:description",
        content: "Milestones from 1987 to today across Korea, Indonesia, China and Vietnam.",
      },
      { property: "og:url", content: "/history" },
    ],
    links: [{ rel: "canonical", href: "/history" }],
  }),
  component: History,
});

function History() {
  return (
    <>
      <PageHead
        eyebrow="History"
        title="From a Seoul sourcing office to a US–Vietnam operation."
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <ol className="border-t border-border">
          {TIMELINE.map((item) => (
            <li
              key={item.year}
              className="grid gap-2 border-b border-border py-7 sm:grid-cols-12 sm:gap-6"
            >
              <div className="font-display text-xl font-bold text-primary sm:col-span-2">
                {item.year}
              </div>
              <div className="sm:col-span-10">
                <h2 className="font-display text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-20 border-t border-border pt-12">
          <Label>Archive — Qingdao, China</Label>
          <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold text-primary">
            HanSei MFG. Corp., Qingdao.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Opened in 2002 as our fourth own-operated facility. These photographs are from the
            plant's opening and its years in full production.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHIVE.map((a) => (
              <figure key={a.caption}>
                <img
                  src={a.src}
                  alt={a.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-steel">
                  {a.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
