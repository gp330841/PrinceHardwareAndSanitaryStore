import React from "react";
import { MapPin, Phone, Mail, Clock, Wrench, ChevronRight } from "lucide-react";
import { SHOP_INFO, CATEGORIES } from "@/lib/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const primaryPhone = SHOP_INFO.phone[0] || "+91 98765 43210";
  const phoneClean = primaryPhone.replace(/[^\d+]/g, "");

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#categories" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const featuredCategories = CATEGORIES.slice(0, 4);

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Shop Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-600 text-white shadow-md">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {SHOP_INFO.name}
                </h3>
                <span className="text-xs text-orange-400 font-medium">
                  Est. {SHOP_INFO.establishedYear}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {SHOP_INFO.shortDescription}
            </p>
            <p className="text-xs text-gray-500 italic">
              &ldquo;{SHOP_INFO.tagline}&rdquo;
            </p>
            {SHOP_INFO.social.instagram && (
              <div className="pt-2">
                <a
                  href={SHOP_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span>@princehardware_ (5K+ Followers)</span>
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-orange-600 after:mt-1.5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-orange-600 after:mt-1.5">
              Product Categories
            </h4>
            <ul className="space-y-3">
              {featuredCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="group inline-flex items-center text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-200" />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-base font-semibold text-white tracking-wide uppercase mb-5 relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-orange-600 after:mt-1.5">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span className="leading-snug">
                  {SHOP_INFO.address.street}, {SHOP_INFO.address.area},{" "}
                  {SHOP_INFO.address.city}, {SHOP_INFO.address.state} -{" "}
                  {SHOP_INFO.address.pincode}
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${phoneClean}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {primaryPhone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${SHOP_INFO.email}`}
                  className="hover:text-orange-400 transition-colors break-all"
                >
                  {SHOP_INFO.email}
                </a>
              </li>

              {/* Business Hours */}
              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5 text-gray-400">
                  <p>
                    <span className="text-gray-300 font-medium">Mon - Sat:</span>{" "}
                    {SHOP_INFO.hours.weekdays}
                  </p>
                  <p>
                    <span className="text-gray-300 font-medium">Sun:</span>{" "}
                    {SHOP_INFO.hours.sunday}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            &copy; {currentYear} {SHOP_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-red-500" aria-label="love">
              ❤️
            </span>
            <span>in India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
