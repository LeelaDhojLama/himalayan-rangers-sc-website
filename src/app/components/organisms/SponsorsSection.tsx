import { Award, Heart, Handshake } from "lucide-react";
import SponsorCard from "../molecules/SponsorCard";
import { sponsors, sponsorCategories } from "../../data/sponsorData";

export default function SponsorsSection() {
  // Group sponsors by category
  const sponsorsByCategory = {
    official_partner: sponsors.filter((s) => s.category === "official_partner"),
    annual_sponsor: sponsors.filter((s) => s.category === "annual_sponsor"),
    supporter: sponsors.filter((s) => s.category === "supporter"),
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center mr-3">
              <Handshake className="h-6 w-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our partners and sponsors who make it possible
            for us to grow and serve our community
          </p>
        </div>

        {/* Official Partners */}
        {sponsorsByCategory.official_partner.length > 0 && (
          <div className="">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {sponsorCategories.official_partner.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-8 max-w-4xl mx-auto">
              {sponsorsByCategory.official_partner.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  category={sponsor.category}
                />
              ))}
            </div>
          </div>
        )}

        {/* Annual Sponsors */}
        {sponsorsByCategory.annual_sponsor.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {sponsorCategories.annual_sponsor.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {sponsorsByCategory.annual_sponsor.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  category={sponsor.category}
                />
              ))}
            </div>
          </div>
        )}

        {/* Supporters */}
        {sponsorsByCategory.supporter.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {sponsorCategories.supporter.title}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
              {sponsorsByCategory.supporter.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  name={sponsor.name}
                  logo={sponsor.logo}
                  website={sponsor.website}
                  category={sponsor.category}
                />
              ))}
            </div>
          </div>
        )}

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border-2 border-blue-100">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Become a Partner
            </h3>
            <p className="text-gray-600 mb-6">
              Join our family of partners and sponsors and help us grow the
              beautiful game in the Himalayas
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-blue-700 hover:to-red-700 hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
