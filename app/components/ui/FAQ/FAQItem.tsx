import React from "react";
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
