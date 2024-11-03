import React from "react";
import { ArrowRight, BarChart2, Shield, Users } from "lucide-react";

const LandingPage = () => {
  // Features data for the platform
  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Direct Connection",
      description:
        "Connect directly with businesses seeking funding, eliminating traditional VC intermediaries",
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-blue-600" />,
      title: "Transparent Trading",
      description:
        "Real-time visibility of buy/sell prices and market movements",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Platform",
      description:
        "Enterprise-grade security protecting your investments and data",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                Early Bird Equity
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Features
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Login
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Democratizing</span>
                  <span className="block text-blue-600">Business Funding</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Connect directly with promising startups and small businesses.
                  Invest in their growth without the complexity of traditional
                  venture capital.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose Our Platform
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
