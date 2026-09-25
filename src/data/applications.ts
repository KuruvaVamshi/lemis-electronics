export interface ApplicationItem {
  id: string;
  title: string;
  description: string;
  recommendedLights: string[];
  image: string;
}

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "factories",
    title: "Factories & Manufacturing",
    description: "High-intensity, vibration-tolerant illumination engineered for machine assembly, fabrication areas, and 24/7 industrial production lines.",
    recommendedLights: ["LED High Bay Lights", "LED Flood Lights", "Heavy-Duty Canopy Lights"],
    image: "/applications/factories.webp",
  },
  {
    id: "warehouses",
    title: "Warehouses & Logistics Hubs",
    description: "Wide-spread downward lighting delivering clear visibility between tall racking aisles, loading docks, and dispatch bays.",
    recommendedLights: ["LED High Bay Lights", "LED Flood Lights", "Canopy Lights"],
    image: "/applications/warehouses.webp",
  },
  {
    id: "commercial-buildings",
    title: "Commercial Buildings & Offices",
    description: "Energy-efficient, low-glare ceiling illumination designed for corporate workspaces, conference halls, and lobby areas.",
    recommendedLights: ["LED Down Lights", "LED Profile Lights", "Aluminium Profiles"],
    image: "/applications/commercial.webp",
  },
  {
    id: "apartments",
    title: "Apartment Complexes & Townships",
    description: "Complete residential society lighting covering basements, stairwells, podiums, clubhouse areas, and perimeter roads.",
    recommendedLights: ["Rimless Down Lights", "LED Street Lights", "Solar Street Lights"],
    image: "/applications/apartments.webp",
  },
  {
    id: "retail-spaces",
    title: "Retail Stores & Showrooms",
    description: "High-CRI accent and ambient lighting that showcases merchandise with accurate color rendering and sleek modern aesthetics.",
    recommendedLights: ["Rimless Down Lights", "LED Profile Lights", "Aluminium Cove Profiles"],
    image: "/applications/retail.webp",
  },
  {
    id: "roads-outdoor",
    title: "Roads, Streets & Outdoor Perimeters",
    description: "Robust weatherproof luminaires with road-focused beam patterns for municipal avenues, gated layouts, and highway connectors.",
    recommendedLights: ["LED Street Lights", "Solar LED Street Lights", "LED Flood Lights"],
    image: "/applications/roads.webp",
  },
  {
    id: "farms",
    title: "Farms, Orchards & Rural Estates",
    description: "Off-grid, independent solar lighting solutions that provide automatic dusk-to-dawn security for vast agricultural lands and farmhouses.",
    recommendedLights: ["All-in-One Solar Lights", "Solar LED Street Lights", "LED Flood Lights"],
    image: "/applications/farms.webp",
  },
  {
    id: "schools-institutions",
    title: "Schools, Colleges & Campuses",
    description: "Glare-free, flicker-free learning environment lighting for lecture halls, corridors, outdoor auditoriums, and hostel walkways.",
    recommendedLights: ["LED Down Lights", "LED Street Lights", "Solar Perimeter Lights"],
    image: "/applications/institutions.webp",
  },
  {
    id: "sports-areas",
    title: "Sports Areas & Outdoor Courts",
    description: "High-lumen, flicker-free floodlights for badminton courts, box cricket turf arenas, tennis grounds, and sports complexes.",
    recommendedLights: ["LED Flood Lights (100W–400W)", "LED High Bay Lights"],
    image: "/applications/sports.webp",
  },
  {
    id: "residential-projects",
    title: "Residential Interior Projects",
    description: "Architectural ceiling downlights and designer linear profile lighting tailored for villas, designer flats, and modern living rooms.",
    recommendedLights: ["Rimless LED Down Lights", "Geometric Profile Lights", "Aluminium Profiles"],
    image: "/applications/residential.webp",
  },
];
