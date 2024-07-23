import React from "react";
import ContactCard from "../../ContactCard";

const HeroSection = () => {
  return (
    <div className=" md:mx-8 lg:mx-20 mx-4 pt-6">
      <div className=" lg:text-5xl text-4xl font-bold flex flex-col leading-tight lg:w-[45vw] mt-6">
        <span className=" text-yellow">
          User-Centric Excellence: <span className=" text-black">Our</span>
        </span>
        <span>App Development Services</span>
        <span>Tackle your pain points</span>
      </div>
      <div className="lg:w-[45vw] font-medium text-lg mt-6 leading-tight">
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

export default HeroSection;
