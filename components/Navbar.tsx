"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = ["Home", "Resources", "Company", "Enterprise"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (item: string) => {
    setActive(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed container - always full width */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Single container handling all transitions */}
        <div
          className={`w-full transition-all duration-700 ease-linear ${
            isScrolled
              ? "px-8 sm:px-12 lg:px-16 xl:px-20 pt-6"
              : "px-6 sm:px-12 lg:px-30 xl:px-40 pt-0"
          }`}
        >
          <nav
            className={`flex items-center transition-all duration-700 ease-linear w-full ${
              isScrolled
                ? "bg-gray-900/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl px-8 py-4 justify-center gap-8 max-w-fit mx-auto"
                : "py-4 lg:py-6 justify-between"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center transition-all duration-700 ease-linear">
              <Image
                src="/assets/logo.png"
                alt="Vezzra Logo"
                width={117.6}
                height={67.92}
                className={`object-contain transition-all duration-700 ease-linear hover:scale-105 ${
                  isScrolled
                    ? "w-14 h-auto"
                    : "w-20 h-auto sm:w-24 lg:w-[117.6px]"
                }`}
              />
            </div>

            {/* Desktop Nav Items */}
            <div
              className={`hidden lg:flex items-center font-semibold text-white tracking-wide uppercase transition-all duration-700 ease-linear ${
                isScrolled
                  ? "space-x-6 text-sm"
                  : "space-x-8 xl:space-x-10 text-sm"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActive(item)}
                  className="relative transition-all duration-300 ease-linear hover:text-purple-300 group flex items-center"
                >
                  {active === item && (
                    <>
                      <span
                        className={`bg-purple-400 rounded-full animate-pulse transition-all duration-700 ease-linear mr-3 ${
                          isScrolled ? "w-1.5 h-1.5" : "w-2 h-2"
                        }`}
                      />
                      <span
                        className={`absolute bg-purple-700 blur-2xl opacity-50 rounded-full z-0 transition-all duration-700 ease-linear ${
                          isScrolled
                            ? "left-[-8px] w-8 h-8"
                            : "left-[-12px] w-14 h-14"
                        }`}
                      />
                    </>
                  )}
                  <span className="relative z-20 group-hover:transform group-hover:scale-110 transition-transform duration-200 ease-linear">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 ease-linear group-hover:w-full" />
                </Link>
              ))}

              {/* Contact Us Button */}
              <button
                className={`bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium uppercase tracking-wide transition-all duration-700 ease-linear hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:scale-105 hover:-translate-y-0.5 rounded-lg ${
                  isScrolled
                    ? "px-5 py-2.5 text-sm"
                    : "px-6 py-2.5 text-sm ml-6"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            {!isMobileMenuOpen && (
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden text-white hover:bg-white/10 rounded-lg transition-all duration-700 ease-linear hover:scale-110 active:scale-95 ${
                  isScrolled ? "p-2.5" : "p-2"
                }`}
                aria-label="Toggle mobile menu"
              >
                <Menu
                  className={`transition-all duration-700 ease-linear ${
                    isScrolled ? "w-5 h-5" : "w-6 h-6"
                  }`}
                />
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          />

          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-lg border-l border-purple-500/20 shadow-2xl transform translate-x-0">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <span className="text-white font-semibold text-lg">Menu</span>
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200 ease-linear hover:rotate-90"
                  aria-label="Close mobile menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="flex-1 p-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center space-x-3 w-full p-4 rounded-lg font-medium text-left transition-all duration-200 ease-linear hover:transform hover:translate-x-2 ${
                      active === item
                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/30 shadow-lg"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {active === item && (
                      <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
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
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/20 hover:scale-105"
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
