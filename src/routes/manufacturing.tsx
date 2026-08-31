import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import { CAPABILITIES, CLIENTS } from "@/lib/site-content";

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

        <div className="mt-16 border-t border-border pt-10">
          <Label>Labels we have produced for</Label>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {CLIENTS.map((client) => (
              <li key={client} className="font-display text-lg font-semibold text-primary/70">
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
