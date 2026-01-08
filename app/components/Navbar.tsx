"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiArrowRight, FiChevronDown, FiMapPin, FiStar, FiShare2, FiCalendar, FiTrendingUp, FiRadio, FiMic, FiPhone } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Blog", href: "/blog" },
  ];

  const services = [
    { 
      name: "GMB Management", 
      href: "/services/gmb-management",
      icon: FiMapPin,
      color: "from-blue-500 to-blue-600",
      description: "Dominate local search"
    },
    { 
      name: "Reputation Management", 
      href: "/services/reputation-management",
      icon: FiStar,
      color: "from-yellow-500 to-orange-500",
      description: "Build trust & credibility"
    },
    { 
      name: "Social Media", 
      href: "/services/social-media-management",
      icon: FiShare2,
      color: "from-pink-500 to-rose-500",
      description: "Engage your audience"
    },
    { 
      name: "Event Management", 
      href: "/services/event-management",
      icon: FiCalendar,
      color: "from-green-500 to-emerald-500",
      description: "Memorable experiences"
    },
    { 
      name: "Digital Marketing", 
      href: "/services/digital-marketing",
      icon: FiTrendingUp,
      color: "from-purple-500 to-indigo-500",
      description: "Drive real growth"
    },
    { 
      name: "Local Advertisement", 
      href: "/services/local-advertisement",
      icon: FiRadio,
      color: "from-cyan-500 to-teal-500",
      description: "Reach local customers"
    },
    { 
      name: "PR Management", 
      href: "/services/pr-management",
      icon: FiMic,
      color: "from-red-500 to-pink-500",
      description: "Shape your narrative"
    },
  ];

  return (
    <nav className="glass-navbar fixed w-full top-0 z-50 animate-fade-in-up border-b border-white/20 bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-10">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-indigo-500/30 group-hover:shadow-2xl group-hover:shadow-indigo-500/50">
                <span className="text-white font-bold text-xl md:text-2xl">M</span>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] to-[#06b6d4] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">Mediaflip</span>
              <span className="text-[10px] text-gray-500 -mt-1 hidden md:block group-hover:text-[#4f46e5] transition-colors duration-300">Digital Marketing Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-600 hover:text-[#4f46e5] font-medium transition-all duration-500 group py-3 px-5 rounded-xl overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Elegant glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/0 via-[#06b6d4]/10 to-[#4f46e5]/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></span>
                
                {/* Flowing gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-indigo-50 to-cyan-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                
                {/* Elegant bottom border */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(79,70,229,0.5)]"></span>
                
                {/* Text with subtle scale */}
                <span className="relative z-10 inline-block group-hover:scale-105 transition-transform duration-300">{link.name}</span>
                
                {/* Sparkle effect on hover */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white rounded-full opacity-0 group-hover:w-24 group-hover:h-24 group-hover:opacity-20 transition-all duration-500 blur-2xl"></span>
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4">
              <Link 
                href="/contact" 
                className="relative text-gray-600 hover:text-[#4f46e5] p-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-cyan-50 transition-all duration-300 group overflow-hidden"
                title="Contact Us"
              >
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-[#4f46e5]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                <FiPhone size={20} className="relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 hover:text-[#4f46e5] transition-all duration-300 p-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-cyan-50 rounded-lg relative z-10 group overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Pulse effect on click */}
            <span className="absolute inset-0 bg-[#4f46e5]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            {isOpen ? 
              <FiX size={24} className="relative z-10 group-hover:rotate-90 transition-transform duration-300" /> : 
              <FiMenu size={24} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fade-in-up max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-600 hover:text-[#4f46e5] hover:bg-gradient-to-r hover:from-[#4f46e5]/5 hover:to-[#06b6d4]/5 font-medium transition-all duration-300 py-3 px-4 rounded-lg group overflow-hidden"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Slide in effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/5 to-[#06b6d4]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
              
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="relative text-gray-600 hover:text-[#4f46e5] hover:bg-gradient-to-r hover:from-indigo-50 hover:to-cyan-50 font-medium transition-all duration-300 py-3 px-4 rounded-lg flex items-center gap-2 group overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/5 to-[#06b6d4]/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <FiPhone size={18} className="relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
