import { MapPin } from "lucide-react";

export default function MapCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-green-100 to-red-100 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
        {/* Mountain Range Illustration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/20 to-transparent">
          <div className="absolute bottom-0 left-1/4 w-20 h-16 bg-blue-500/30 transform rotate-12 rounded-t-full"></div>
          <div className="absolute bottom-0 right-1/4 w-16 h-12 bg-red-500/30 transform -rotate-6 rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/2 w-12 h-8 bg-blue-400/40 transform rotate-3 rounded-t-full"></div>
        </div>

        {/* Location Pin */}
        <div className="text-center text-gray-600 relative z-10">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <p className="text-sm font-semibold">Himalayan Rangers SC</p>
          <p className="text-xs">3B Zinnia Way, Willetton, Perth, WA</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-6 h-6 bg-blue-400/20 rounded-full"></div>
        <div className="absolute top-8 right-6 w-4 h-4 bg-red-400/20 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-3 h-3 bg-green-400/20 rounded-full"></div>
      </div>
      <div className="text-center">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-red-600 hover:text-red-800 font-medium transition-colors"
        >
          <MapPin className="h-4 w-4 mr-1" />
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
