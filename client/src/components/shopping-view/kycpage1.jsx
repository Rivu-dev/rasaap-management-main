import React, { useState } from 'react';

const KYCPage = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    vendorName: '',
    billingName: '',
    clientType: '',
    location: '',
    contactPersonName: '',
    contactPersonPhone: '',
    websiteType: '',
    featuresRequired: '',
    clientServices: '',
    logo: null,
    otherImages: [],
    displayPhone: '',
    displayAddress: '',
    displayEmail: '',
    notes: '',
    billingAmount: ''
  });

  const vendorOptions = [
    'Rasaap Info Solution',
    'Clever In Digital',
    'RJS'
  ];

  const clientTypeOptions = [
    "Doctor's Clinic", "Hospital", "Education Consultancy", "College", 
    "Saloon", "Food & Beverage", "News", "Astrology", "Bakery", 
    "Electronics", "Travel Agency", "FMCG", "Diagnostic Centre", 
    "Interior Decoration", "Paper Plate Manufacturing", "Dental Clinic", 
    "Medicine Distributor & Dealer", "Garments Retail", "School", 
    "Pharmacy", "Politician", "Jwellery", "Others"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (type === 'file') {
      if (name === 'logo') {
        setFormData({
          ...formData,
          [name]: files[0]
        });
      } else if (name === 'otherImages') {
        setFormData({
          ...formData,
          [name]: Array.from(files)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('KYC Form Submitted Successfully!');
  };

  const HeroSection = () => {
    return (
      <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-6 h-[12vh] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute left-0 top-0 w-full h-[7.5vh] opacity-20"></div>
          {/* Original large blurred circles */}
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-15 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-red-400 rounded-full opacity-15 blur-xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
          {/* Additional decorative shapes */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-pink-100 rounded-full opacity-30"></div>
          {/* Medium floating circles with animation */}
          <div className="absolute top-1/3 left-20 w-24 h-24 bg-pink-400 rounded-full opacity-15 blur-lg animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-red-300 rounded-full opacity-20 blur-md"></div>
          {/* Rounded rectangles */}
          <div className="absolute bottom-1/3 left-20 w-40 h-24 bg-red-400 rounded-3xl opacity-15 rotate-12 blur-lg"></div>
          <div className="absolute top-1/3 right-10 w-32 h-16 bg-pink-300 rounded-2xl opacity-20 -rotate-6 blur-md"></div>
          {/* Additional small shapes */}
          <div className="absolute top-3/4 left-1/2 w-5 h-5 bg-white rounded-full opacity-25"></div>
          <div className="absolute top-1/4 left-10 w-12 h-12 bg-pink-200 rounded-full opacity-20 blur-sm"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-200 rounded-full opacity-15 blur-sm animate-bounce"></div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <HeroSection/>
    <div className="min-h-screen bg-pink-50 py-8 px-4">
      <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-700">KYC Registration Form</h1>
          <p className="text-pink-600 mt-2">Please fill all the required details</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Client Name */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Client Name *</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              placeholder='Client Name'
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Vendor Name Dropdown */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Vendor Name *</label>
            <select
              name="vendorName"
              value={formData.vendorName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Select Vendor</option>
              {vendorOptions.map((vendor, index) => (
                <option key={index} value={vendor}>{vendor}</option>
              ))}
            </select>
          </div>

          {/* Billing Name */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Billing Name *</label>
            <input
              type="text"
              name="billingName"
              value={formData.billingName}
              onChange={handleChange}
              required
              placeholder='Billing Details'
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Client Type Dropdown */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Client Type *</label>
            <select
              name="clientType"
              value={formData.clientType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Select Client Type</option>
              {clientTypeOptions.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Location (District, State) *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Kolkata, West Bengal"
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Contact Person */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-pink-700 font-medium mb-2">Contact Person Name *</label>
              <input
                type="text"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
                placeholder='Contact Person name'
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label className="block text-pink-700 font-medium mb-2">Contact Person Phone Number *</label>
              <input
                type="tel"
                name="contactPersonPhone"
                value={formData.contactPersonPhone}
                onChange={handleChange}
                required
                placeholder='Contact Person Phone Number'
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
          </div>

          {/* Website Type Radio Buttons */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Website Type *</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="websiteType"
                  value="Static Website"
                  checked={formData.websiteType === 'Static Website'}
                  onChange={handleChange}
                  required
                  className="h-5 w-5 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700">Static Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="websiteType"
                  value="Dynamic Website"
                  checked={formData.websiteType === 'Dynamic Website'}
                  onChange={handleChange}
                  className="h-5 w-5 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700">Dynamic Website</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="websiteType"
                  value="E-commerce"
                  checked={formData.websiteType === 'E-commerce'}
                  onChange={handleChange}
                  className="h-5 w-5 text-pink-600 focus:ring-pink-500"
                />
                <span className="text-gray-700">E-commerce</span>
              </label>
            </div>
          </div>

          {/* Features Required (Conditional) */}
          {(formData.websiteType === 'Dynamic Website' || formData.websiteType === 'E-commerce') && (
            <div>
              <label className="block text-pink-700 font-medium mb-2">Features Required</label>
              <textarea
                name="featuresRequired"
                value={formData.featuresRequired}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                rows="3"
                placeholder="Describe the features you need..."
              />
            </div>
          )}

          {/* Client Services */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Client Services or Products *</label>
            <textarea
              name="clientServices"
              value={formData.clientServices}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              rows="3"
              placeholder="Describe the services or products offered by the client..."
            />
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Logo *</label>
            <input
              type="file"
              name="logo"
              onChange={handleChange}
              required
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-pink-50 file:text-pink-700
                hover:file:bg-pink-100"
            />
          </div>

          {/* Other Images Upload */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Other Images</label>
            <input
              type="file"
              name="otherImages"
              onChange={handleChange}
              multiple
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-pink-50 file:text-pink-700
                hover:file:bg-pink-100"
            />
          </div>

          {/* Display Options */}
          <div>
          <label className="block mb-1 text-pink-600 font-medium">Display Phone Number</label>
          <input
            type="text"
            name="displayPhone"
            value={formData.displayPhone}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
            placeholder="Enter display phone number"
          />
        </div>
        {/* 14. Display Address */}
        <div>
          <label className="block mb-1 text-pink-600 font-medium">Display Address</label>
          <input
            type="text"
            name="displayAddress"
            value={formData.displayAddress}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
            placeholder="Enter display address"
          />
        </div>
        {/* 15. Display Email id */}
        <div>
          <label className="block mb-1 text-pink-600 font-medium">Display Email ID</label>
          <input
            type="email"
            name="displayEmail"
            value={formData.displayEmail}
            onChange={handleChange}
            className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
            placeholder="Enter display email"
          />
        </div>

          {/* Notes */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Notes / Client Request</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              rows="3"
              placeholder="Any special requests or notes..."
            />
          </div>

          {/* Billing Amount */}
          <div>
            <label className="block text-pink-700 font-medium mb-2">Billing Amount *</label>
            <input
              type="number"
              name="billingAmount"
              value={formData.billingAmount}
              onChange={handleChange}
              required
              placeholder='Billing Amount'
              className="w-full px-4 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Submit KYC Form
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default KYCPage;