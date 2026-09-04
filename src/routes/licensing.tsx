import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import sbprc from "@/assets/sbprc-logo.png.asset.json";

export const Route = createFileRoute("/licensing")({
  head: () => ({
    meta: [
      { title: "Brand Licensing — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Capstone HS Inc. holds the exclusive licensing agentship for Santa Barbara Polo & Racquet Club across Korea and Vietnam, in partnership with Interasia & Associates.",
      },
      { property: "og:title", content: "Brand Licensing — Capstone HS Inc." },
      {
        property: "og:description",
        content: "Exclusive brand licensing agentship across the Korean and Vietnamese markets.",
      },
      { property: "og:url", content: "/licensing" },
    ],
    links: [{ rel: "canonical", href: "/licensing" }],
  }),
  component: Licensing,
});

function Licensing() {
  return (
    <>
      <PageHead
        eyebrow="Brand Licensing"
        title="Exclusive agentship, carefully managed."
        intro="We represent global lifestyle brands in Korea and Vietnam — handling territory rights, licensee relationships and production oversight as a single accountable partner."
      />
      <section className="bg-navy-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-lg bg-primary-foreground p-10 text-foreground sm:p-14">
            <Label>Current license</Label>
            <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h2 className="font-display text-3xl font-bold leading-tight text-navy-deep">
                  Santa Barbara Polo &amp; Racquet Club
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                  Capstone HS Inc. holds the exclusive licensing agentship for SBPRC across Korea and
                  Vietnam, in partnership with Interasia &amp; Associates.
                </p>
              </div>
              <img
                src={sbprc.url}
                alt="Santa Barbara Polo & Racquet Club logo"
                className="h-auto w-full max-w-[200px] shrink-0"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Korea", "Vietnam", "In partnership with Interasia & Associates"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
