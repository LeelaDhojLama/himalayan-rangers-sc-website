import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}

export default function Icon({
  icon: IconComponent,
  className = "",
  size,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <IconComponent
      className={className}
      size={size}
      aria-hidden={ariaHidden}
    />
  );
}

