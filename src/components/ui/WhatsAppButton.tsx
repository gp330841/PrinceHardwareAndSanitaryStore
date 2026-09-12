"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SHOP_INFO } from "@/lib/constants";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`https://wa.me/${SHOP_INFO.whatsapp}?text=Hi! I have a query about your products.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse hover:animate-none focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      {/* Tooltip on hover showing 'Chat with us' */}
      <span
        role="tooltip"
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs sm:text-sm font-medium text-white shadow-md pointer-events-none transition-all duration-200 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } group-hover:opacity-100 group-hover:scale-100`}
      >
        Chat with us
        <span
          className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"
          aria-hidden="true"
        />
      </span>

      {/* White MessageCircle icon from lucide-react */}
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;
