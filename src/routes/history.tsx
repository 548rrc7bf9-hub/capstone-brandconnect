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
      </section>
    </>
  );
}
