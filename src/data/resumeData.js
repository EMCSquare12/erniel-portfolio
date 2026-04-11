import {
  CertWebDev,
  CertWebDevLite,
  CertNodeJs,
  CertReact,
  CertDataAnalysis,
  CertExcel,
  CertPowerBi,
  CertSQL1,
  CertSQL2,
  CertDataChart,
  CertWebDeveloper,
  IconSQL,
} from "../assets";

export const timelineData = [
  {
    role: "Housekeeping",
    period: "2016-2018",
    color: "bg-blue-400",
    bullets: [
      "Maintained cleanliness across all assigned areas.",
      "Ensured resident comfort by upholding high standards of room upkeep and sanitation.",
      "Followed safety protocols to consistently meet hygiene and organization requirements.",
    ],
  },
  {
    role: "Data Encoder",
    period: "2019-2020",
    color: "bg-teal-400",
    bullets: [
      "Encoded signed delivery receipts into the system.",
      "Processed high volumes of delivery data for messengers and their respective consignees",
      "Maintained precise records of telecommunications deliveries",
    ],
  },
  {
    role: "Admin Clerk",
    period: "2021-2022",
    color: "bg-slate-500",
    bullets: [
      "Assisted the Store Manager in daily operations and general store management.",
      "Handled incoming deliveries and verified inventory accuracy.",
      "Arranged store displays. Optimize product visibility and visual appeal.",
    ],
  },
  {
    role: "Admin and IT Support",
    period: "Current",
    color: "bg-slate-600",
    bullets: [
      "Assisted the Store Manager in daily operations and general store management.",
      "Handled incoming deliveries and verified inventory accuracy.",
      "Arranged store displays. Optimize product visibility and visual appeal.",
    ],
  },
];

export const badgesData = [
  {
    id: "web",
    icon: CertWebDeveloper,
    iconClass: "bg-slate-800 text-green-500 border-slate-600 p-1",
    title: "Web Development Master Class",
    images: [
      { src: CertWebDev, alt: "Web Dev Bootcamp" },
      { src: CertWebDevLite, alt: "Web Dev Lite" },
      { src: CertNodeJs, alt: "NodeJS Complete Guide" },
      { src: CertReact, alt: "React Complete Guide" },
    ],
  },
  {
    id: "data",
    icon: CertDataChart,
    iconClass:
      "bg-yellow-600/20 text-yellow-500 border-yellow-600/30 text-lg p-1",
    title: "Data Analyst, Excel, Power BI Expert",
    images: [
      { src: CertDataAnalysis, alt: "Data Analysis" },
      { src: CertExcel, alt: "Excel Expert" },
      { src: CertPowerBi, alt: "Power BI Expert" },
    ],
  },
  {
    id: "sql",
    icon: IconSQL,
    iconClass: "bg-blue-600/20 text-blue-500 border-blue-600/30 text-lg",
    title: "Database (SQL) Proficiency",
    images: [
      { src: CertSQL1, alt: "SQL Certificate 1" },
      { src: CertSQL2, alt: "SQL Certificate 2" },
    ],
  },
];
