import React from "react";
import DevelopmentStageCard from "./DevelopmentStageCard";
import Image from "next/image";
import dev from "@/public/svg/computercoding.svg";
import design from "@/public/svg/design.svg";
import hosting from "@/public/svg/hosting.svg";
import plan from "@/public/svg/plan.svg";
import test from "@/public/svg/security.svg";
import support from "@/public/svg/application.svg";
import phone from "@/public/svg/hope_gif1.svg";
const stages = [
  {
    icon: plan,
    title: "Analysis",
    description:
      "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    icon: design,
    title: "Design",
    description:
      "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
  },
  {
    icon: dev,
    title: "Development",
    description:
      "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
  },
  {
    icon: test,
    title: "Testing",
    description:
      "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.",
  },
  {
    icon: hosting,
    title: "Launching",
    description:
      "We design the application page and publish it in the App Store and Google Play stores.",
  },
  {
    icon: support,
    title: "Support",
    description:
      "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
  },
];

const AppDevStagesSection = () => {
  return (
    <div className="md:p-8 lg:p-20 p-4 bg-white">
      <h1>Application Development Stages</h1>
      <div className=" grid lg:grid-flow-col content-evenly grid-rows-3 justify-center items-center gap-4 my-8 lg:mt-12">
        {stages.slice(0, 3).map((stage, index) => (
          <DevelopmentStageCard
            key={index}
            icon={stage.icon}
            title={stage.title}
            description={stage.description}
          />
        ))}
        <div className=" lg:row-span-3 lg:w-[33vw] flex justify-center h-full">
          <Image src={phone} alt="phone" />
        </div>
        {stages.slice(3, 6).map((stage, index) => (
          <DevelopmentStageCard
            key={index}
            icon={stage.icon}
            title={stage.title}
            description={stage.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AppDevStagesSection;
