import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DashboardPage from "./pages/DashboardPage";
import SkillsPage from "./pages/SkillsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  // Track which page is currently active
  const [activeTab, setActiveTab] = useState("HOME");

  // Render the correct component based on state
  const renderContent = () => {
    switch (activeTab) {
      case "HOME":
        return <HomePage />;
      case "PROJECTS":
        return <ProjectsPage />;
      case "DASHBOARD":
        return <DashboardPage />;
      case "SKILLS":
        return <SkillsPage />;
      case "RESUME":
        return <ResumePage />;
      case "CONTACT":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-slate-200 font-sans overflow-hidden">
      {/* Pass state setter to Sidebar so clicking buttons updates the view */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 overflow-y-auto p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
}
