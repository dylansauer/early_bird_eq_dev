import React, { useState } from "react";
import { DollarSign, CreditCard, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DepositPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Deposit submitted:", formData);
    navigate("..");
  };

  const quickAmounts = [100, 250, 500, 1000];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-start py-8 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-2 text-center text-4xl font-extrabold text-gray-900">
          Make a Deposit
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Add funds to your account securely
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-10 px-8 shadow-xl rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Amount Field */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount to Deposit
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>

              {/* Quick Amount Buttons */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {quickAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        amount: amount.toString(),
                      }))
                    }
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Details Section */}
            <div className="pt-4">
              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-600">
                  Payment Details
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>

            {/* Card Number Field */}
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  required
                  maxLength="19"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Expiry Date and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  name="expiryDate"
                  type="text"
                  required
                  maxLength="5"
                  className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  required
                  maxLength="4"
                  className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Total and Submit Button */}
            <div className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Total Amount:
                </span>
                <span className="text-lg font-bold text-gray-900">
                  ${formData.amount || "0.00"}
                </span>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                onClick={handleSubmit}
              >
                <Wallet className="h-5 w-5 mr-2" />
                Complete Deposit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
