import {
  IconReactJs,
  IconSQL,
  IconExcel,
  IconPowerBi,
  IconNodeJs,
  IconExpressJs,
  IconMongoDb,
} from "../assets";

export const homeSkillsData = [
  { name: "MERN Stack", value: 90, color: "#3b82f6", icon: IconReactJs },
  { name: "SQL", value: 85, color: "#38bdf8", icon: IconSQL },
  { name: "Excel/Power Query", value: 80, color: "#14b8a6", icon: IconExcel },
  { name: "Power BI/Tableau", value: 80, color: "#06b6d4", icon: IconPowerBi },
];

export const mernSkills = [
  { label: "React", range: "90-10", percentage: 90, colorClass: "bg-blue-500" },
  {
    label: "Node.js",
    range: "10-18",
    percentage: 75,
    colorClass: "bg-blue-400",
  },
  {
    label: "Express.js",
    range: "6-15",
    percentage: 65,
    colorClass: "bg-blue-400",
  },
  { label: "MongoDB", range: "0-8", percentage: 50, colorClass: "bg-blue-300" },
];

export const dataSkills = [
  { label: "Excel", range: "", percentage: 85, colorClass: "bg-teal-400" },
  { label: "SQL", range: "", percentage: 80, colorClass: "bg-teal-500" },
  { label: "Power BI", range: "", percentage: 75, colorClass: "bg-teal-400" },
  { label: "Tableau", range: "", percentage: 70, colorClass: "bg-teal-300" },
];

export const skillNodesData = [
  {
    icon: IconReactJs,
    title: "React",
    subtitle: "MERN App/Web",
    score: 90,
    themeColor: "blue",
    positionClasses: "top-[25%] left-[32%]",
  },
  {
    icon: IconNodeJs,
    title: "NodeJs",
    subtitle: "End-to-End Logic",
    score: 90,
    themeColor: "blue",
    positionClasses: "top-[45%] left-[13%]",
  },
  {
    icon: IconExpressJs,
    title: "Express.js",
    subtitle: "API Development",
    score: 90,
    themeColor: "blue",
    positionClasses: "bottom-[40%] left-[24%]",
  },
  {
    icon: IconMongoDb,
    title: "MongoDB",
    subtitle: "Performance Tuning",
    score: 90,
    themeColor: "blue",
    positionClasses: "bottom-[20%] left-[18%]",
  },
  {
    icon: IconExcel,
    title: "Excel",
    subtitle: "Formulas & Pivots",
    score: 85,
    themeColor: "teal",
    positionClasses: "top-[25%] right-[32%]",
  },
  {
    icon: IconExcel,
    title: "Data Cleaning",
    subtitle: "Excel/Power Query",
    score: 85,
    themeColor: "teal",
    positionClasses: "top-[45%] right-[13%]",
  },
  {
    icon: IconSQL,
    title: "SQL",
    subtitle: "Complex SQL Queries",
    score: 85,
    themeColor: "teal",
    positionClasses: "bottom-[40%] right-[23%]",
  },
  {
    icon: IconPowerBi,
    title: "Data Visualization",
    subtitle: "Power BI/Tableau",
    score: 85,
    themeColor: "teal",
    positionClasses: "bottom-[20%] right-[17%]",
  },
];
