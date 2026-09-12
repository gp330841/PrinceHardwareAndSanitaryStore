"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { SHOP_INFO } from "@/lib/constants";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#categories" },
  { name: "About", href: "#about" },
  { name: "Brands", href: "#brands" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const primaryPhone = SHOP_INFO.phone[0] || "+91 98765 43210";
  const phoneClean = primaryPhone.replace(/[^\d+]/g, "");

  // Track scroll position for navbar shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky shadow
      setIsScrolled(window.scrollY > 20);

      // Section tracking
      const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Smooth scroll handler
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: targetId === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
      window.history.pushState(null, "", href);
    } else if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Shop Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden"
          >
            <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-800 text-white shadow-md shadow-blue-800/20 group-hover:bg-blue-900 transition-colors">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-45 duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-blue-800 group-hover:text-blue-900 transition-colors leading-none">
                Prince Hardware
              </span>
              <span className="text-xs font-semibold text-orange-600 tracking-wide mt-1">
                &amp; Sanitary Store
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-orange-600 font-semibold bg-orange-50/80"
                      : "text-slate-700 hover:text-blue-800 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-orange-600 rounded-full animate-fade-in-up" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Call Now Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Call Now Button - Desktop & Tablet */}
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 group"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12 duration-200" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden text-xs">Call</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-800 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-orange-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu & Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 animate-fade-in-up">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-800 text-white">
                  <Wrench className="w-4 h-4" />
                </div>
                <span className="font-bold text-base text-blue-800">
                  Prince Hardware
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-hidden"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-orange-50 text-orange-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-orange-600" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Drawer Footer with Quick Call */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="text-xs text-slate-500">
                <p className="font-medium text-slate-700">Need Assistance?</p>
                <p>{SHOP_INFO.hours.weekdays}</p>
              </div>
              <a
                href={`tel:${phoneClean}`}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
