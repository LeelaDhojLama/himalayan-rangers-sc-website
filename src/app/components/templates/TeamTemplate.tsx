import { Shield, Users, Star, Award } from "lucide-react";
import ManagementTeamSection from "../organisms/ManagementTeamSection";
import { executiveBoard, generalMembers, advisors } from "../../data/teamData";

export default function TeamTemplate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-red-900/50"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
          <Award className="h-6 w-6 text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Our Team
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Meet the dedicated management team who are building Himalayan
              Rangers SC with passion, commitment, and a vision for excellence
            </p>
          </div>
        </div>
      </div>

      {/* Executive Board Section */}
      <ManagementTeamSection
        title="Executive Board"
        subtitle="The leadership team steering our club towards success"
        members={executiveBoard}
      />

      {/* General Members Section */}
      <ManagementTeamSection
        title="General Members"
        subtitle="Active contributors supporting our club's growth and community engagement"
        members={generalMembers}
      />

      {/* Advisors Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advisors
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert guidance and strategic counsel for our club&apos;s development
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Profile Header */}
                <div className="h-64 bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-600 flex items-center justify-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-5xl font-black">
                        {advisor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {advisor.name}
                  </h3>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                    <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
                      {advisor.position}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {advisor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="bg-gradient-to-br from-blue-50 to-red-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Vision
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Together, we are committed to building a strong foundation for
              football excellence in the Himalayas. Through dedication,
              teamwork, and community engagement, we strive to create
              opportunities for growth both on and off the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

