import React from "react";
import HeroSection from "./components/ui/hero/HeroSection";
import DevCycleSection from "./components/ui/devCycle/DevCycleSection";
import ProjectSection from "./components/ui/projects/ProjectSection";
import AppDevStagesSection from "./components/ui/appDevStages/AppDevStagesSection";
import TeamSection from "./components/ui/team/TeamSection";
import FAQSection from "./components/ui/FAQ/FAQSection";
import ContactBanner from "./components/ContactBanner";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute inset-0 lg:bg-custom-bg bg-no-repeat bg-right-top bg-contain h-screen"></div>
      <HeroSection />
      <DevCycleSection />
      <ProjectSection />
      <AppDevStagesSection />
      <ContactBanner />
      <TeamSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
