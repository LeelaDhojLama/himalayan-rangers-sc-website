import { LucideIcon } from "lucide-react";
import IconBadge from "../atoms/IconBadge";
import { Heading, Paragraph } from "../atoms/Text";

interface BrandLogoProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function BrandLogo({
  icon,
  title,
  subtitle,
  align = "center",
}: BrandLogoProps) {
  const alignmentClasses =
    align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex items-center ${alignmentClasses} mb-6`}>
      <IconBadge icon={icon} size="md" variant="light" />
      <div className="text-left ml-4">
        <Heading level={1} className="text-2xl font-bold">
          {title}
        </Heading>
        <Paragraph className="text-lg text-blue-100">{subtitle}</Paragraph>
      </div>
    </div>
  );
}

