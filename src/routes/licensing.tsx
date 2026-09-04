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
        intro="We represent global lifestyle brands in Korea and Vietnam, handling territory rights, licensee relationships, and production oversight as a single accountable partner."
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

      <section className="bg-background py-24 text-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Label>Licensing agentship</Label>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-navy-deep">
                A local partner with production discipline.
              </h2>
            </div>
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              <p>
                We act as a licensing agent for brands entering or expanding in Korea and Vietnam. Our
                role is to protect the brand, identify the right licensees, and make sure products meet
                the standards customers expect.
              </p>
              <p>
                With decades of OEM manufacturing experience and on-the-ground teams in the US and
                Vietnam, we bridge brand owners, factories, and retail partners so every license is
                managed with accountability from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-24 text-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <Label>Our markets</Label>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-navy-deep">
            Korea and Vietnam.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            These are the two markets where we currently hold exclusive agentship rights and where we
            can support brand owners with territory evaluation, licensee sourcing, and local production
            oversight.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg bg-background p-8">
              <h3 className="font-display text-xl font-bold text-navy-deep">Korea</h3>
              <p className="mt-3 text-muted-foreground">
                Strong retail network and consumer demand for international lifestyle brands. We help
                navigate licensee relationships and local market entry.
              </p>
            </div>
            <div className="rounded-lg bg-background p-8">
              <h3 className="font-display text-xl font-bold text-navy-deep">Vietnam</h3>
              <p className="mt-3 text-muted-foreground">
                Fast-growing manufacturing and retail base with direct access to our sourcing and
                quality control operations on the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight">
            Interested in licensing partnership?
          </h2>
          <p className="mt-5 leading-relaxed text-primary-foreground/80">
            For licensing inquiries, brand owners and prospective licensees can reach us directly.
          </p>
          <a
            href="mailto:info@capstonehs.net"
            className="mt-8 inline-block text-lg font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
          >
            info@capstonehs.net
          </a>
        </div>
      </section>
    </>
  );
}
