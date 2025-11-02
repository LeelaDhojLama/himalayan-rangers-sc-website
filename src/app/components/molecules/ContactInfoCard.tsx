import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  details: string;
  action?: string | null;
  href?: string | null;
}

export default function ContactInfoCard({
  icon: Icon,
  title,
  details,
  action,
  href,
}: ContactInfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-red-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
        {details}
      </p>
      {action && href && (
        <a
          href={href}
          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium text-sm transition-colors"
        >
          {action}
        </a>
      )}
    </div>
  );
}

