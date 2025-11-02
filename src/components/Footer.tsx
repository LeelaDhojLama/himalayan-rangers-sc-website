import Link from "next/link";
import {
  Mountain,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
    { name: "Management", href: "/management" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-red-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-red-900/30"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-400 to-red-400 rounded-full flex items-center justify-center shadow-lg">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Himalayan Rangers
                </span>
                <span className="text-xs text-red-300 font-semibold">
                  SPORTS CLUB
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              A premier sports club dedicated to excellence, teamwork, and
              community spirit. Building champions on and off the field.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Mountain View Road, Kathmandu, Nepal
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">+977 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-300">
                  info@himalayanrangerssc.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            &copy; 2024 Himalayan Rangers SC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
