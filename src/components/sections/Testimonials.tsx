import { Star, Quote, ExternalLink } from "lucide-react";
import { TESTIMONIALS, SHOP_INFO } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
            Customer Feedback
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-base font-bold text-gray-900">
              {SHOP_INFO.rating.score} / 5.0
            </span>
            <span className="text-sm text-gray-500">
              ({SHOP_INFO.rating.reviewsCount} Google Reviews)
            </span>
          </div>
          <p className="mt-2 text-base text-gray-600">
            Real experiences from homeowners, plumbers, and contractors in Maharajganj.
          </p>
        </div>

        {/* Testimonials Grid: 3 columns on desktop/tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Header: Quote icon in top-left (muted blue) and Star rating */}
                <div className="flex items-start justify-between mb-4">
                  <Quote
                    className="w-8 h-8 text-blue-300 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Star rating rendered as filled Star icons (yellow-400, fill='currentColor') */}
                  <div
                    className="flex items-center gap-1"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`w-5 h-5 ${
                          starIndex < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }`}
                        fill="currentColor"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Review text in italics */}
                <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              {/* Customer name (bold) & location/role in gray */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 font-bold flex items-center justify-center text-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-snug">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
