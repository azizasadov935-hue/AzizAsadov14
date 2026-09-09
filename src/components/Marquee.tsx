interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  separator?: React.ReactNode;
}

export function Marquee({ items, reverse, duration = 40, className = "", separator }: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div className={`marquee relative w-full overflow-hidden ${className}`}>
      <div
        className={`marquee-track flex w-max items-center whitespace-nowrap ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 md:px-10">{item}</span>
            <span className="text-muted">{separator ?? <span className="block h-1.5 w-1.5 rounded-full bg-current" />}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
