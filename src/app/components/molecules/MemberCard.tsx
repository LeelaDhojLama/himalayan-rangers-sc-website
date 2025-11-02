import { Mail, Phone, Linkedin } from "lucide-react";

interface MemberCardProps {
  name: string;
  position: string;
  description: string;
  email: string;
  phone: string;
  linkedin?: string;
}

export default function MemberCard({
  name,
  position,
  description,
  email,
  phone,
  linkedin,
}: MemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Profile Header with Gradient */}
      <div className="h-64 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 flex items-center justify-center text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

        {/* Initials */}
        <div className="relative z-10">
          <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-5xl font-black">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-red-100 rounded-full">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            {position}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pb-6">
        <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
          {description}
        </p>

        {/* Contact Links */}
        <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            title="Phone"
          >
            <Phone className="h-4 w-4" />
          </a>
          {linkedin && (
            <a
              href={linkedin}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
