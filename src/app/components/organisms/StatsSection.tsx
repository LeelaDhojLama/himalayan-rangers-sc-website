import StatCard from "../molecules/StatCard";

const stats = [
  { id: 1, name: "Years Established", value: "2023" },
  { id: 2, name: "Games Played", value: "12" },
  { id: 3, name: "Active Players", value: "25+" },
  { id: 4, name: "Community Members", value: "150+" },
];

export default function StatsSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.id} name={stat.name} value={stat.value} />
          ))}
        </dl>
      </div>
    </div>
  );
}

