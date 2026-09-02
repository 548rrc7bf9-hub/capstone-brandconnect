import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";
import { OFFICES } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Capstone HS Inc. offices: Torrance, California (head office) and Ho Chi Minh City, Vietnam (operations).",
      },
      { property: "og:title", content: "Contact — Capstone HS Inc." },
      { property: "og:description", content: "Two offices, one point of contact." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Two offices, one point of contact."
        intro="For inquiries, reach us at info@capstonehs.net."
      />
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-paper px-8 py-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            General inquiries
          </p>
          <a
            href="mailto:info@capstonehs.net"
            className="font-display text-xl font-bold text-primary underline decoration-brass decoration-2 underline-offset-4 transition-colors hover:text-sbprc"
          >
            info@capstonehs.net
          </a>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {OFFICES.map((office) => (
            <div key={office.city} className="bg-background p-10">
              <Label>{office.region}</Label>
              <h2 className="mt-4 font-display text-2xl font-bold text-primary">{office.city}</h2>
              <address className="mt-5 text-base not-italic leading-relaxed text-muted-foreground">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
