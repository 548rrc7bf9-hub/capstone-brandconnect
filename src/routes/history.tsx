import { createFileRoute } from "@tanstack/react-router";
import { PageHead } from "@/components/site-chrome";
import { TIMELINE } from "@/lib/site-content";

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
