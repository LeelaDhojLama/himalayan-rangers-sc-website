export interface Sponsor {
  id: number;
  name: string;
  logo?: string;
  category: "official_partner" | "annual_sponsor" | "supporter";
  website?: string;
}

export const sponsors: Sponsor[] = [
  // Official Partners
  {
    id: 1,
    name: "EduHub Global Perth",
    category: "official_partner",
    logo: "/images/sponsors/eduhub.png",
    website: "#",
  },

  // Annual Sponsors
  {
    id: 2,
    name: "Aussie Finance And Home Loans",
    category: "annual_sponsor",
    logo: "/images/sponsors/aussie_finance.png",
    website: "#",
  },

  // Supporters
  {
    id: 7,
    name: "Sulux Events",
    category: "supporter",
    logo: "/images/sponsors/sulux.png",
    website: "#",
  },
];

export const sponsorCategories = {
  official_partner: {
    title: "Official Partners",
    color: "from-blue-500 to-red-500",
    textColor: "text-blue-700",
    bgColor: "bg-gradient-to-br from-blue-50 to-red-50",
    borderColor: "border-blue-300",
  },
  annual_sponsor: {
    title: "Annual Sponsors",
    color: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-700",
    bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-300",
  },
  supporter: {
    title: "Supporters",
    color: "from-green-400 to-green-600",
    textColor: "text-green-700",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100",
    borderColor: "border-green-300",
  },
};
