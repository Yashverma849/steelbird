export type HelmetBadge = "new" | "limited";

export type HelmetProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  certification: string;
  badge?: HelmetBadge;
  colors?: string[];
  imageUrls?: string[];
  has360View?: boolean;
  category: string;
  brand: string;
};

export const helmetCategories = [
  "Full Face",
  "Open Face",
  "Flip-Up",
  "Motocross",
  "Gloves",
] as const;

export const helmetBrands = ["Steelbird", "Ignyte", "Ares", "Thunder"] as const;

export const filterTabs = [
  "Carbon Fiber",
  "Sunset Orange",
  "Racing Spec",
  "Ventilated",
  "Modular",
] as const;

export type FilterTab = (typeof filterTabs)[number];

export const helmetProducts: HelmetProduct[] = [
  {
    id: "apex-x1",
    name: "Steelbird Apex X1",
    price: 249,
    description:
      "Lightweight motocross shell with advanced ventilation channels and removable liner system.",
    certification: "DOT / ECE CERTIFIED",
    badge: "new",
    colors: ["#f26422", "#3b82f6", "#84cc16"],
    imageUrls: [
      "/api/helmet-images/apex-x1-orange",
      "/api/helmet-images/apex-x1-blue",
      "/api/helmet-images/apex-x1-green",
    ],
    has360View: true,
    category: "Motocross",
    brand: "Steelbird",
  },
  {
    id: "modular-v2",
    name: "Ignyte Modular V2",
    price: 385,
    description:
      "Carbon-fiber flip-up helmet with integrated sun visor and premium interior padding.",
    certification: "DOT / ECE CERTIFIED",
    colors: ["#9ca3af", "#2563eb", "#ef4444", "#d97706"],
    imageUrls: [
      "/Ignyte%20Modular%20V2/grey%20helmet.png",
      "/Ignyte%20Modular%20V2/blue%20helmet.png",
      "/Ignyte%20Modular%20V2/carbon%20%26%20red%20helmet.png",
      "/Ignyte%20Modular%20V2/desert%20camo%20helmet.png",
    ],
    category: "Flip-Up",
    brand: "Ignyte",
  },
  {
    id: "urban-jet",
    name: "Ares Urban Jet",
    price: 189,
    description:
      "Open-face street helmet with retro-inspired silhouette and modern impact protection.",
    certification: "DOT / ECE CERTIFIED",
    category: "Open Face",
    brand: "Ares",
  },
  {
    id: "mx-pro",
    name: "Steelbird MX-Pro",
    price: 520,
    description:
      "Professional-grade motocross helmet with multi-density EPS and race-ready aerodynamics.",
    certification: "DOT / ECE CERTIFIED",
    badge: "limited",
    category: "Motocross",
    brand: "Steelbird",
  },
];
