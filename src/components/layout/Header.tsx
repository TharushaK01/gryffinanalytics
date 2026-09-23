"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 flex justify-center">
      {/* Floating Header Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2 pl-2"
          onClick={closeMenu}
        >
          <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
            <Image
              src="/logo.svg"
              alt="Gryffin Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-black text-xs tracking-wider">
              GRYFFIN
            </span>
            <span className="font-semibold text-red-600 text-[10px] tracking-tight flex items-center gap-0.5">
              ANALYTICS <span className="text-[8px]">+</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
          <Link
            href="#services"
            className="hover:text-red-600 transition-colors"
          >
            Services
          </Link>
          <Link href="#why-us" className="hover:text-red-600 transition-colors">
            Why Us
          </Link>
          <Link
            href="#pricing"
            className="hover:text-red-600 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#reviews"
            className="hover:text-red-600 transition-colors"
          >
            Reviews
          </Link>
          <Link href="#faqs" className="hover:text-red-600 transition-colors">
            FAQs
          </Link>
        </nav>

        {/* Action Group: Hamburger Icon + CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Hamburger Toggle Button (Hidden on Desktop) */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full text-gray-700 hover:text-red-600 hover:bg-gray-100 transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              /* Close Icon (X) */
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Call to Action Button */}
          <Link
            href="#contact"
            onClick={closeMenu}
            className="text-xs font-semibold bg-red-600 hover:bg-red-700 text-white px-4 sm:px-5 py-2.5 rounded-full transition-all inline-block shadow-md whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Dropdown Menu Container */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-gray-100 flex flex-col gap-3 text-center transition-all animate-in fade-in slide-in-from-top-2">
            <Link
              href="#services"
              onClick={closeMenu}
              className="py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors border-b border-gray-100"
            >
              Services
            </Link>
            <Link
              href="#why-us"
              onClick={closeMenu}
              className="py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors border-b border-gray-100"
            >
              Why Us
            </Link>
            <Link
              href="#pricing"
              onClick={closeMenu}
              className="py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors border-b border-gray-100"
            >
              Pricing
            </Link>
            <Link
              href="#reviews"
              onClick={closeMenu}
              className="py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors border-b border-gray-100"
            >
              Reviews
            </Link>
            <Link
              href="#faqs"
              onClick={closeMenu}
              className="py-2 text-sm font-medium text-gray-800 hover:text-red-600 transition-colors"
            >
              FAQs
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
