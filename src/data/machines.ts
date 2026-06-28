import hyperion from "@/assets/machine-hyperion.jpg";
import omniscan from "@/assets/machine-omniscan.jpg";
import titan from "@/assets/machine-titan.jpg";
import nova from "@/assets/machine-nova.jpg";
import apex from "@/assets/machine-apex.jpg";

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
  related: string[];
};

export const machines: Machine[] = [
  {
    slug: "hyperion-g5",
    name: "Hyperion-G5",
    series: "Precision Milling",
    tagline: "5-axis micro-milling at sub-micron tolerance.",
    category: "CNC Machining",
    image: hyperion,
    overview:
      "The industry standard for 5-axis micro-milling. Achieving tolerances within 0.002mm through thermal-stable carbon composite frames and a closed-loop linear motor architecture.",
    specs: [
      { label: "Precision Delta", value: "0.002 mm" },
      { label: "Spindle Speed", value: "48,000 RPM" },
      { label: "Work Envelope", value: "600 × 400 × 350 mm" },
      { label: "Tool Capacity", value: "32 Stations" },
    ],
    highlights: [
      "Thermal-stable carbon composite frame",
      "Linear motor closed-loop drives",
      "Integrated tool wear telemetry",
    ],
    related: ["omniscan-ai", "titan-6"],
  },
  {
    slug: "omniscan-ai",
    name: "Omniscan AI",
    series: "Vision Inspection",
    tagline: "Neural optical inspection for micro-fracture detection.",
    category: "Inline Inspection",
    image: omniscan,
    overview:
      "Automated optical inspection utilizing on-device neural processing to detect surface micro-fractures invisible to the human eye. Drop-in for high-throughput assembly lines.",
    specs: [
      { label: "Resolution", value: "8K Stereoscopic" },
      { label: "Cycle Time", value: "120 ms" },
      { label: "False Reject", value: "< 0.01%" },
      { label: "Interface", value: "OPC UA / REST" },
    ],
    highlights: [
      "Real-time thermal mapping",
      "On-device neural inference",
      "Closed-loop reject handoff",
    ],
    related: ["hyperion-g5", "nova-inline"],
  },
  {
    slug: "titan-6",
    name: "Titan-6",
    series: "Heavy Articulation",
    tagline: "Six-axis heavy-payload manipulator for forge and weld cells.",
    category: "Industrial Robotics",
    image: titan,
    overview:
      "Engineered for high-torque applications where spatial constraints are minimal. The Titan-6 provides 0.02mm repeatability across a six-axis reach of three meters.",
    specs: [
      { label: "Payload", value: "240 kg" },
      { label: "Reach", value: "3,000 mm" },
      { label: "Repeatability", value: "± 0.02 mm" },
      { label: "Axes", value: "6" },
    ],
    highlights: [
      "Aerospace-grade harmonic drives",
      "IP67 sealed joints",
      "Native ERP integration",
    ],
    related: ["apex-scara", "hyperion-g5"],
  },
  {
    slug: "nova-inline",
    name: "Nova Inline",
    series: "Modular Assembly",
    tagline: "Reconfigurable inline assembler for electronics manufacturing.",
    category: "Assembly Systems",
    image: nova,
    overview:
      "Optimized for electronics and small-parts manufacturing. A modular chassis allows for instantaneous reconfiguration as production needs evolve.",
    specs: [
      { label: "Throughput", value: "1,800 UPH" },
      { label: "Placement Accuracy", value: "± 15 μm" },
      { label: "Modules", value: "Up to 12" },
      { label: "Changeover", value: "< 4 min" },
    ],
    highlights: [
      "Hot-swappable tooling heads",
      "Vision-guided placement",
      "Energy-recuperative drives",
    ],
    related: ["omniscan-ai", "apex-scara"],
  },
  {
    slug: "apex-scara",
    name: "Apex SCARA",
    series: "Cleanroom Platform",
    tagline: "Class 10 cleanroom SCARA for life-sciences automation.",
    category: "Cleanroom Robotics",
    image: apex,
    overview:
      "Certified for Class 10 cleanroom environments. The Apex uses friction-less motion controllers to eliminate particulate shedding during operation.",
    specs: [
      { label: "Cleanroom Class", value: "ISO 4 / Class 10" },
      { label: "Payload", value: "8 kg" },
      { label: "Cycle Time", value: "0.32 s" },
      { label: "Repeatability", value: "± 0.01 mm" },
    ],
    highlights: [
      "Friction-less direct drive",
      "Filtered enclosure interface",
      "Validated for GMP environments",
    ],
    related: ["nova-inline", "titan-6"],
  },
];

export function getMachine(slug: string) {
  return machines.find((m) => m.slug === slug);
}