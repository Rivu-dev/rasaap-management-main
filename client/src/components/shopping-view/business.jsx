import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute left-0 top-0 w-full h-full  opacity-20"></div>

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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {/* <a 
                href="#services" 
                className="px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors" 
              > 
                Explore Services 
              </a>  */}
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Business Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default function BusinessDetails() {
  const navigate = useNavigate();
  return (
    <div>
  <HeroSection />
  <div className="min-h-screen bg-white w-full">
    {/* Header */}
    {/* Main Content */}
    <div className="mx-auto mt-8 flex flex-col md:flex-row w-[95%] md:w-[85%] gap-8">
      {/* Square Card */}
      <div className="bg-white rounded-2xl shadow-lg border-t-4 border-pink-500 flex flex-col items-center justify-center aspect-square w-full max-w-xs min-w-0 md:w-64 md:min-w-64 md:max-w-64 h-64 mx-auto md:mx-0">
        <div className="text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
          NETPOOL
        </div>
        <div className="text-lg font-semibold text-gray-700 mb-1">
          netpool
        </div>
        <button className="text-pink-500 font-semibold text-lg hover:underline" onClick={() => navigate("./profile")}>
          EDIT
        </button>
      </div>
      {/* Menu Buttons */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
      <div className="justify-center">
        <a href="./billing">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
              💳
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Billing Details
            </span>
          </div>
          </a>
      </div>
      <div className="justify-center">
        <a href="./selectbusiness">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            🖼️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Gallery
            </span>
          </div>
          </a>
       
      </div>
      <div className="justify-center">
        <a href="./notification">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            🔔
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Notifications
            </span>
          </div>
          </a>
       
      </div>
      <div className="justify-center">
        <a href="./kycpage1">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            🛠️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Support
            </span>
          </div>
          </a>
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            🔗
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Share App
            </span>
          </div>
       
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            ℹ️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            About Us
            </span>
          </div>
       
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            ℹ️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Terms & Conditions
            </span>
          </div>
       
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            🛡️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Privacy & Policy
            </span>
          </div>
       
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            📞
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Contact
            </span>
          </div>
       
      </div>
      <div className="justify-center">
          <div
            className="flex items-center gap-4 bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 rounded-xl shadow-md px-6 py-4 transition-all border-l-4 border-pink-400 hover:border-red-400 mb-6 cursor-pointer"
          >
            <div className="text-3xl md:text-4xl">
            ↩️
            </div>
            <span className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
            Log Out
            </span>
          </div>
       
      </div>
      </div>
    </div>
  </div>
</div>
  );
}
