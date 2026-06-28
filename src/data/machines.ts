import cssd from "@/assets/hero-cssd.jpg";
import autoclaveV from "@/assets/product-autoclave-vertical.jpg";
import autoclaveH from "@/assets/product-autoclave-horizontal.jpg";
import eto from "@/assets/product-eto.jpg";
import washer from "@/assets/product-washer.jpg";
import ultrasonic from "@/assets/product-ultrasonic.jpg";
import biowaste from "@/assets/product-biowaste.jpg";
import lab from "@/assets/product-lab.jpg";
import pharma from "@/assets/hero-pharma.jpg";
import automation from "@/assets/hero-automation.jpg";

export type Machine = {
  slug: string;
  name: string;
  series: string;
  tagline: string;
  category: string;
  image: string;
  overview: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  applications: string[];
  related: string[];
};

export const machines: Machine[] = [
  {
    slug: "cssd-turnkey",
    name: "Hospital CSSD Turnkey Projects",
    series: "Healthcare Infrastructure",
    tagline: "End-to-end Central Sterile Services Department design, supply, installation and validation.",
    category: "CSSD Turnkey",
    image: cssd,
    overview:
      "Deepindustries delivers complete CSSD departments for hospitals — from layout design and dirty/clean/sterile zoning to equipment supply, civil coordination, validation and operator training. Built to NABH and international sterile-services guidelines.",
    specs: [
      { label: "Project Scope", value: "Design → Commission" },
      { label: "Throughput", value: "Up to 12 STU/hour" },
      { label: "Compliance", value: "NABH / ISO 17665" },
      { label: "Delivery", value: "8–14 weeks" },
    ],
    highlights: [
      "Zoning, HVAC and process flow design",
      "Double-door pass-through sterilizers",
      "Integrated traceability software",
      "On-site validation and operator training",
    ],
    applications: ["Multi-specialty hospitals", "Medical college teaching hospitals", "Day-care surgical centres", "Government health programmes"],
    related: ["autoclave-horizontal", "washer-disinfector", "eto-sterilizer"],
  },
  {
    slug: "autoclave-vertical",
    name: "Vertical Autoclave",
    series: "Sterilization",
    tagline: "High-pressure steam sterilization in a compact vertical footprint.",
    category: "Autoclaves",
    image: autoclaveV,
    overview:
      "Engineered for laboratories, clinics and small CSSDs where floor space is critical. Manufactured from SS 304/316 with a fully welded jacketed chamber and programmable microprocessor controls.",
    specs: [
      { label: "Capacity", value: "50 – 200 L" },
      { label: "Working Pressure", value: "1.2 – 2.1 kg/cm²" },
      { label: "Temperature", value: "121°C / 134°C" },
      { label: "Chamber", value: "SS 316L" },
    ],
    highlights: [
      "Triple safety interlocks",
      "Programmable digital cycles",
      "Steam-jacketed construction",
      "Optional vacuum and drying",
    ],
    applications: ["Pathology labs", "Dental clinics", "Research centres", "Small hospitals"],
    related: ["autoclave-horizontal", "eto-sterilizer", "ultrasonic-cleaner"],
  },
  {
    slug: "autoclave-horizontal",
    name: "Horizontal Cylindrical Autoclave",
    series: "Sterilization",
    tagline: "High-throughput horizontal steam sterilizer for hospital CSSDs.",
    category: "Autoclaves",
    image: autoclaveH,
    overview:
      "A workhorse pre-vacuum steam sterilizer with single or double-door pass-through configurations. Designed for continuous CSSD operation with rapid cycle times and full process documentation.",
    specs: [
      { label: "Capacity", value: "150 – 1200 L" },
      { label: "Cycle Time", value: "≈ 35 min" },
      { label: "Doors", value: "Single / Double" },
      { label: "Standard", value: "EN 285 / ISO 17665" },
    ],
    highlights: [
      "Pre / post vacuum drying",
      "Touchscreen HMI with batch records",
      "Pass-through clean/dirty zoning",
      "Validated F0 cycles",
    ],
    applications: ["Hospital CSSDs", "Tertiary care centres", "Pharma utility blocks"],
    related: ["cssd-turnkey", "washer-disinfector", "dryer-cabinet"],
  },
  {
    slug: "eto-sterilizer",
    name: "ETO Sterilizer",
    series: "Low-Temperature Sterilization",
    tagline: "Ethylene oxide sterilization for heat- and moisture-sensitive devices.",
    category: "ETO Sterilizers",
    image: eto,
    overview:
      "For heat-sensitive instruments, electronics and complex lumens. Fully automatic ETO cycles with integrated aeration, gas-leak detection and emission control.",
    specs: [
      { label: "Capacity", value: "100 – 1500 L" },
      { label: "Cycle", value: "Sterilize + Aerate" },
      { label: "Gas", value: "100% ETO / mix" },
      { label: "Safety", value: "Leak + abator" },
    ],
    highlights: [
      "Automatic gas injection & evacuation",
      "Integrated aeration chamber",
      "Catalytic / acid scrubber abator",
      "Full cycle traceability",
    ],
    applications: ["Cardiac cath labs", "Endoscopy units", "Single-use device manufacturers"],
    related: ["autoclave-horizontal", "cssd-turnkey", "washer-disinfector"],
  },
  {
    slug: "washer-disinfector",
    name: "Washer Disinfector",
    series: "Pre-Sterilization",
    tagline: "Validated thermal washing and disinfection of surgical instruments.",
    category: "Washer Disinfectors",
    image: washer,
    overview:
      "Multi-stage automated washing, thermal disinfection and drying for surgical instruments — replacing manual cleaning with a repeatable, documented process aligned to ISO 15883.",
    specs: [
      { label: "Standard", value: "ISO 15883" },
      { label: "DIN Trays", value: "8 – 18" },
      { label: "A0 Value", value: "≥ 3000" },
      { label: "Doors", value: "Single / Pass-through" },
    ],
    highlights: [
      "Pre-wash, wash, thermal disinfect, dry",
      "Process documentation per batch",
      "Low-noise circulation pumps",
      "Endoscope and MIS accessories",
    ],
    applications: ["Hospital CSSDs", "Endoscopy reprocessing", "Dental sterilization units"],
    related: ["cssd-turnkey", "ultrasonic-cleaner", "dryer-cabinet"],
  },
  {
    slug: "ultrasonic-cleaner",
    name: "Ultrasonic Cleaner",
    series: "Pre-Sterilization",
    tagline: "Cavitation-based deep cleaning for delicate and lumened instruments.",
    category: "Ultrasonic Cleaners",
    image: ultrasonic,
    overview:
      "High-frequency ultrasonic transducers loosen soil from intricate surfaces and lumens that brushing cannot reach. Available in benchtop and floor-standing sizes for CSSDs, dental and laboratory use.",
    specs: [
      { label: "Frequency", value: "40 kHz" },
      { label: "Tank Volume", value: "5 – 90 L" },
      { label: "Construction", value: "SS 316" },
      { label: "Heater", value: "Up to 80°C" },
    ],
    highlights: [
      "Sweep frequency for uniform cleaning",
      "Stainless steel sealed tank",
      "Programmable timer and heating",
      "Optional degas cycle",
    ],
    applications: ["Surgical instrument reprocessing", "Dental and ENT clinics", "Optical and jewellery cleaning"],
    related: ["washer-disinfector", "autoclave-vertical", "lab-equipment"],
  },
  {
    slug: "dryer-cabinet",
    name: "Drying Cabinet",
    series: "Pre-Sterilization",
    tagline: "HEPA-filtered hot-air drying for instruments and endoscopes.",
    category: "Dryer Cabinets",
    image: washer,
    overview:
      "Controlled hot-air drying with HEPA-filtered intake to remove residual moisture from instruments before packaging and sterilization, preventing recontamination.",
    specs: [
      { label: "Temperature", value: "40 – 90°C" },
      { label: "Filtration", value: "HEPA H14" },
      { label: "Capacity", value: "4 – 16 trays" },
      { label: "Cycle", value: "Programmable" },
    ],
    highlights: [
      "HEPA filtered intake air",
      "Uniform temperature distribution",
      "Endoscope drying ports (optional)",
      "Stainless steel interior",
    ],
    applications: ["CSSDs", "Endoscopy reprocessing", "Pharma component drying"],
    related: ["washer-disinfector", "ultrasonic-cleaner", "cssd-turnkey"],
  },
  {
    slug: "biowaste-machine",
    name: "Bio-Waste Treatment Machine",
    series: "Healthcare Infrastructure",
    tagline: "On-site treatment and volume reduction of biomedical waste.",
    category: "Bio Waste",
    image: biowaste,
    overview:
      "Combined sterilization and shredding of infectious biomedical waste at the point of generation, complying with BMW Rules. Reduces volume by up to 80% and renders waste safe for disposal.",
    specs: [
      { label: "Capacity", value: "25 – 250 kg/cycle" },
      { label: "Volume Reduction", value: "Up to 80%" },
      { label: "Compliance", value: "BMW Rules 2016" },
      { label: "Cycle", value: "Sterilize + Shred" },
    ],
    highlights: [
      "Integrated steam sterilization",
      "Heavy-duty shredder",
      "Sealed loading hopper",
      "Treated waste disposable as general"
    ],
    applications: ["Hospitals", "Pathology labs", "Pharma R&D facilities"],
    related: ["cssd-turnkey", "autoclave-horizontal", "eto-sterilizer"],
  },
  {
    slug: "lab-equipment",
    name: "Laboratory Equipment",
    series: "Laboratory",
    tagline: "Precision instruments engineered for analytical and research laboratories.",
    category: "Laboratory Equipment",
    image: lab,
    overview:
      "A curated range of laboratory instruments — incubators, ovens, water baths, BOD/COD apparatus, stability chambers and more — built to deliver repeatable results and serviceable for years.",
    specs: [
      { label: "Range", value: "20+ instruments" },
      { label: "Calibration", value: "NABL traceable" },
      { label: "Warranty", value: "12 months" },
      { label: "Service", value: "Pan-India AMC" },
    ],
    highlights: [
      "NABL-traceable calibration",
      "Microprocessor controls",
      "Stainless steel interiors",
      "Pan-India service network",
    ],
    applications: ["Pharma QC labs", "Medical college labs", "Food testing labs", "Research institutes"],
    related: ["ultrasonic-cleaner", "pharma-machinery", "industrial-automation"],
  },
  {
    slug: "pharma-machinery",
    name: "Pharmaceutical Machinery",
    series: "Pharma Production",
    tagline: "GMP-grade machinery for solid, liquid and sterile pharmaceutical production.",
    category: "Pharmaceutical Machinery",
    image: pharma,
    overview:
      "Custom-engineered pharma machinery — tablet presses, capsule fillers, liquid filling lines, vial washers and sterilization tunnels — built to cGMP, with SS 316L contact parts and validation support.",
    specs: [
      { label: "Compliance", value: "cGMP / 21 CFR" },
      { label: "Contact Parts", value: "SS 316L" },
      { label: "Validation", value: "DQ / IQ / OQ / PQ" },
      { label: "Customization", value: "Yes" },
    ],
    highlights: [
      "cGMP-compliant construction",
      "Recipe-based PLC control",
      "Validation document support",
      "Custom line integration",
    ],
    applications: ["Tablet & capsule manufacturing", "Liquid orals and injectables", "Vial and ampoule filling"],
    related: ["lab-equipment", "industrial-automation", "cssd-turnkey"],
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation Systems",
    series: "Factory Automation",
    tagline: "Custom automation lines, SCADA integration and robotic cells.",
    category: "Industrial Automation",
    image: automation,
    overview:
      "Turnkey factory automation — from conveying and material handling to PLC/SCADA, robotics and vision inspection — engineered to your throughput and integrated with your existing plant.",
    specs: [
      { label: "Scope", value: "Design → SAT" },
      { label: "Control", value: "PLC + SCADA" },
      { label: "Robotics", value: "4 / 6 axis" },
      { label: "Vision", value: "Optional" },
    ],
    highlights: [
      "Bespoke mechanical design",
      "PLC, HMI and SCADA integration",
      "Vision-guided pick & place",
      "Remote diagnostics and OEE",
    ],
    applications: ["Automotive Tier-1", "FMCG packaging lines", "Electronics assembly", "Heavy industry"],
    related: ["pharma-machinery", "lab-equipment", "cssd-turnkey"],
  },
];

export function getMachine(slug: string) {
  return machines.find((m) => m.slug === slug);
}