import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import loc from "@/public/svg/place_outline_24.svg";
import bag from "@/public/svg/bag.svg";
import googleBtn from "@/public/svg/frame10782.svg";
import appleBtn from "@/public/svg/group.svg";

interface ProjectDetailsProps {
  title: string;
  description: string;
  services: string;
  location: string;
  industry: string;
  userGrowth: string;
  activeUsers: string;
  imgSrc: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  services,
  location,
  industry,
  userGrowth,
  activeUsers,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 mt-8">
      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold mt-4">{title}</h2>
        <p className="mt-8 text-gray-600">{description}</p>
        <p className="mt-8 font-medium">{services}</p>
        <div className="mt-8 flex items-center space-x-16">
          <span className="flex items-center space-x-3">
            <Image src={loc} alt="btn" />
            <span className=" font-medium">{location}</span>
          </span>
          <span className="flex items-center space-x-4">
            <Image src={bag} alt="btn" />
            <span className=" font-medium">{industry}</span>
          </span>
        </div>
        <div className="mt-8 flex space-x-12">
          <div>
            <h3 className="text-2xl font-bold">{userGrowth}</h3>
            <p className="text-gray-500 text-base mt-2">User Growth</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{activeUsers}</h3>
            <p className="text-gray-500 text-base mt-2">Active Users</p>
          </div>
        </div>
        <div className="mt-8 flex space-x-4">
          <Button className=" px-0">
            <Image src={appleBtn} alt="btn" />
          </Button>
          <Button className=" px-0">
            <Image src={googleBtn} alt="btn" />
          </Button>
        </div>
      </div>
      <div
      className="lg:w-1/3 object-cover flex justify-center"
      >
        <Image src={imgSrc} alt="project" width={600} height={900}/>
      </div>
    </div>
  );
};

export default ProjectDetails;
