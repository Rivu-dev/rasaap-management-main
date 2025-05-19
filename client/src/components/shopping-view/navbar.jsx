import React, { useState, useEffect } from "react";
import img1 from "../../assets/rlogoe.png";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Sheet, SheetContent, SheetHeader } from "../ui/sheet";
import { UserPlus } from "lucide-react";
// import { Briefcase, Image, Home, Contact, User, Info } from "lucide-react";

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  // const [openSheet, setopenSheet] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="w-14 h-14 p-1"
              src={img1}
              alt="Rasaap Info Solutions Logo"
            />

            {/* Text only visible on large screens */}
            <div className="flex-col hidden lg:flex">
              <a
                href="#"
                className={`text-2xl font-bold ${
                  scrolled ? "text-pink-600" : "text-white"
                }`}
              >
                Rasaap Info Solutions
              </a>
              <p
                className={`font-bold ${
                  scrolled ? "text-pink-400" : "text-gray-200"
                }`}
              >
                Your Success Our Satisfaction
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="./dashboard"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="./services"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              Services
            </Link>
            <Link
              to="./about"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              {" "}
              About&nbsp;&nbsp;Us
            </Link>

            <Link
              to="./leads"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              Leads
            </Link>
            <Link
              to="./gallery"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              Gallery
            </Link>
            <Link
              to="./contact"
              className={`font-bold ${
                scrolled ? "text-pink-600" : "text-white"
              } hover:text-pink-500 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {user ? (
              <UserButton
                appearance={{
                  elements: {
                    userButtonPopoverFooter: "hidden",
                    Orders: "shop/acount",
                  },
                }}
              />
            ) : (
              <Button
                onClick={openSignIn}
                className="font-bold bg-pink-200 text-gray-600 px-6 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
              >
                Get Started
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setOpenSheet(true);
              }}
              className={`${
                scrolled ? "text-gray-800" : "text-white"
              } focus:outline-none`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {openSheet ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {openSheet && (
          <div className="flex h-screen">
            <Sheet open={openSheet} onOpenChange={setOpenSheet}>
              {" "}
              {/* Changed to directly use setOpenSheet */}
              <SheetContent
                side="left"
                className="w-100% max-w-md overflow-y-auto p-6"
              >
                {" "}
                {/* Added width, max-width and padding */}
                <SheetHeader className="mb-5">
                  {" "} 
                  {/* Added margin bottom */}
                  <div className="flex items-center gap-3 mb-8">
                    <img
                      src="/src/assets/rlogoe.png"
                      alt="Logo"
                      className="w-8 h-8 rounded-full shadow"
                    />
                    <span className="text-l font-bold text-pink-600 tracking-wide">
                      Name
                    </span>
                  </div>
                  <button className="flex items-center gap-3 mb-8 text-pink-800 hover:bg-pink-100">
                    <UserPlus />
                    <span className="text-l font-bold text-pink-600 tracking-wide">
                      Add New Business
                    </span>
                  </button>
                </SheetHeader>
                {/* Added content between header and footer */}
                <div className="py-4">{/* Your sheet content goes here */}</div>
                <div className="mt-auto">
                  <Link
                    to="#contact"
                    className="block bg-gradient-to-r from-pink-600 to-red-500 text-white text-center px-6 py-3 rounded-full font-bold shadow-lg hover:from-pink-700 hover:to-red-600 transition-colors mt-8"
                  >
                    Get Started
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
