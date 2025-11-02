import { LucideIcon } from "lucide-react";
import IconBadge from "../atoms/IconBadge";

interface IconGroupProps {
  icons: LucideIcon[];
  size?: "sm" | "md" | "lg";
  variant?: "light" | "lighter";
}

export default function IconGroup({
  icons,
  size = "md",
  variant = "lighter",
}: IconGroupProps) {
  return (
    <div className="flex items-center justify-center mb-6">
      {icons.map((icon, index) => (
        <div key={index} className={index > 0 ? "ml-4" : ""}>
          <IconBadge icon={icon} size={size} variant={variant} />
        </div>
      ))}
    </div>
  );
}

