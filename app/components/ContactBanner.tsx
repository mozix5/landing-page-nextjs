import React from "react";
import ContactCard from "./ContactCard";

const ContactBanner = () => {
  return (
    <div className="md:px-8 lg:px-20 px-4 bg-gradient-to-r from-yellow to-moss-green flex lg:flex-row flex-col py-12">
      <div className=" text-white space-y-8 lg:w-1/2 mb-8 lg:mb-0">
        <div>
          <h1>Let&apos;s discuss</h1>
          <h1>your project</h1>
        </div>
        <p className="md:mr-32">
          Let&apos;s figure out how to create an effective application, its cost
          and terms of its development
        </p>
      </div>
        <ContactCard />
    </div>
  );
};

export default ContactBanner;
