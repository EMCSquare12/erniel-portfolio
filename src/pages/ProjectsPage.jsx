import React from "react";
import {
  IconReactJs as ReactJs,
  IconNodeJs as NodeJs,
  IconMongoDb as MongoDb,
  IconExpressJs as ExpressJs,
} from "../assets";

import { Card } from "../components/Card";
const icons = [MongoDb, ExpressJs, ReactJs, NodeJs];
const projectDetails = [
  {
    title: "Modern Tech Marketplace",
    descriptions: [
      "A high-performance e-commerce platform for consumer electronics, combining advanced inventory management with a secure, user-centric shopping experience.",
    ],
  },
  {
    title: "Frontend Technical Highlights",
    descriptions: [
      "Responsive Mobile-First Design: Implemented fluid layouts and media queries to ensure a seamless user experience across all devices, prioritizing performance and readability on mobile screens.",
      "Global State & Data Fetching: Managed complex application states and streamlined asynchronous API interactions using Redux, ensuring a predictable and centralized data flow.",
      "Real-Time Updates: Integrated Socket.IO to provide users with instant, live shipping status notifications without requiring page refreshes.",
      "Performance Optimization: Developed a custom Debounce hook to throttle API requests during search and category filtering, significantly reducing server load and improving UI responsiveness.",
      "Seamless Data Loading: Implemented Infinite Scroll for a modern, fluid browsing experience, eliminating the friction of traditional pagination.",
      "Secure Payment Processing: Integrated the Stripe API to handle sensitive transaction data securely, supporting a robust and reliable checkout workflow.",
      "Flexible Authentication: Built a versatile login system offering both traditional email/password accounts and streamlined Google OAuth for a frictionless user onboarding experience.",
    ],
  },
  {
    title: "Backend Technical Highlights",
    descriptions: [
      "Database Architecture: Leveraged MongoDB with Mongoose ODM to design a flexible, scalable NoSQL schema, ensuring efficient data modeling and high-performance queries.",
      "Secure Authentication: Implemented JSON Web Tokens (JWT) to manage stateless user sessions, providing a secure and scalable method for verifying user identities across the platform.",
      "Role-Based Access Control (RBAC): Developed a robust Authorization system to enforce granular permissions, distinguishing between standard clients and administrative users to protect sensitive data and operations.",
      "RESTful API Development: Engineered a structured and scalable API to facilitate seamless communication between the frontend and the database, following industry-standard design patterns for maintainability.",
    ],
  },
];

// Reusable Mini Gallery Item Component
const MiniGalleryItem = ({ title, tech, label }) => (
  <div>
    <div className="bg-slate-800 h-24 rounded-lg mb-2 border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
      [{label}]
    </div>
    <p className="text-xs text-white">{title}</p>
    <p className="text-[10px] text-slate-400 mb-1">({tech})</p>
    <div className="flex space-x-1">
      <span className="w-4 h-4 rounded bg-slate-700"></span>
      <span className="w-4 h-4 rounded bg-slate-700"></span>
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* HEADER */}
      <h2 className="text-2xl font-bold text-white tracking-wide uppercase">
        FEATURED PORTFOLIO{" "}
        <span className="text-slate-400 font-light normal-case">
          | MERN Stack & Data Analytics
        </span>
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Featured Hybrid Project */}
        <ProjectsPage
          icons={icons}
          title="Featured Project: ProShop"
          description={projectDetails}
          className="col-span-1"
        />

        {/* RIGHT AREA: Spans 2 columns */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TOP RIGHT: Data Science Project (Spans 2 columns of its parent grid) */}
          <Card className="lg:col-span-2">
            <h3 className="font-bold text-white mb-4 uppercase text-sm">
              Data Science Project: Customer Segmentation
            </h3>

            {/* 2 Dashboards Side-by-Side */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-800 h-40 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                [Map Dashboard]
              </div>
              <div className="bg-slate-800 h-40 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 text-sm">
                [Bar Chart Dashboard]
              </div>
            </div>

            <h4 className="font-bold text-white text-sm mb-1">
              Tableau dashboard
            </h4>
            <p className="text-sm text-slate-400 flex items-center justify-between">
              <span>
                MERN-based data capture -&gt; SQL analysis -&gt; Tableau
                visualization.
              </span>
              <span className="flex space-x-2">
                {/* Mini icons */}
                <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs">
                  📊
                </span>
                <span className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs">
                  SQL
                </span>
              </span>
            </p>
          </Card>

          {/* BOTTOM MIDDLE: ProShop Duplicate / IT Support Placeholder */}
          <div className="space-y-6 flex justify-stretch">
            <ProjectsPage
              icons={icons}
              title={projectDetails.title}
              contents={projectDetails.description}
              className="col-span-1"
            />
          </div>

          {/* BOTTOM RIGHT: Project Gallery (ALL) */}
          <Card>
            <h3 className="font-bold text-white mb-4 uppercase text-sm">
              Project Gallery (All)
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <MiniGalleryItem
                title="E-Commerce App"
                tech="React/Node"
                label="App"
              />
              <MiniGalleryItem
                title="HR Data Reporting"
                tech="Excel/VBA/SQL"
                label="Report"
              />
              <MiniGalleryItem
                title="Supply Chain Dashboard"
                tech="Power Query/Power BI"
                label="Dashboard"
              />
              <MiniGalleryItem
                title="Web Scraper & Data Cleaner"
                tech="Python/Node/MERN"
                label="Scraper"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
