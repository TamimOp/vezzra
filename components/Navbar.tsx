"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = ["Home", "Resources", "Company", "Enterprise"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-30 xl:px-40 py-4 lg:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png"
            alt="Vezzra Logo"
            width={117.6}
            height={67.92}
            className="object-contain w-20 h-auto sm:w-24 lg:w-[117.6px]"
          />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex space-x-8 xl:space-x-10 items-center font-semibold text-white tracking-wide text-sm uppercase">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              className="relative transition-all duration-300 hover:text-purple-300"
            >
              {active === item && (
                <>
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full z-10" />
                  <span className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-14 h-14 bg-purple-700 blur-2xl opacity-50 rounded-full z-0" />
                </>
              )}
              <span className="relative z-20">{item}</span>
            </Link>
          ))}

          {/* Contact Us Button - Desktop Only */}
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2.5 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/20">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button - Only show when menu is closed */}
        {!isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Content */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg border-l border-purple-500/20 shadow-2xl relative z-10">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <span className="text-white font-semibold text-lg">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative z-10"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex-1 p-6 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActive(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full p-4 rounded-lg font-medium text-left transition-all duration-200 ${
                      active === item
                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {active === item && (
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    )}
                    <span className="uppercase tracking-wide text-sm">
                      {item}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <div className="p-6 border-t border-gray-700/50">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/20"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
