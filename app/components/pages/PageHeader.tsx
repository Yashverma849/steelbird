type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        {label}
      </p>
      <h1 className="mt-2 font-display text-4xl uppercase tracking-[0.02em] text-on-surface md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-secondary md:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
