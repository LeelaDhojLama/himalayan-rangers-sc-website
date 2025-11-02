import Link from "next/link";
import { Users, Trophy, ArrowRight } from "lucide-react";
import IconGroup from "../molecules/IconGroup";
import { Heading, Paragraph } from "../atoms/Text";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-900/20 to-blue-900/20"></div>

      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <IconGroup icons={[Users, Trophy]} size="md" variant="lighter" />

          <Heading
            level={2}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6"
          >
            Ready to Join Our Team?
          </Heading>

          <Paragraph className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-red-100 mb-10">
            Whether you&apos;re a seasoned player or just starting your journey,
            Himalayan Rangers SC welcomes you to be part of our sporting family
            in the heart of the Himalayas.
          </Paragraph>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 bg-white text-red-600 hover:bg-red-50 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-8 py-4 text-lg shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" />
              Get Started Today
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-8 py-4 text-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

