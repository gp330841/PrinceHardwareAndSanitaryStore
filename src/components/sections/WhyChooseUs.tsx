import { ShieldCheck, IndianRupee, Users, Package, type LucideIcon } from "lucide-react";
import { USP_FEATURES } from "@/lib/constants";

type FeatureIcon = (typeof USP_FEATURES)[number]["icon"];

const iconMap: Record<FeatureIcon, LucideIcon> = {
  quality: ShieldCheck,
  price: IndianRupee,
  advice: Users,
  range: Package,
};

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            What sets us apart
          </p>
        </div>

        {/* 4-column grid on desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {USP_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon];

            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-left group"
              >
                {/* Circular icon container with blue background + white icon */}
                <div className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                  )}
                </div>

                {/* Title (bold, lg) */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* Description text (gray-600) */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
