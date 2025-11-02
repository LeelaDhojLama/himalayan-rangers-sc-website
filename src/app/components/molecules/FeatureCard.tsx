import { LucideIcon } from "lucide-react";
import Icon from "../atoms/Icon";

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  name,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
        <Icon icon={icon} className="h-5 w-5 flex-none text-blue-600" />
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
        <p className="flex-auto">{description}</p>
      </dd>
    </div>
  );
}

