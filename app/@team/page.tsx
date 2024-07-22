import Image from "next/image";
import React from "react";
import fam from "@/public/svg/frame625882.svg";

const TeamSection = () => {
  return (
    <div className="m-20 flex gap-6">
      <div className="flex-1 flex flex-col space-y-12 mr-6">
        <h1>Our Team</h1>
        <p className=" font-medium">
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web and mobile development.
        </p>
        <div className=" flex space-x-12">
          <div>
            <h3 className="text-5xl font-bold">28</h3>
            <p className="text-gray-500 text-base mt-2">User Growth</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">+100</h3>
            <p className="text-gray-500 text-base mt-2">Active Users</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">7 years</h3>
            <p className="text-gray-500 text-base mt-2">Active Users</p>
          </div>
        </div>
        <p className=" font-medium">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It&apos;s expensive
          but worth it
        </p>
      </div>
      <div className="flex-1">
        <Image src={fam} alt="photo" />
      </div>
    </div>
  );
};

export default TeamSection;
