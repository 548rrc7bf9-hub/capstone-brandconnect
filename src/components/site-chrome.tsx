import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ChevronDown, Linkedin } from "lucide-react";
import mark from "@/assets/capstone-hs-mark.png.asset.json";
import { NAV, type NavItem } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">{children}</p>
  );
}

function stripHash(to: string) {
  const hashIndex = to.indexOf("#");
  return hashIndex === -1 ? to : to.slice(0, hashIndex);
}

function isItemActive(pathname: string, item: NavItem) {
  if (pathname === stripHash(item.to)) return true;
  if (item.children) {
    return item.children.some((child) => pathname === stripHash(child.to));
  }
  return false;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

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
          {NAV.map((item) => {
            const active = isItemActive(location.pathname, item);
            const expanded = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown((current) => current === item.label ? null : current)}
                onFocusCapture={() => item.children && setOpenDropdown(item.label)}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpenDropdown((current) => current === item.label ? null : current);
                  }
                }}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-primary",
                    active ? "text-primary" : "text-steel"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {item.children && expanded && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] pt-3 transition-opacity duration-150">
                    <div className="overflow-hidden border border-border bg-background py-1 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-5 py-2.5 text-[12px] font-medium tracking-wide text-steel transition-colors hover:bg-paper hover:text-primary"
                          activeProps={{ className: "bg-paper text-primary" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            <MobileNavItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
          ))}
        </nav>
      )}
    </header>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const active = isItemActive(location.pathname, item);

  if (!item.children) {
    return (
      <Link
        to={item.to}
        onClick={onNavigate}
        className={cn(
          "block border-b border-secondary py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.2em]",
          active ? "text-primary" : "text-steel"
        )}
        activeProps={{ className: "text-primary" }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-secondary">
      <button
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          "flex w-full items-center justify-between py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.2em]",
          active ? "text-primary" : "text-steel"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
        />
      </button>
      {expanded && (
        <div className="pb-3 pl-4">
          {item.children.map((child) => (
            <Link
              key={child.label}
              to={child.to}
              onClick={onNavigate}
              className="block py-2.5 text-[12px] font-medium tracking-wide text-steel transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function PageHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
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
  const location = useLocation();

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
              key={item.label}
              to={item.to}
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-primary",
                isItemActive(location.pathname, item) ? "text-primary" : "text-steel"
              )}
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
