export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Who we are", to: "/about" },
      { label: "History", to: "/history" },
    ],
  },
  {
    label: "Manufacturing",
    to: "/manufacturing",
    children: [
      { label: "Products", to: "/products" },
      { label: "Trusted by", to: "/trusted-by" },
    ],
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Licensing", to: "/licensing" },
  { label: "Contact", to: "/contact" },
];

export const TIMELINE = [
  {
    year: "1987",
    title: "HANSEI Co., Ltd. founded in Seoul",
    body: "Established as a purchasing and inspection agency serving international buyers.",
  },
  {
    year: "1993",
    title: "Reorganized as a corporation",
    body: "Formalized operations and expanded the sourcing and quality control team.",
  },
  {
    year: "1995",
    title: "Subcontract production begins",
    body: "First subcontract manufacturing programs in El Salvador and the Philippines.",
  },
  {
    year: "1998",
    title: "Indonesia operations",
    body: "Two company-operated factories opened in Indonesia.",
  },
  {
    year: "2000",
    title: "Vietnam factory",
    body: "Production established in Vietnam, close to key material suppliers.",
  },
  {
    year: "2002",
    title: "Qingdao, China",
    body: "A fourth facility opened in Qingdao to serve growing volume.",
  },
  {
    year: "2007",
    title: "Capstone HS, Inc. established in the U.S.",
    body: "A United States entity formed to work directly with North American brands.",
  },
  {
    year: "Today",
    title: "Torrance & Ho Chi Minh City",
    body: "Manufacturing runs through trusted subcontract factories, with sourcing, development and quality control managed directly by our own team.",
  },
];

export const CAPABILITIES = [
  {
    n: "01",
    title: "Sourcing & Development",
    body: "Material sourcing, costing and sample development handled in-house across our supplier network in Asia.",
  },
  {
    n: "02",
    title: "OEM Production",
    body: "Sports, outdoor and casual bags built to your specification through vetted subcontract factories.",
  },
  {
    n: "03",
    title: "Quality Control",
    body: "In-line and final inspection managed by our own staff on the ground, not left to the factory.",
  },
  {
    n: "04",
    title: "Logistics & Export",
    body: "Documentation, consolidation and shipment coordination from Vietnam to your destination port.",
  },
];

export const CLIENTS = [
  "Hervé Chapelier",
  "Stone Island",
  "Spider Korea",
  "Bushnell",
  "hummel",
  "OUTDOOR Products",
  "Liberty Mountain",
  "AmeriBag",
  "Singing Rock",
  "Bass Pro Shop",
  "Case Logic",
  "Fieldline",
];

export const OFFICES = [
  {
    region: "United States — Head Office",
    city: "Torrance, California",
    lines: ["2530 Sepulveda Blvd., #203", "Torrance, CA 90505", "United States"],
  },
  {
    region: "Vietnam — Operations",
    city: "Ho Chi Minh City",
    lines: [
      "3rd Floor, T29 Office Building",
      "Street 13-14G, D5 Street, Lai Thieu Ward",
      "Ho Chi Minh City, Vietnam",
    ],
  },
];
