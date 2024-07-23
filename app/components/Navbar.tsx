"use client";
import React, { useState } from "react";
import mail from "@/public/svg/mail_outline_24.svg";
import phone from "@/public/svg/smartphone_outline_24.svg";
import logo from "@/public/svg/logo_bg_21.svg";
import NavButton from "./NavButton";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Cases", href: "/cases" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacts", href: "/contacts" },
];
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="lg:mx-20 md:mx-8 mx-4 sticky top-6 bg-white min-h-20  px-8 rounded-2xl shadow z-40 flex justify-between items-center">
        <button
          className="lg:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className=" hidden lg:flex flex-col lg:flex-row space-x-4">
          {navItems.map((item, index) => (
            <NavButton label={item.label} href={item.href} key={index} />
          ))}
        </div>
        <div className="lg:flex flex-col lg:flex-row space-x-6 hidden">
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
      {mobileMenu && (
        <div className="flex flex-col bg-white w-full absolute top-full left-0 px-8 rounded-2xl shadow-md">
          {" "}
          <div className="flex flex-col my-6 justify-start">
            {navItems.map((item, index) => (
              <NavButton label={item.label} className="px-0 justify-start" href={item.href} key={index} />
            ))}
          </div>
          <div className="flex flex-col pb-8">
            <NavButton
              label="+92 9929359595"
              href="tel:+929929359595"
              icon={phone}
              className="text-moss-green justify-start px-0"
            />
            <NavButton
              label="mosinmd827@gmail.com"
              href="mailto:mosinmd827@gmail.com"
              icon={mail}
              className="text-moss-green justify-start px-0"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
