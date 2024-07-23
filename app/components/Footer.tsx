// components/Footer.tsx
import React from "react";
import Image from "next/image";
import logo from "@/public/svg/logo_bg_32.svg";
import phone from "@/public/svg/mobilegray.svg";
import mail from "@/public/svg/mailgray.svg";
import doc from "@/public/svg/document_outline_24.svg";
import place from "@/public/svg/placegray.svg";

type FooterSectionProps = {
  iconSrc: string;
  altText: string;
  title: string;
  content: string;
};

const FooterSection = ({
  iconSrc,
  altText,
  title,
  content,
}: FooterSectionProps) => {
  return (
    <div className="flex flex-col gap-1 bg-black">
      <div className="flex items-center gap-2 text-[#98A2B3]">
        <Image src={iconSrc} alt={altText} />
        <h3 className="text-sm">{title}</h3>
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:mx-8 lg:mx-20 mx-4 rounded-2xl shadow-lg">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-4 justify-center flex">
          <Image src={logo} alt="Company Logo" />
        </div>
        <FooterSection
          iconSrc={phone}
          altText="Phone"
          title="Contact nums"
          content="+91 0000000000"
        />
        <FooterSection
          iconSrc={mail}
          altText="Mail"
          title="Gmail"
          content="abc@gmail.com"
        />
        <FooterSection
          iconSrc={place}
          altText="Place"
          title="Address"
          content="Mumbai, India"
        />
        <FooterSection
          iconSrc={doc}
          altText="Document"
          title="Leave a request"
          content="Leave a request"
        />
      </div>
      <div className="mt-8 text-sm text-center text-[#98A2B3]">
        <p>We work throughout the world</p>
      </div>
    </footer>
  );
};

export default Footer;
