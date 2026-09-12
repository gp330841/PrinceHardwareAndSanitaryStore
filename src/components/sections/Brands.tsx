import { Building2 } from "lucide-react";
import { BRANDS } from "@/lib/constants";

export function Brands() {
  return (
    <section id="brands" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Brands We Stock
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            Trusted names you can rely on
          </p>
        </div>

        {/* Grid of brand cards (6 columns on desktop, 3 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="bg-white border border-gray-200/80 rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200 group"
            >
              {/* Icon: Building2 from lucide-react (small, above name) */}
              <Building2
                className="w-5 h-5 text-gray-400 mb-2 transition-colors duration-200 group-hover:text-blue-800"
                aria-hidden="true"
              />

              {/* The brand name in a stylish font */}
              <span className="font-semibold text-gray-800 text-sm sm:text-base tracking-wide transition-colors duration-200 group-hover:text-blue-800">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
