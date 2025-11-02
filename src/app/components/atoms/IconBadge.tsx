import { LucideIcon } from "lucide-react";
import Icon from "./Icon";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "lighter";
  iconClassName?: string;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

const iconSizeClasses = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

const variantClasses = {
  light: "bg-white/10",
  lighter: "bg-white/20",
};

export default function IconBadge({
  icon,
  size = "md",
  variant = "light",
  iconClassName = "text-white",
}: IconBadgeProps) {
  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} backdrop-blur-sm rounded-full flex items-center justify-center`}
    >
      <Icon icon={icon} className={`${iconSizeClasses[size]} ${iconClassName}`} />
    </div>
  );
}

