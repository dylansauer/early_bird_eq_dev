import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const navigate = useNavigate();
  const initialListings = [
    {
      id: 1,
      company: "Tech Innovators Inc",
      sector: "Software",
      lastSalePrice: "50.00",
      currentValuation: "2.5M",
      description:
        "Revolutionary AI-powered software solutions for small businesses",
      teamSize: "12",
      growth: "+25%",
    },
    {
      id: 2,
      company: "Green Energy Solutions",
      sector: "Clean Energy",
      lastSalePrice: "76.00",
      currentValuation: "3.2M",
      description: "Sustainable energy solutions for residential properties",
      teamSize: "8",
      growth: "+18%",
    },
    {
      id: 3,
      company: "HealthTech Pioneers",
      sector: "Healthcare",
      lastSalePrice: "109.00",
      currentValuation: "4.5M",
      description: "Digital health monitoring platforms for elderly care",
      teamSize: "15",
      growth: "+30%",
    },
    {
      id: 4,
      company: "FinTech Solutions Co",
      sector: "Finance",
      lastSalePrice: "60.33",
      currentValuation: "2.8M",
      description:
        "Blockchain-based payment solutions for cross-border transactions",
      teamSize: "10",
      growth: "+22%",
    },
    {
      id: 5,
      company: "EduTech Ventures",
      sector: "Education",
      lastSalePrice: "201.00",
      currentValuation: "1.8M",
      description: "Online learning platform with AI-powered personalization",
      teamSize: "7",
      growth: "+20%",
    },
    {
      id: 6,
      company: "AgriTech Solutions",
      sector: "Agriculture",
      lastSalePrice: "110.00",
      currentValuation: "2.1M",
      description: "Smart farming solutions using IoT and data analytics",
      teamSize: "9",
      growth: "+15%",
    },
    {
      id: 7,
      company: "FinTech Solutions Co",
      sector: "Finance",
      lastSalePrice: "321.00",
      currentValuation: "2.8M",
      description:
        "Blockchain-based payment solutions for cross-border transactions",
      teamSize: "10",
      growth: "+22%",
    },
    {
      id: 8,
      company: "EduTech Ventures",
      sector: "Education",
      lastSalePrice: "315.10",
      currentValuation: "1.8M",
      description: "Online learning platform with AI-powered personalization",
      teamSize: "7",
      growth: "+20%",
    },
    {
      id: 9,
      company: "AgriTech Solutions",
      sector: "Agriculture",
      lastSalePrice: "550.00",
      currentValuation: "2.1M",
      description: "Smart farming solutions using IoT and data analytics",
      teamSize: "9",
      growth: "+15%",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Viewing company");
    navigate("/home/details");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [listings, setListings] = useState(initialListings);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setListings(initialListings);
    } else {
      const filtered = initialListings.filter(
        (listing) =>
          listing.company.toLowerCase().includes(term) ||
          listing.sector.toLowerCase().includes(term) ||
          listing.description.toLowerCase().includes(term)
      );
      setListings(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-900">
            Explore Investment Opportunities
          </h2>
          <div className="w-full max-w-2xl relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by company, sector, or description..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 line-clamp-2 mb-1">
                      {listing.company}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {listing.sector}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 overflow-hidden line-clamp-2 text-ellipsis">
                    {listing.description}
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">
                            Last Sale Price
                          </p>
                          <p className="font-medium">
                            ${listing.lastSalePrice}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Team Size</p>
                          <p className="font-medium">
                            {listing.teamSize} people
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Valuation</p>
                          <p className="font-medium">
                            ${listing.currentValuation}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                        <div>
                          <p className="text-sm text-gray-500">Growth</p>
                          <p className="font-medium text-green-500">
                            {listing.growth}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
                  onClick={handleSubmit}
                >
                  <span>View Company</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {listings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No matching companies found. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;
