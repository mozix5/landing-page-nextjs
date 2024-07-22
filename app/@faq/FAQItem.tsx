"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItemProps = {
  question: string;
  answer: string;
  value: string;
};

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={value}>
        <AccordionTrigger className=" font-semibold text-lg">
          {question}
        </AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;
