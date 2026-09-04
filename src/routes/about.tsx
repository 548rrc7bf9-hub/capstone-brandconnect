import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead, Label } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Capstone HS Inc." },
      {
        name: "description",
        content:
          "Capstone HS Inc. operates at the intersection of OEM bag manufacturing and brand licensing, with offices in Torrance, California and Ho Chi Minh City, Vietnam.",
      },
      { property: "og:title", content: "About — Capstone HS Inc." },
      {
        property: "og:description",
        content:
          "Two businesses, one team: OEM manufacturing and brand licensing agentship since 1987.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="Two businesses, one team."
        intro="With a presence in the United States and Vietnam, we bring both hands-on production expertise and on-the-ground market knowledge to every brand partnership we take on."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Label>Who we are</Label>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-8">
          <p>
            Capstone HS Inc. is a Torrance, California based company operating at the intersection
            of manufacturing and brand licensing. For decades our team has produced sports, outdoor
            and casual bags through OEM/ODM manufacturing, working with recognized international labels
            along the way, and we continue that work today.
          </p>
          <p>
            Alongside manufacturing, we operate as a brand licensing agent, representing global
            lifestyle brands and serving as the exclusive licensing agent across the Korean and Vietnamese markets.
          </p>
          <p>
            Today we operate as an OEM supplier. We source every raw material, from fabric and thread
            to accessories and hardware, and we control the BOM, costing and specifications.
            Cut-make-trim production is carried out by vetted partner factories under our direction,
            with our own team managing development, sourcing and quality control at every stage.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <Link
              to="/history"
              className="border-b border-brass pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass"
            >
              Our history
            </Link>
            <Link
              to="/contact"
              className="border-b border-brass pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-primary hover:text-brass"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
