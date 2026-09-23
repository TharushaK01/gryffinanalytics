import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  name: string;
  iconPath: string;
  href: string;
}

const quickLinks: NavLink[] = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Review", href: "#review" },
  { label: "FAQs", href: "#faqs" },
];

const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Settings", href: "/cookie-settings" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    iconPath: "/facebook.svg", // Save icon in public/footer/icons/
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    iconPath: "/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "Twitter",
    iconPath: "/twitter.svg",
    href: "https://twitter.com",
  },
  {
    name: "Youtube",
    iconPath: "/youtube.svg",
    href: "https://youtube.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-red-950 text-white overflow-hidden">
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-end">
        <Image
          src="/footer-cloud-bg.svg"
          alt="Footer Background"
          width={1920}
          height={600}
          priority
          className="w-full h-auto min-h-full object-cover object-bottom"
        />
        {/* Dark overlay tint to maintain legibility */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto pt-16 sm:pt-24 pb-8 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-16">
          {/* Brand Logo & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/gryffin-logo.svg"
                alt="Gryffin Analytics"
                width={240}
                height={60}
                className="h-auto w-48 sm:w-56 object-contain"
              />
            </Link>
            <p className="text-xs sm:text-16px text-white/80 font-regular tracking-wide">
              Turn Data Into Clear Insights
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm sm:text-18px font-medium text-white mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-16px text-white/80 hover:text-white font-regular transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm sm:text-18px font-medium text-white mb-4 sm:mb-5">
              Legal
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-16px text-white/80 hover:text-white font-regular transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm sm:text-18px font-medium text-white mb-4 sm:mb-5">
              Stay Social
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs sm:text-16px text-white/80 hover:text-white font-regular transition-colors duration-200"
                  >
                    <div className="w-5 h-5 relative flex items-center justify-center shrink-0">
                      <Image
                        src={social.iconPath}
                        alt={social.name}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM DIVIDER & COPYRIGHT --- */}
        <div className="pt-6 border-t border-white/20 text-center">
          <p className="text-[11px] sm:text-xs text-white/70 font-light tracking-wide">
            &copy; Copyright 2025 Gryffin Analytics. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
