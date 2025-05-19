import React, { useState } from "react";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const BillingDetails = () => {
  const [form, setForm] = useState({
    gst: "",
    name: "",
    address: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };0

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.gst) newErrors.gst = "GST Number is required";
    if (!form.state) newErrors.state = "State is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit logic here
      alert("Billing details saved!");
    }
  };

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
                Notification
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <HeroSection />
      <div className="min-h-screen flex items-center justify-center bg-white py-10 px-2">
        <div className="bg-white rounded-3xl shadow-2xl w-full p-8 md:p-10">
          <button
            className="mb-4 text-gray-500 hover:text-pink-600 focus:outline-none"
            onClick={() => window.history.back()}
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-80 mb-6">
            Billing Details
          </h1>
          <div className="mb-6 flex items-center bg-pink-100 rounded-xl p-4 gap-4">
            <div className="flex-shrink-0">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                <rect width="48" height="48" rx="12" fill="#FDE68A" />
                <text
                  x="24"
                  y="30"
                  textAnchor="middle"
                  fontSize="18"
                  fill="#F59E42"
                  fontFamily="Arial"
                >
                  TAX
                </text>
              </svg>
            </div>
            <div>
              <div className="text-gray-800 font-medium">
                Get GST Invoice and Claim 18% GST Credit on your payments
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-pink-600 font-medium mb-1">
                GST Number{" "}
                <span className="text-gray-400 font-normal">(required)</span>
              </label>
              <input
                type="text"
                name="gst"
                value={form.gst}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                  errors.gst ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.gst && (
                <div className="text-red-500 text-sm mt-1">{errors.gst}</div>
              )}
            </div>
            <div>
              <label className="block text-pink-600 font-medium mb-1">
                Registered Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-pink-600 font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-pink-600 font-medium mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="block text-pink-600 font-medium mb-1">
                State{" "}
                <span className="text-gray-400 font-normal">(required)</span>
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">-</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <div className="text-red-500 text-sm mt-1">{errors.state}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingDetails;
