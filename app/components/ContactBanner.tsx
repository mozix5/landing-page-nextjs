import React from "react";
import ContactCard from "./ContactCard";

const ContactBanner = () => {
  return (
    <div className="px-20 bg-gradient-to-r from-yellow to-moss-green flex py-12">
      <div className=" text-white space-y-8 w-1/2">
        <div>
          <h1>Let&apos;s discuss</h1>
          <h1>your project</h1>
        </div>
        <p className="mr-32">
          Let&apos;s figure out how to create an effective application, its cost and
          terms of its development
        </p>
      </div>
      <ContactCard mode={2}/>
    </div>
  );
};

export default ContactBanner;
