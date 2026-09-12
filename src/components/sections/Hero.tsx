import { ArrowRight, Star, MapPin } from "lucide-react";
import { SHOP_INFO } from "@/lib/constants";

const STATS = [
  { value: "4.3★", label: "Google Rating" },
  { value: "50+", label: "Top Brands" },
  { value: "1000+", label: "Happy Customers" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      {/* Decorative CSS grid/dots pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative ambient gradients */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust & Google Rating badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-blue-100 text-xs sm:text-sm font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Barwa Vidyapati, Maharajganj (UP)</span>
            </div>
            <a
              href="#reviews"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold hover:bg-yellow-400/30 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-current text-yellow-400" />
              <span>4.3★ on Google</span>
            </a>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {SHOP_INFO.name}
          </h1>

          {/* Hindi name */}
          <p className="mt-2 text-xl sm:text-2xl font-bold text-orange-400">
            {SHOP_INFO.nameHindi}
          </p>

          {/* Subheading */}
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-semibold text-blue-100 leading-snug">
            {SHOP_INFO.tagline}
          </p>

          {/* Description paragraph */}
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
            {SHOP_INFO.description}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-blue-800 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-500 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* Floating badge / stats area */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                    idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""
                  }`}
                >
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm sm:text-base font-medium text-blue-100">
                    {stat.label}
                  </span>
                  <span className="sr-only">
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
