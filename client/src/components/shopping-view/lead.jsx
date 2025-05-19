import React, { useState } from "react";
import { PhoneCall, MessageCircle, MessageSquare } from "lucide-react";

const lead = {
  name: "Jane Smith",
  number: "+91 9876543210",
  status: "in progress",
  timeline: [
    {
      time: "2024-06-01 10:00",
      method: "Call",
      note: "Initial inquiry, interested.",
    },
    {
      time: "2024-06-02 14:30",
      method: "WhatsApp",
      note: "Sent product details.",
    },
    {
      time: "2024-06-03 09:15",
      method: "Message",
      note: "Follow-up message sent.",
    },
    {
      time: "2024-06-04 16:00",
      method: "Call",
      note: "Discussed pricing, in progress.",
    },
  ],
};

const statusOptions = [
  { value: "interested", label: "Interested" },
  { value: "not connected", label: "Not Connected" },
  { value: "in progress", label: "In Progress" },
  { value: "converted", label: "Converted" },
  { value: "visited", label: "Visited" },
];

export default function Lead() {
  const [status, setStatus] = useState(lead.status);
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
                Help!
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
<div className="min-h-screen flex items-center justify-center bg-white py-8 px-2 sm:px-6">
  <div
    className="w-full max-w-5xl bg-white/80 rounded-3xl p-4 sm:p-8 flex flex-col gap-8"
    style={{ width: "80%" }}
  >
    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 justify-between">
      <div className="rounded-xl bg-white shadow p-6 flex flex-col items-start border border-pink-100 flex-1 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold text-pink-700 mb-2">{lead.name}</h2>
        <p className="text-lg text-gray-600">{lead.number}</p>
      </div>
      <div className="rounded-xl bg-white shadow p-6 flex flex-col border border-pink-100 flex-1">
        <span className="block mb-4 font-semibold text-gray-700">Contact Methods</span>
        <div className="flex gap-4 flex-wrap">
          <a
            href={`tel:${lead.number}`}
            className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 transition-all shadow-sm"
            title="Call"
          >
            <PhoneCall size={28} className="text-pink-600" />
          </a>
          <a
            href={`https://wa.me/${lead.number.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-green-50 hover:bg-green-100 transition-all shadow-sm"
            title="WhatsApp"
          >
            <MessageCircle size={28} className="text-green-600" />
          </a>
          <a
            href={`sms:${lead.number}`}
            className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 transition-all shadow-sm"
            title="Message"
          >
            <MessageSquare size={28} className="text-blue-600" />
          </a>
        </div>
      </div>
    </div>
    <div className="rounded-xl bg-white shadow p-6 flex flex-col border border-pink-100">
      <label className="block mb-2 font-medium text-gray-700">Status</label>
      <div className="flex flex-wrap gap-2">
        {statusOptions.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`px-4 py-2 rounded-lg border border-pink-300 bg-white text-gray-700 transition-all hover:bg-pink-50 ${
              status === opt.value ? "bg-pink-50 ring-2 ring-pink-500 font-medium" : ""
            }`}
            onClick={() => setStatus(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
    {/* Timeline Card */}
    <div className="rounded-xl bg-white shadow p-6 border border-pink-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Interaction Timeline</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
        <ul className="space-y-6">
          {lead.timeline.map((event, idx) => (
            <li key={idx} className="relative flex items-start gap-4 pl-8">
              <div
                className={`absolute left-0 mt-2 w-4 h-4 rounded-full flex items-center justify-center ${
                  event.method === "Call"
                    ? "bg-pink-500"
                    : event.method === "WhatsApp"
                    ? "bg-green-500"
                    : "bg-blue-500"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg w-full border border-gray-100 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span
                    className={`font-medium ${
                      event.method === "Call"
                        ? "text-pink-600"
                        : event.method === "WhatsApp"
                        ? "text-green-600"
                        : "text-blue-600"
                    }`}
                  >
                    {event.method}
                  </span>
                  <span className="text-sm text-gray-500">{event.time}</span>
                </div>
                <p className="mt-2 text-gray-700">{event.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
