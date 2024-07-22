"use client";
import React, { useState } from "react";
import Image from "next/image";
import add from "@/public/svg/add_36.svg";
import cross from "@/public/svg/cross.svg";
import IconLabel from "../components/IconLabel";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className=" font-semibold">{question}</div>
        {isOpen ? <IconLabel icon={cross} /> : <IconLabel icon={add} />}
      </div>
      {isOpen && <div className="pb-2 text-gray-700 mt-6">{answer}</div>}
    </div>
  );
};

export default FAQItem;
