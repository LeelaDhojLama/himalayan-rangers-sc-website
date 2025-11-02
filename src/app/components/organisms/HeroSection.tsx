import Link from "next/link";
import { ArrowRight, Play, Mountain } from "lucide-react";
import BrandLogo from "../molecules/BrandLogo";
import { Heading, Paragraph } from "../atoms/Text";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-image.webp')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-red-900/20"></div>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl min-h-screen flex pb-40 items-end justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-center lg:text-left">
            <Heading
              level={2}
              className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
            >
              Building Champions
              <span className="block text-red-300">From the Ground Up</span>
            </Heading>

            {/*<Paragraph className="text-xl leading-8 text-blue-100 mb-8 max-w-2xl">
              A new sports club with big dreams! Join our growing community as
              we build something special together in the heart of the Himalayas.
            </Paragraph>*/}

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/team"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 bg-red-600 text-white hover:bg-red-700 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 px-8 py-4 text-lg shadow-lg"
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
