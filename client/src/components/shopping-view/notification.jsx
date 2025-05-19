import React from "react";

const notifications = [
  {
    id: 1,
    title: "Payment Successful",
    message: "Your payment for the Premium Plan was successful.",
    time: "2 minutes ago",
    type: "success",
  },
  {
    id: 2,
    title: "New Message",
    message: "You have received a new message from support.",
    time: "10 minutes ago",
    type: "info",
  },
  {
    id: 3,
    title: "Subscription Expiring",
    message: "Your subscription will expire in 3 days. Please renew.",
    time: "1 hour ago",
    type: "warning",
  },
  {
    id: 4,
    title: "Account Alert",
    message: "Unusual login activity detected on your account.",
    time: "Yesterday",
    type: "danger",
  },
];

const typeStyles = {
  success: "bg-green-100 text-green-700",
  info: "bg-blue-100 text-blue-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
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

export default function NotificationPage() {
  return (
    <div>
        <HeroSection/>
    <div className="max-h-screen w-full bg-white flex flex-col items-center py-10 px-2">
      <div className="w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col gap-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`rounded-xl shadow flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4 border-l-4 ${
                notif.type === "success"
                  ? "border-green-400"
                  : notif.type === "info"
                  ? "border-blue-400"
                  : notif.type === "warning"
                  ? "border-yellow-400"
                  : "border-red-400"
              } ${typeStyles[notif.type]}`}
            >
              <div className="flex-1">
                <div className="font-semibold text-lg">{notif.title}</div>
                <div className="text-gray-700">{notif.message}</div>
              </div>
              <div className="text-xs text-gray-500 sm:text-right">{notif.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}