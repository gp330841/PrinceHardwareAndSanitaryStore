import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import { SHOP_INFO } from "@/lib/constants";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Reach Out &amp; Locate
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Visit Our Store
          </h2>
          <p className="mt-1 text-lg font-medium text-blue-800">
            {SHOP_INFO.nameHindi}
          </p>
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            We are here to help you with all your hardware and sanitary requirements.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: Contact details cards */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Address Card */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 flex items-start gap-4 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-800" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  Store Address
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {SHOP_INFO.address.street}, {SHOP_INFO.address.area}
                  <br />
                  {SHOP_INFO.address.city}, {SHOP_INFO.address.state} — {SHOP_INFO.address.pincode}
                </p>
                {SHOP_INFO.address.plusCode && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-900 text-xs font-mono font-medium">
                    <Navigation className="w-3.5 h-3.5 text-blue-700" />
                    <span>Plus Code: {SHOP_INFO.address.plusCode}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 flex items-start gap-4 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-blue-800" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                  Call &amp; WhatsApp
                </h3>
                <div className="flex flex-col gap-1 text-sm sm:text-base">
                  {SHOP_INFO.phone.map((phoneNumber, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                      className="text-gray-700 hover:text-blue-800 transition-colors font-medium"
                    >
                      {phoneNumber}
                    </a>
                  ))}
                  <p className="text-xs text-gray-500 mt-0.5">
                    Available during shop hours for inquiries and orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100 flex items-start gap-4 transition-shadow hover:shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-blue-800" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  Store Timings
                </h3>
                <div className="space-y-1 text-sm sm:text-base text-gray-600">
                  <div className="flex justify-between sm:justify-start sm:gap-6">
                    <span className="font-medium text-gray-900 min-w-[85px]">
                      Mon – Sat:
                    </span>
                    <span>{SHOP_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between sm:justify-start sm:gap-6">
                    <span className="font-medium text-gray-900 min-w-[85px]">
                      Sunday:
                    </span>
                    <span>{SHOP_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram / Social Card */}
            {SHOP_INFO.social.instagram && (
              <a
                href={SHOP_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 sm:p-6 border border-pink-200/60 flex items-center gap-4 transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                      Follow on Instagram
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-600" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    @princehardware_ · Daily Plumbing Tips &amp; Honest Product Reviews
                  </p>
                </div>
              </a>
            )}
          </div>

          {/* RIGHT: Embedded Google Maps & Direct Action */}
          <div className="flex flex-col gap-3">
            <div className="w-full flex-1 min-h-[380px] rounded-xl overflow-hidden shadow border border-gray-200 bg-white relative">
              <iframe
                src={SHOP_INFO.googleMapsEmbedUrl}
                title={`${SHOP_INFO.name} Location`}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Direct Google Maps Directions Button */}
            <a
              href={SHOP_INFO.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-800 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors text-center"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps / Get Directions</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
