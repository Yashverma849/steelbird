import Link from "next/link";
import CTAButton from "./CTAButton";
import FooterNewsletter from "./FooterNewsletter";

const companyLinks = [
  { label: "Profile", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Safety", href: "/#safety" },
  { label: "Gallery", href: "#" },
  { label: "Store Locator", href: "#" },
  { label: "FAQ", href: "/faq" },
];

const policyLinks = [
  { label: "Shipping", href: "#" },
  { label: "Return Policy", href: "#" },
  { label: "Contact Us", href: "/contact" },
  { label: "Become A Dealer", href: "#" },
];
const categoryLinks = ["Full Face", "Open Face", "Flip Up", "Motocross", "ECE & DOT"];

export default function Footer() {
  return (
    <footer
      id="dealers"
      className="relative overflow-hidden border-t border-outline/10 py-12 md:py-16"
    >
      <div
        className="absolute inset-0 bg-cover opacity-55"
        style={{
          backgroundImage: "url('/footer-background.png')",
          backgroundPosition: "center 30%",
          filter: "grayscale(1) brightness(0.82) contrast(1.05)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-container/35 via-primary/10 to-surface/55 mix-blend-color"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/78 to-background/38" aria-hidden="true" />

      <div className="relative mx-auto min-w-0 max-w-[1440px] px-4 md:px-16">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-2">
            <p className="font-mono text-[16px] font-semibold uppercase tracking-[0.14em] text-primary">
              Direct Support
            </p>
            <h2 className="mt-2 font-display text-4xl uppercase leading-none text-on-surface [text-shadow:0_3px_16px_rgba(0,0,0,0.85)] md:text-5xl">
              Need Help?
            </h2>
            <p className="mt-1 font-display text-3xl text-primary-container [text-shadow:0_3px_14px_rgba(0,0,0,0.85)] md:text-4xl">
              1800 102 3260
            </p>
            <p className="mt-4 max-w-xl font-body text-[22px] leading-[1.5] text-on-surface [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
              Tell us what you love or what we need to fix. Your feedback fuels our
              engineering breakthroughs.
            </p>
            <CTAButton href="/contact" className="mt-5 px-6 py-2.5 text-[16px]">
              Leave Feedback
            </CTAButton>
          </div>

          <div className="p-2">
            <p className="font-mono text-[16px] font-semibold uppercase tracking-[0.12em] text-primary">
              Customer Care Executive
            </p>
            <p className="mt-3 font-body text-[22px] leading-[1.45] text-on-surface [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
              Steelbird Hi-Tech India Limited
            </p>
            <p className="mt-2 font-body text-[22px] leading-[1.45] text-on-surface [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
              B2B-17, Jasola
              <br />
              New Delhi - 110025, India
            </p>
            <p className="mt-3 font-body text-[22px] leading-[1.45] text-primary-container">
              info@steelbirdhelmet.com
            </p>

            <div className="mt-6 pt-1">
              <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
                Newsletter
              </p>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                Get launches and offers in your inbox.
              </p>
              <FooterNewsletter />
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-2 md:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-3xl uppercase tracking-[0.04em] text-primary [text-shadow:0_3px_12px_rgba(0,0,0,0.85)]"
            >
              Steelbird
            </Link>
            <p className="mt-2 max-w-xs font-body text-[22px] leading-[1.5] text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
              Precision engineered safety systems for the road and off-road.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[16px] font-semibold uppercase tracking-[0.12em] text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
              Company
            </p>
            <ul className="space-y-1.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[18px] text-on-surface transition-colors hover:text-primary [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-[16px] font-semibold uppercase tracking-[0.12em] text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
              Policies
            </p>
            <ul className="space-y-1.5">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-[18px] text-on-surface transition-colors hover:text-primary [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-[16px] font-semibold uppercase tracking-[0.12em] text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
              Catalogue
            </p>
            <ul className="space-y-1.5">
              {categoryLinks.map((item) => (
                <li key={item} className="font-body text-[18px] text-on-surface [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-outline/20 pt-4 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[16px] font-semibold uppercase tracking-[0.08em] text-outline">
            Chatbot&apos;s Book • In English • In Hindi
          </p>
          <p className="font-mono text-[16px] font-semibold uppercase tracking-[0.08em] text-outline">
            © {new Date().getFullYear()} Steelbird Helmets India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
