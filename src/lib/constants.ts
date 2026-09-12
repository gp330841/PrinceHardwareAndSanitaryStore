// ============================================================
// 🏪 SHOP DETAILS — Edit this file to update your website
// ============================================================
// All shop information is centralized here. Update these values
// and they will reflect across the entire website automatically.
// ============================================================

export const SHOP_INFO = {
  name: "Prince Hardware & Sanitary Store",
  nameHindi: "प्रिंस हार्डवेयर एंड सैनिटरी स्टोर",
  tagline: "Your One-Stop Shop for Hardware & Sanitary Solutions",
  description:
    "Premium quality hardware tools, sanitary fittings, plumbing supplies, and building materials at the best prices. Trusted by customers in Barwa Vidyapati, Maharajganj with a 4.3★ Google rating.",
  shortDescription:
    "Quality hardware & sanitary products for your home and business needs.",

  // Rating info from Google Maps
  rating: {
    score: 4.3,
    reviewsCount: 6,
  },

  // Contact Information
  phone: ["088408 21867"],
  email: "princehardwarestore@gmail.com",
  whatsapp: "+918840821867", // Without spaces or dashes

  // Address
  address: {
    street: "Primary school ke, 100 meter aage",
    area: "Barwa Vidyapati",
    city: "Maharajganj",
    state: "Uttar Pradesh",
    pincode: "273302",
    landmark: "Near Primary School & Aroma Gardens",
    plusCode: "4H6X+G6 Barwa Vidyapati, Uttar Pradesh",
  },

  // Google Maps Embed URL (reliable embed using coordinates and plus code)
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=Prince+Hardware+And+Sanitary+Store,+Barwa+Vidyapati,+Maharajganj,+Uttar+Pradesh+273302&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Direct link to Google Maps place for navigation & directions
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Prince+Hardware+And+Sanitary+Store+4H6X%2BG6+Barwa+Vidyapati+Maharajganj+Uttar+Pradesh",

  // Business Hours
  hours: {
    weekdays: "8:00 AM – 7:00 PM",
    saturday: "8:00 AM – 7:00 PM",
    sunday: "8:00 AM – 7:00 PM",
  },

  // Social Media Links
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/princehardware_/",
    youtube: "",
    twitter: "",
  },

  // Year established (for footer copyright)
  establishedYear: 2020,
} as const;

// ============================================================
// 📦 PRODUCT CATEGORIES
// ============================================================

export const CATEGORIES = [
  {
    id: "pipes-fittings",
    name: "Pipes & Fittings",
    description: "PVC, CPVC, GI pipes and all types of pipe fittings",
    icon: "pipe" as const,
  },
  {
    id: "bathroom-fixtures",
    name: "Bathroom Fixtures",
    description: "Taps, faucets, showers, and bathroom accessories",
    icon: "bath" as const,
  },
  {
    id: "sanitaryware",
    name: "Sanitaryware",
    description: "Toilets, wash basins, urinals, and sanitary items",
    icon: "sanitaryware" as const,
  },
  {
    id: "plumbing",
    name: "Plumbing Tools",
    description: "Wrenches, cutters, sealants, and plumbing essentials",
    icon: "plumbing" as const,
  },
  {
    id: "adhesives-sealants",
    name: "Adhesives & Sealants",
    description: "Pipe sealants, adhesives, Teflon tapes, and bonding solutions",
    icon: "adhesive" as const,
  },
  {
    id: "bathroom-accessories",
    name: "Bathroom Accessories",
    description: "Towel rods, soap dishes, mirrors, and bathroom fittings",
    icon: "accessories" as const,
  },
  {
    id: "hardware",
    name: "General Hardware",
    description: "Locks, hinges, screws, nails, and tools",
    icon: "hardware" as const,
  },
] as const;

// ============================================================
// 🏆 BRANDS
// ============================================================

export const BRANDS = [
  "Jaquar",
  "Hindware",
  "Cera",
  "Parryware",
  "Astral Pipes",
  "Supreme Pipes",
  "Finolex",
  "Prince Pipes",
  "Ashirvad Pipes",
  "Vectus",
  "Watertec",
  "Plasto",
] as const;

// ============================================================
// ⭐ WHY CHOOSE US
// ============================================================

export const USP_FEATURES = [
  {
    title: "Quality Products",
    description:
      "We stock only genuine, branded products from trusted manufacturers to ensure durability and reliability.",
    icon: "quality" as const,
  },
  {
    title: "Best Prices",
    description:
      "Competitive pricing with regular offers and discounts. Get the best value for your money.",
    icon: "price" as const,
  },
  {
    title: "Expert Advice",
    description:
      "Our experienced team helps you choose the right products for your specific requirements.",
    icon: "advice" as const,
  },
  {
    title: "Wide Range",
    description:
      "From basic tools to premium fittings — find everything you need under one roof.",
    icon: "range" as const,
  },
] as const;

// ============================================================
// 💬 TESTIMONIALS (From Google Reviews)
// ============================================================

export const TESTIMONIALS = [
  {
    name: "Shakti Singh",
    rating: 5,
    text: "First time gya tha, lekin experience itna accha raha ki ab yahi se hi saman lunga 👌 Nice experience 👌",
    location: "Verified Google Review",
  },
  {
    name: "Dheeraj Patel",
    rating: 5,
    text: "Sikrpur ki sabse achi dukan, bhai ne saman achi quality ki rakhi h, baki logo ke jaise nahi, baki log saman to khrab de rhe h per paisa original ka le rhe h. Genuine quality and honest price!",
    location: "Local Customer · Shikarpur",
  },
  {
    name: "Yogeshwar Patel",
    rating: 5,
    text: "Very reliable store for genuine hardware and plumbing supplies. The owner is very helpful, explains things well and rates are fair.",
    location: "Verified Google Review",
  },
] as const;
