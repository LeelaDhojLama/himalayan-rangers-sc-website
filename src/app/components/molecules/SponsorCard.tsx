interface SponsorCardProps {
  name: string;
  logo?: string;
  website?: string;
  category: "official_partner" | "annual_sponsor" | "supporter";
}

export default function SponsorCard({
  name,
  logo,
  website,
  category,
}: SponsorCardProps) {
  const CardContent = () => (
    <div className="bg-white rounded-lg p-3 transition-all duration-300 hover:shadow-lg hover:border-gray-300 group">
      {/* Logo */}
      {logo ? (
        <div className="flex items-center justify-center h-32 ">
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 ">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-gray-400">
                {name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Name */}
      <div className="text-center">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {name}
        </h3>
      </div>
    </div>
  );

  if (website) {
    return (
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
}
