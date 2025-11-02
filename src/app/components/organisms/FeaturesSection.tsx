import { Trophy, Users, Target, Award } from "lucide-react";
import FeatureCard from "../molecules/FeatureCard";
import { Heading, Paragraph } from "../atoms/Text";

const features = [
  {
    name: "Growing Together",
    description:
      "Building our team and skills through dedicated training and practice sessions.",
    icon: Target,
  },
  {
    name: "Team Spirit",
    description:
      "Fostering strong bonds and teamwork as we grow as a club family.",
    icon: Users,
  },
  {
    name: "Game Experience",
    description:
      "Participating in local matches and tournaments to gain valuable experience.",
    icon: Trophy,
  },
  {
    name: "Future Champions",
    description:
      "Developing young talent and building the foundation for future success.",
    icon: Award,
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Heading
            level={2}
            className="text-base font-semibold leading-7 text-blue-600"
          >
            Excellence in Sports
          </Heading>
          <Paragraph className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Himalayan Rangers SC?
          </Paragraph>
          <Paragraph className="mt-6 text-lg leading-8 text-gray-600">
            We are committed to developing not just skilled athletes, but
            well-rounded individuals who embody the values of sportsmanship,
            dedication, and community spirit.
          </Paragraph>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard
                key={feature.name}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

