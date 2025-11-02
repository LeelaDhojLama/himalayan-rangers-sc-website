"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactInfoSection from "../organisms/ContactInfoSection";
import ContactForm from "../organisms/ContactForm";
import MapCard from "../molecules/MapCard";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: " 3B Zinnia Way, Willetton, Perth, WA",
    action: "Get Directions",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+977 1 234 5678\n+977 98 765 4321",
    action: "Call Now",
    href: "tel:+97712345678",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "info@himalayanrangerssc.com\nadmin@himalayanrangerssc.com",
    action: "Send Email",
    href: "mailto:info@himalayanrangerssc.com",
  },

];

const departments = [
  { name: "General Inquiries", email: "info@himalayanrangerssc.com" },
  { name: "Player Registration", email: "registration@himalayanrangerssc.com" },
  { name: "Coaching Staff", email: "coaching@himalayanrangerssc.com" },
  { name: "Sponsorship", email: "sponsorship@himalayanrangerssc.com" },
  { name: "Media Relations", email: "media@himalayanrangerssc.com" },
];

export default function ContactTemplate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-red-900/50"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-12 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
          <Mail className="h-7 w-7 text-white" />
        </div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <div className="absolute bottom-24 left-20 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
          <MapPin className="h-5 w-5 text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Get in touch with Himalayan Rangers SC. We&apos;d love to hear
              from you and welcome you to our sporting family!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <ContactInfoSection
        title="Get In Touch"
        subtitle="Multiple ways to reach us for any questions or inquiries"
        contactInfo={contactInfo}
      />

      {/* Contact Form and Map Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Send us a Message
              </h2>
              <ContactForm departments={departments} />
            </div>

            {/* Map and Department List */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Find Us
              </h2>
              <MapCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

