import Link from "next/link";

const navLinks = [
  { label: "Helmets", href: "/helmets", active: true },
  { label: "Armor", href: "#" },
  { label: "Apparel", href: "#" },
  { label: "Accessories", href: "#" },
];

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M6 6L5 3H2" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function ShopNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline/10 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 md:px-16">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-[0.04em] text-primary md:text-2xl"
        >
          Steelbird
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`font-mono text-xs font-semibold uppercase tracking-wider transition-colors ${
                  link.active
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-primary">
          <button type="button" aria-label="Search" className="transition-opacity hover:opacity-70">
            <IconSearch />
          </button>
          <button type="button" aria-label="Cart" className="relative transition-opacity hover:opacity-70">
            <IconCart />
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center bg-primary-container font-mono text-[9px] font-semibold text-on-primary-container">
              2
            </span>
          </button>
          <button type="button" aria-label="Account" className="transition-opacity hover:opacity-70">
            <IconUser />
          </button>
        </div>
      </nav>
    </header>
  );
}
