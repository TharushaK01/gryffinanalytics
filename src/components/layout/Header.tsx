import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 flex justify-center">
      {/* Floating Header Container */}
      <div className="w-full max-w-5xl bg-white rounded-full px-4 py-2 flex items-center justify-between shadow-xl">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 pl-2">
          {/* Logo Icon */}
          <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
            <Image
              src="/logo.svg"
              alt="Gryffin Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-black text-xs tracking-wider">
              GRYFFIN
            </span>
            <span className="font-semibold text-red-600 text-[10px] tracking-tight flex items-center gap-0.5">
              ANALYTICS <span className="text-[8px]">+</span>
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
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

        {/* Call to Action Button */}
        <div>
          <Link
            href="#contact"
            className="text-xs font-semibold bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full transition-all inline-block shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
