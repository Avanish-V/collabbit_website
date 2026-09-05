const items = [
  "Find teammates",
  "Ship projects",
  "Join communities",
  "Land internships",
  "Live sessions",
  "Hackathons",
  "Open source",
  "Startup builders",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-6">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span
              className={
                i % 2 === 0
                  ? "text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
                  : "text-outline text-3xl font-extrabold tracking-tight md:text-4xl"
              }
            >
              {item}
            </span>
            <span className="text-brand">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
