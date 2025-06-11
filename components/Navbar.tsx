"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = ["Home", "Resources", "Company", "Enterprise"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/logo.png"
          alt="Vezzra Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Nav Items */}
      <div className="hidden md:flex space-x-10 items-center font-semibold text-white tracking-wide text-sm uppercase">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className="relative transition-all duration-300"
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
        {/* Filter Icon */}
        <Menu className="w-5 h-5 text-white cursor-pointer ml-4" />
      </div>
    </nav>
  );
}
