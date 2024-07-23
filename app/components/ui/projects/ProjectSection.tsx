import React from "react";
import IconLabel from "../../IconLabel";
import ProjectShowCase from "./ProjectShowCase";
import ar from "@/public/svg/ar.svg";
import bag from "@/public/svg/bag.svg";
import bank from "@/public/svg/bank.svg";
import social from "@/public/svg/health.svg";
import heart from "@/public/svg/heart.svg";
import construction from "@/public/svg/construction.svg";
import edu from "@/public/svg/edu.svg";
import car from "@/public/svg/car.svg";
import food from "@/public/svg/food.svg";
import movies from "@/public/svg/movies.svg";
import startup from "@/public/svg/startup.svg";
import wand from "@/public/svg/wand.svg";
import play from "@/public/svg/play.svg";
import sports from "@/public/svg/sport.svg";

const items = [
  { icon: social, label: "Social media" },
  { icon: sports, label: "Fitness and sport" },
  { icon: bank, label: "Bank" },
  { icon: construction, label: "Construction" },
  { icon: sports, label: "Game projects" },
  { icon: edu, label: "Education" },
  { icon: car, label: "Auto, transport" },
  { icon: heart, label: "Medicine, health" },
  { icon: food, label: "Restaurants, food delivery" },
  { icon: bag, label: "Marketplaces" },
  { icon: ar, label: "AR technology" },
  { icon: movies, label: "TV series" },
  { icon: startup, label: "Startups" },
  { icon: wand, label: "Religion" },
  { icon: play, label: "Online courses" },
];

const ProjectSection = () => {
  return (
    <div className="md:m-8 lg:m-20 m-4">
      <div className=" font-bold text-4xl leading-snug text-center">
        <h1>
          Developed more than <span className=" text-moss-green">100</span>
        </h1>
        <h1>
          projects in <span className=" text-moss-green">15</span> industries
        </h1>
      </div>
      <div className=" grid grid-flow-row gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <IconLabel key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
      <div className=" mt-12 lg:mt-20">
        <div className="lg:w-1/2">
          <h1>Projects we are proud of</h1>
          <p className="mt-6">
            Our software development company is truly proud of the wonderful
            clients we have worked with. We enjoy a long-term partnership
          </p>
        </div>
        <div className="mt-12">
          <ProjectShowCase />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
