export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "outdoor" | "industrial" | "indoor" | "solar";
  categoryLabel: string;
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "100W – 400W Industrial LED Flood Lighting",
    category: "outdoor",
    categoryLabel: "Outdoor & High-Power",
    image: "/products/flood-light.webp",
    caption: "Heavy die-cast aluminium casing with finned thermal dissipation, IP66 rated for outdoor yards and facades.",
  },
  {
    id: "g2",
    title: "UFO LED High Bay Industrial Installation",
    category: "industrial",
    categoryLabel: "Industrial & Factory",
    image: "/products/highbay-light.webp",
    caption: "High-bay installation in a manufacturing facility providing uniform downward illumination from high clearance.",
  },
  {
    id: "g3",
    title: "Solar LED Street Light on Township Road",
    category: "solar",
    categoryLabel: "Solar Lighting",
    image: "/products/solar-street-light.webp",
    caption: "Autonomous solar street light operating at night in an outdoor roadway setting.",
  },
  {
    id: "g4",
    title: "All-in-One Integrated Solar Fixture",
    category: "solar",
    categoryLabel: "Solar Lighting",
    image: "/products/all-in-one-solar.webp",
    caption: "Monocrystalline panel and lithium battery pack integrated in a single compact housing.",
  },
  {
    id: "g5",
    title: "Aerodynamic LED Street Light Fixture",
    category: "outdoor",
    categoryLabel: "Outdoor & Street",
    image: "/products/street-light.webp",
    caption: "Precision lens optics and heat-sink housing for roadway and highway lighting.",
  },
  {
    id: "g6",
    title: "Custom Hexagonal LED Profile Chandelier",
    category: "indoor",
    categoryLabel: "Architectural & Indoor",
    image: "/products/profile-light.webp",
    caption: "Custom geometric profile light suspended in a modern architectural conference interior.",
  },
  {
    id: "g7",
    title: "Recessed Ceiling LED Down Light",
    category: "indoor",
    categoryLabel: "Architectural & Indoor",
    image: "/products/down-light.webp",
    caption: "Clean circular flush ceiling downlight with high CRI and anti-glare frosted diffuser.",
  },
  {
    id: "g8",
    title: "Rimless Flush Mount Architectural Downlight",
    category: "indoor",
    categoryLabel: "Architectural & Indoor",
    image: "/products/rimless-down-light.webp",
    caption: "Frameless edge-to-edge ceiling illumination preferred by luxury interior architects.",
  },
  {
    id: "g9",
    title: "Fuel Station & Canopy LED Fixture",
    category: "industrial",
    categoryLabel: "Commercial Canopy",
    image: "/products/canopy-light.webp",
    caption: "Recessed surface canopy fixture providing high vertical illuminance under drive-through roof structures.",
  },
  {
    id: "g10",
    title: "Extruded Aluminium Profiles for Cove Lighting",
    category: "indoor",
    categoryLabel: "Architectural Profiles",
    image: "/products/aluminium-profiles.webp",
    caption: "High-grade 6063 aluminium channels bundled with milky diffusers for linear accent lighting.",
  },
];
