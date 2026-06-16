import CTAButton from "./CTAButton";

const CTA_BG_GIF =
  "https://media.giphy.com/media/iX8FxXWA93GnNshecG/giphy.gif";

export default function CTA() {
  return (
    <section
      id="shop"
      className="relative overflow-hidden border-t border-outline/10 bg-surface-container py-20 md:py-28"
    >
      <img
        src={CTA_BG_GIF}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background/88 via-background/72 to-background/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 text-center md:px-16">
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Ready to Ride
        </p>
        <h2 className="mb-6 font-display text-3xl uppercase tracking-[0.02em] text-on-surface md:text-5xl">
          Find Your Helmet
        </h2>
        <p className="mx-auto mb-10 max-w-lg font-body text-base font-light leading-relaxed tracking-[0.05em] text-on-surface-variant">
          Discover the full Steelbird collection — from motocross to street,
          engineered for riders who demand more.
        </p>
        <CTAButton href="/helmets" className="px-10 py-4 text-sm">
          Shop Collection
        </CTAButton>
      </div>
    </section>
  );
}
