import React from "react";
import ContactCard from "../components/navbar/ContactCard";

const HomeSection = () => {
  return (
    <div className=" mx-20">
      <div className=" text-5xl font-bold flex flex-col leading-tight w-[45vw] mt-6">
        <span className=" text-yellow">
          User-Centric Excellence: <span className=" text-black">Our</span>
        </span>
        <span>App Development Services</span>
        <span>Tackle your pain points</span>
      </div>
      <div className="w-[45vw] font-medium text-lg mt-6 leading-tight">
        Experience a Seamless Digital Journey with{" "}
        <span className=" text-moss-green font-semibold">Desun</span> - Where
        Every Line of Code Resolves Your Challenges and
        <span className=" text-yellow font-semibold">
          {" "}
          Elevates Your App Experience
        </span>{" "}
        to Unparalleled Heights.
      </div>
      <div className=" py-6">
        <ContactCard
          heading="Leave your contacts and we will call you back within 30 minutes"
          mode={2}
          className="bg-moss-green text-wrap py-8 px-8"
        />
      </div>
    </div>
  );
};

export default HomeSection;
