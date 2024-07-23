import Image from "next/image";
import React from "react";
import fam from "@/public/svg/frame625882.svg";

const TeamSection = () => {
  return (
    <div className="md:m-8 lg:m-20 m-4 my-8 flex flex-col lg:flex-row gap-6">
      <div className="flex-1 flex flex-col space-y-12 mr-6">
        <h1>Our Team</h1>
        <p className=" font-medium">
          Thousand is a full-cycle digital production company with its own
          product analytics, design, web and mobile development.
        </p>
        <div className=" flex justify-between lg:space-x-12">
          <div>
            <h3 className="lg:text-5xl text-2xl font-bold">28</h3>
            <p className="text-gray-500 text-base mt-2">User Growth</p>
          </div>
          <div>
            <h3 className="lg:text-5xl text-2xl font-bold">+100</h3>
            <p className="text-gray-500 text-base mt-2">Active Users</p>
          </div>
          <div>
            <h3 className="lg:text-5xl text-2xl font-bold">7 years</h3>
            <p className="text-gray-500 text-base mt-2">Active Users</p>
          </div>
        </div>
        <p className=" font-medium">
          All the necessary specialists - from a designer to a tester - are on
          our staff. We hire the best specialists in the market. It&apos;s expensive
          but worth it
        </p>
      </div>
      <div className="flex-1 object-cover">
        <Image src={fam} alt="photo" />
      </div>
    </div>
  );
};

export default TeamSection;
