import React, { useState } from "react";
import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import {
  FaMusic,
  FaStar,
  FaCar,
  FaBirthdayCake,
  FaUniversity,
  FaBroom,
  FaLaptop,
  FaCheese,
  FaTshirt,
  FaChalkboardTeacher,
  FaGlasses,
  FaGem,
  FaHeartbeat,
  FaCouch,
  FaClinicMedical,
  FaHotel,
  FaFlask,
  FaGavel,
  FaTruck,
  FaPills,
  FaMobileAlt,
  FaCamera,
  FaHome,
  FaUtensils,
  FaCode,
  FaSun,
  FaSpa,
  FaShoppingCart,
  FaQuestion,
} from "react-icons/fa";

const categoryIcons = {
  "Art & Entertainment": <FaMusic className="text-pink-500" />,
  Astrology: <FaStar className="text-yellow-500" />,
  Automobile: <FaCar className="text-blue-500" />,
  "Bakery and Cake": <FaBirthdayCake className="text-pink-400" />,
  "Banking & Finance": <FaUniversity className="text-green-600" />,
  "Cleaning & Pest Control": <FaBroom className="text-gray-600" />,
  "Computer & Networking": <FaLaptop className="text-indigo-500" />,
  "Dairy & Sweets": <FaCheese className="text-yellow-400" />,
  "Dry Cleaners": <FaBroom className="text-blue-400" />,
  "Education & Coaching": <FaChalkboardTeacher className="text-green-500" />,
  "Ethnic Wear": <FaTshirt className="text-red-400" />,
  "Electronics & Appliances": <FaLaptop className="text-gray-700" />,
  "Event & Exhibition": <FaStar className="text-purple-500" />,
  "Eye Wears": <FaGlasses className="text-blue-300" />,
  "Gems & Jewellery": <FaGem className="text-yellow-400" />,
  "Health & Fitness": <FaHeartbeat className="text-red-500" />,
  "Home Decor & Furniture": <FaCouch className="text-pink-700" />,
  "Homeopathy & Ayurvedic": <FaHeartbeat className="text-green-400" />,
  "Hospital & Clinics": <FaClinicMedical className="text-red-400" />,
  Hotels: <FaHotel className="text-yellow-700" />,
  Laboratory: <FaFlask className="text-blue-700" />,
  "Legal & Accounting": <FaGavel className="text-gray-800" />,
  "Logistics & Transports": <FaTruck className="text-orange-500" />,
  "Medical & Pharmacy": <FaPills className="text-green-700" />,
  "Mobile & Accessories": <FaMobileAlt className="text-blue-600" />,
  Other: <FaQuestion className="text-gray-400" />,
  "Photography & Videography": <FaCamera className="text-purple-400" />,
  "Real Estate": <FaHome className="text-green-800" />,
  "Restaurants & Cafes": <FaUtensils className="text-pink-600" />,
  "Software & Technology": <FaCode className="text-indigo-600" />,
  Solar: <FaSun className="text-yellow-500" />,
  "Spa & Salon": <FaSpa className="text-pink-300" />,
  "Supermarket & Grocery Store": <FaShoppingCart className="text-green-500" />,
};

const categoryColors = [
  "bg-pink-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-purple-50",
  "bg-red-50",
  "bg-indigo-50",
  "bg-orange-50",
];

const categories = [
  "Art & Entertainment",
  "Astrology",
  "Automobile",
  "Bakery and Cake",
  "Banking & Finance",
  "Cleaning & Pest Control",
  "Computer & Networking",
  "Dairy & Sweets",
  "Dry Cleaners",
  "Education & Coaching",
  "Ethnic Wear",
  "Electronics & Appliances",
  "Event & Exhibition",
  "Eye Wears",
  "Gems & Jewellery",
  "Health & Fitness",
  "Home Decor & Furniture",
  "Homeopathy & Ayurvedic",
  "Hospital & Clinics",
  "Hotels",
  "Laboratory",
  "Legal & Accounting",
  "Logistics & Transports",
  "Medical & Pharmacy",
  "Mobile & Accessories",
  "Other",
  "Photography & Videography",
  "Real Estate",
  "Restaurants & Cafes",
  "Software & Technology",
  "Solar",
  "Spa & Salon",
  "Supermarket & Grocery Store",
];

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

function getCategoryColor(idx) {
  return categoryColors[idx % categoryColors.length];
}

export default function BusinessCategory() {
  const [businessName, setBusinessName] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <HeroSection />
      <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10 px-2">
        <div className="w-full bg-white rounded-2xl shadow-lg p-8 relative">
          <button className="absolute top-4 right-4 text-pink-600 hover:text-pink-600 transition-colors">
            <FaQuestionCircle size={22} />
          </button>
          <h1 className="text-2xl font-bold text-pink-600 mb-1">
            What's your business
          </h1>
          <p className="text-gray-500 mb-6">
            Let us know, which of the following describe the business
          </p>
          <label className="block mb-2 text-sm font-medium text-pink-600">
            Business name
          </label>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border border-pink-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
            placeholder="Enter business name"
          />
          <label className="block mb-2 text-sm font-medium text-pink-600">
            Select business category
          </label>
          <div className="relative mb-4">
            <span className="absolute left-3 top-2.5 text-pink-400">
              <FaSearch />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-pink-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700"
              placeholder="Search business category"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-h-72 overflow-y-auto mb-6">
            {filteredCategories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`flex items-center gap-3 border rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                  selected === cat
                    ? "bg-pink-100 border-pink-600 text-pink-700 shadow"
                    : `${getCategoryColor(
                        idx
                      )} border-pink-200 text-gray-700 hover:bg-pink-50 hover:border-pink-500`
                }`}
              >
                <span className="text-lg">
                  {categoryIcons[cat] || (
                    <FaQuestion className="text-gray-400" />
                  )}
                </span>
                <span className="flex-1 text-left">{cat}</span>
                {selected === cat && (
                  <span className="inline-block w-2 h-2 rounded-full bg-pink-500 ml-2"></span>
                )}
              </button>
            ))}
          </div>
          <button
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors text-lg"
            disabled={!businessName || !selected}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
