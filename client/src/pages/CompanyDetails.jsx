import React from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  FileText,
  Download,
  Globe,
  Mail,
  Phone,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";

const CompanyDetails = ({ companyId }) => {
  // This would normally be fetched based on companyId
  const companyData = {
    name: "Tech Innovators Inc",
    logo: "/api/placeholder/64/64",
    sector: "Software",
    description:
      "Revolutionary AI-powered software solutions for small businesses, focusing on automation and efficiency improvements through cutting-edge artificial intelligence and machine learning technologies.",
    founded: "2020",
    headquarters: "San Francisco, CA",
    website: "www.techinnovators.com",
    email: "contact@techinnovators.com",
    phone: "+1 (555) 123-4567",
    teamSize: "12",
    currentValuation: "2.5M",
    lastSalePrice: "50.00",
    growth: "+25%",
    benefits: [
      "Proprietary AI Technology",
      "Strong Market Position",
      "Rapid Revenue Growth",
      "Experienced Leadership Team",
      "Global Customer Base",
      "High Customer Retention",
    ],
    filings: [
      {
        id: 1,
        title: "Annual Report 2023",
        type: "Financial Report",
        date: "Dec 2023",
        size: "2.4 MB",
        icon: FileText,
      },
      {
        id: 2,
        title: "Q4 Financial Statement",
        type: "Quarterly Report",
        date: "Jan 2024",
        size: "1.8 MB",
        icon: FileText,
      },
      {
        id: 3,
        title: "Investment Memorandum",
        type: "Legal Document",
        date: "Feb 2024",
        size: "3.1 MB",
        icon: FileText,
      },
      {
        id: 4,
        title: "Due Diligence Report",
        type: "Analysis",
        date: "Mar 2024",
        size: "4.2 MB",
        icon: FileText,
      },
    ],
  };

  const handleDownload = (fileId) => {
    // Implementation for file download
    console.log(`Downloading file ${fileId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <img
                src={companyData.logo}
                alt={companyData.name}
                className="w-16 h-16 rounded-lg"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  {companyData.name}
                </h1>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {companyData.sector}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Valuation</p>
              <p className="text-2xl font-bold text-gray-900">
                ${companyData.currentValuation}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About the Company
              </h2>
              <p className="text-gray-600 mb-6">{companyData.description}</p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Founded</p>
                    <p className="font-medium">{companyData.founded}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Headquarters</p>
                    <p className="font-medium">{companyData.headquarters}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-500 mr-2" />
                  <p className="text-sm text-gray-500">Last Sale Price</p>
                </div>
                <p className="mt-2 text-xl font-semibold">
                  ${companyData.lastSalePrice}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <p className="text-sm text-gray-500">Team Size</p>
                </div>
                <p className="mt-2 text-xl font-semibold">
                  {companyData.teamSize} people
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <p className="text-sm text-gray-500">Growth</p>
                </div>
                <p className="mt-2 text-xl font-semibold text-green-500">
                  {companyData.growth}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-500 mr-2" />
                  <p className="text-sm text-gray-500">Recognition</p>
                </div>
                <p className="mt-2 text-xl font-semibold">Top 10</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Investment Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {companyData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <a
                    href={`https://${companyData.website}`}
                    className="text-blue-600 hover:underline"
                  >
                    {companyData.website}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {companyData.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{companyData.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Filings Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Company Filings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {companyData.filings.map((filing) => (
              <button
                key={filing.id}
                onClick={() => handleDownload(filing.id)}
                className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-300"
              >
                <filing.icon className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {filing.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{filing.type}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">{filing.date}</span>
                  <span>•</span>
                  <span className="ml-2">{filing.size}</span>
                </div>
                <div className="mt-4 flex items-center text-blue-600">
                  <Download className="h-4 w-4 mr-1" />
                  <span className="text-sm">Download</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
