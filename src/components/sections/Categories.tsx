import type { ComponentType } from "react";
import {
  Pipette,
  ShowerHead,
  Toilet,
  Wrench,
  Droplets,
  Bath,
  Hammer,
  type LucideProps,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const ICON_MAP: Record<string, ComponentType<LucideProps>> = {
  pipe: Pipette,
  bath: ShowerHead,
  sanitaryware: Toilet,
  plumbing: Wrench,
  adhesive: Droplets,
  accessories: Bath,
  hardware: Hammer,
};

export function Categories() {
  return (
    <section id="categories" className="bg-gray-50 py-16 sm:py-20 lg:py-24 relative">
      <div id="products" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            What We Offer
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Product Categories
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Explore our comprehensive range of high-grade hardware tools, sanitary fittings, and building supplies.
          </p>
        </div>

        {/* Grid (Responsive: 1-col mobile, 2-col tablet, 3-col/4-col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => {
            const IconComponent = ICON_MAP[category.icon] ?? Hammer;

            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 border-b-4 border-b-transparent hover:border-b-blue-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-start"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300 mb-4">
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
