const records = [
  { month: "Oct to Dec 2025", profit: "+43.1%" },
  { month: "Apr to Jul 2025", profit: "+24.8%" },
  { month: "Aug to Sept 2025", profit: "+32.5%" },
  { month: "Jan to Mar 2025", profit: "+34.2%" },
];

// Helper to convert month name to number
const monthMap: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sept: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export default function ProfitRecords() {
  const sortedRecords = [...records].sort((a, b) => {
    const aStartMonth = a.month.split(" ")[0];
    const bStartMonth = b.month.split(" ")[0];

    return monthMap[bStartMonth] - monthMap[aStartMonth]; // Descending
  });

  return (
    <section className="min-h-screen flex items-center px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-3">
          Verified Profit Records
        </h2>
        <div className="h-1 w-20 bg-brand-accent mx-auto mb-12 rounded-full" />

        <div className="border-l border-brand-dark pl-8 space-y-10">
          {sortedRecords.map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-3 top-1.5 h-3 w-3 rounded-full bg-brand-accent" />
              <p className="text-sm text-brand-muted px-2">{item.month}</p>
              <p className="text-xl font-semibold text-green-400">
                {item.profit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
