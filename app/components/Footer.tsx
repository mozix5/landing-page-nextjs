// components/Footer.tsx
import React from "react";
import Image from "next/image";
import logo from "@/public/svg/logo_bg_32.svg";
import phone from "@/public/svg/mobilegray.svg";
import mail from "@/public/svg/mailgray.svg";
import doc from "@/public/svg/document_outline_24.svg";
import place from "@/public/svg/placegray.svg";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mx-20 rounded-xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className=" col-span-4 justify-center flex">
          <Image src={logo} alt="Company Logo" />
        </div>
        <div className="flex flex-col gap-2 bg-gray-900">
          <div className=" flex items-center gap-2 text-[#98A2B3]">
            <Image src={phone} alt="Phone" />
            <h3 className="">Contact nums</h3>
          </div>
          <p>+91 0000000000</p>
        </div>
        <div className="flex flex-col gap-2 bg-gray-900">
          <div className=" flex items-center gap-2 text-[#98A2B3]">
            <Image src={mail} alt="mail" />
            <h3 className="">Gmail</h3>
          </div>
          <p>mosinmd827@gmail.com</p>
        </div>
        <div className="flex flex-col gap-2 bg-gray-900">
          <div className=" flex items-center gap-2 text-[#98A2B3]">
            <Image src={place} alt="place" />
            <h3 className="">Address</h3>
          </div>
          <p>Mumbai, India</p>
        </div>
        <div className="flex flex-col gap-2 bg-gray-900">
          <div className=" flex items-center gap-2 text-[#98A2B3]">
            <Image src={doc} alt="document" />
            <h3 className="">Leave a request</h3>
          </div>
          <p>Leave a request</p>
        </div>
      </div>
      <div className="mt-14 text-sm text-center text-[#98A2B3]">
        <p>We work throughout the world</p>
      </div>
    </footer>
  );
};

export default Footer;
