import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import mark from "@/assets/capstone-hs-mark.png.asset.json";
import { NAV } from "@/lib/site-content";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">{children}</p>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={mark.url} alt="Capstone HS Inc." className="h-9 w-auto" />
          <span className="font-display text-lg font-extrabold tracking-tight text-brass">
            Capstone HS <span className="text-brass">Inc.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-steel transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-full after:border-b after:border-brass after:transition-all hover:after:right-0"
              activeProps={{ className: "text-primary after:right-0" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="rounded-sm border border-border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 pb-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-secondary py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-steel"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Label>{eyebrow}</Label>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-primary sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        )}
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <div className="flex items-center gap-3">
          <img src={mark.url} alt="Capstone HS Inc. logo" className="h-7 w-auto" />
          <span className="font-display text-sm font-bold tracking-tight text-brass">
            Capstone HS Inc.
          </span>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-steel transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Capstone HS Inc. — Torrance, CA · Ho Chi Minh City
        </p>
      </div>
    </footer>
  );
}
