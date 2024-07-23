import React from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What is the cost of a mobile application?",
    answer: "The cost of a mobile application varies based on requirements...",
  },
  {
    question: "Do you provide a guarantee for the mobile application?",
    answer: "Yes, we provide a guarantee for our mobile applications...",
  },
  {
    question: "How long will development take?",
    answer: "Development terms directly depend on the requirements...",
  },
  {
    question: "I will not tell my idea, do you guarantee confidentiality?",
    answer: "Yes, we guarantee confidentiality for all our projects...",
  },
];

const FAQSection = () => {
  return (
    <div className="md:p-8 lg:p-20 p-4 py-6 bg-white">
      <h1>FAQ</h1>
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {faqs.map((faq, index) => (
          <FAQItem key={index} value={`item-${index}`} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
