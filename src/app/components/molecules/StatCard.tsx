interface StatCardProps {
  name: string;
  value: string;
}

export default function StatCard({ name, value }: StatCardProps) {
  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-gray-600">{name}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {value}
      </dd>
    </div>
  );
}

