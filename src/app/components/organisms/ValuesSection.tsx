import { LucideIcon } from "lucide-react";
import ValueCard from "../molecules/ValueCard";

interface OrganizationalValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title: string;
  subtitle: string;
  values: OrganizationalValue[];
}

export default function ValuesSection({
  title,
  subtitle,
  values,
}: ValuesSectionProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

