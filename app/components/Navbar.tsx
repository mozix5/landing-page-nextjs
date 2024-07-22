import React from "react";
import mail from "@/public/svg/mail_outline_24.svg";
import phone from "@/public/svg/smartphone_outline_24.svg";
import logo from "@/public/svg/logo_bg_21.svg";
import NavButton from "./NavButton";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Media", href: "/media" },
    { label: "Cases", href: "/cases" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <div className="flex justify-between mx-20 bg-white h-20 items-center px-8 rounded-2xl shadow z-40">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex space-x-4">
        {navItems.map((item, index) => (
          <NavButton label={item.label} href={item.href} key={index} />
        ))}
      </div>
      <div className="flex space-x-6">
        <NavButton
          label="+92 9929359595"
          href="tel:+929929359595"
          icon={phone}
          className="text-moss-green"
        />
        <NavButton
          label="mosinmd827@gmail.com"
          href="mailto:mosinmd827@gmail.com"
          icon={mail}
          className="text-moss-green"
        />
      </div>
    </div>
  );
};

export default Navbar;
