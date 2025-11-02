import { LucideIcon } from "lucide-react";
import ContactInfoCard from "../molecules/ContactInfoCard";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  action?: string | null;
  href?: string | null;
}

interface ContactInfoSectionProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo[];
}

export default function ContactInfoSection({
  title,
  subtitle,
  contactInfo,
}: ContactInfoSectionProps) {
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
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              details={info.details}
              action={info.action}
              href={info.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

