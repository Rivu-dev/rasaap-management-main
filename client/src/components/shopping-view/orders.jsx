import React, { useState } from "react";

const currentOrders = [
  { id: 1, service: "Book A",plan: "Processing" ,sdate: "2024-06-01",edate: "2024-06-01"},
];

const previousOrders = [
    { id: 2, service: "Book A",plan: "Processing" ,sdate: "2024-06-01",edate: "2024-06-01"},
];
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
                My Orders
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

function MyOrders() {
  const [filter, setFilter] = useState("current");
  const orders = filter === "current" ? currentOrders : previousOrders;

  return (
    <div>
        <HeroSection/>
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-6 flex flex-col items-center">
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition border-b-2 ${filter === "current" ? "border-pink-600 text-pink-700" : "border-transparent text-gray-500 hover:text-pink-600"}`}
          onClick={() => setFilter("current")}
        >
          Current Orders
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition border-b-2 ${filter === "previous" ? "border-pink-600 text-pink-700" : "border-transparent text-gray-500 hover:text-pink-600"}`}
          onClick={() => setFilter("previous")}
        >
          Previous Orders
        </button>
      </div>
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {orders.length === 0 ? (
    <p className="text-gray-400 text-center py-8 col-span-full text-lg font-medium tracking-wide">No orders found.</p>
  ) : (
    orders.map(order => (
      <div key={order.id} className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-pink-500 flex flex-col justify-center items-center aspect-square">
        <div className="text-xs uppercase tracking-widest text-pink-600 font-semibold mb-2">Order</div>
        <div className="text-2xl font-extrabold mb-1 text-gray-800 text-center">{order.service}</div>
        <div className="text-lg font-semibold mb-3 text-gray-500 text-center">{order.plan}</div>
        <div className="w-full flex flex-col gap-2 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Starting Date</span>
            <span className="font-medium text-gray-700">{order.sdate}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400">Ending Status</span>
            <span className="font-medium text-gray-700">{order.edate}</span>
          </div>
        </div>
      </div>
    ))
  )}
</div>
    </div>
    </div>
  );
}

export default MyOrders;