import {
  Award,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import ValuesSection from "../organisms/ValuesSection";
import ManagementTeamSection from "../organisms/ManagementTeamSection";
import { managementTeam } from "../../data/teamData";

const organizationalValues = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "Striving for the highest standards in everything we do, from player development to community engagement.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Building strong relationships and fostering collaboration both within our organization and the broader community.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Continuously improving and evolving to meet the changing needs of our players and supporters.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Maintaining the highest ethical standards and being transparent in all our dealings and decisions.",
  },
];

export default function AboutUsTemplate() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-red-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-red-900/50"></div>

        {/* Floating Icons */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center animate-pulse">
          <Target className="h-7 w-7 text-white" />
        </div>
        <div className="absolute top-24 right-12 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center animate-bounce">
          <Award className="h-6 w-6 text-white" />
        </div>
        <div className="absolute bottom-20 left-16 w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
          <TrendingUp className="h-5 w-5 text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              About Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Learn about Himalayan Rangers SC and the dedicated people who make
              our club special
            </p>
          </div>
        </div>
      </div>

      {/* Organizational Values */}
      <ValuesSection
        title="Our Values"
        subtitle="The core principles that guide our organization and decision-making"
        values={organizationalValues}
      />

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-blue-50 to-red-50 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To build a strong foundation for football excellence in the
              Himalayas. Starting from humble beginnings in 2023, we are
              committed to developing talented players, fostering community
              spirit, and creating opportunities for young athletes to grow both
              on and off the field as we build our club&apos;s legacy together.
            </p>
          </div>
        </div>
      </div>

      {/* Management Team */}
      <ManagementTeamSection
        title="Meet Our Team"
        subtitle="The dedicated people behind Himalayan Rangers SC"
        members={managementTeam}
      />
    </div>
  );
}

