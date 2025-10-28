import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-50">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none px-6 py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-blue-700">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden px-6 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is AppOrbit?",
      answer:
        "AppOrbit is a platform designed to help tech enthusiasts discover and explore the future of innovation, offering insights into various tech products and trends.",
    },
    {
      question: "How can I join the community?",
      answer:
        "You can join our community by signing up for a free account. This will give you access to exclusive content, polls, and discussions.",
    },
    {
      question: "Is AppOrbit free to use?",
      answer:
        "Yes, basic access to AppOrbit is completely free. We may offer premium features or content in the future.",
    },
    {
      question: "How often are new products featured?",
      answer:
        "We regularly update our featured and trending products sections to keep you informed about the latest innovations in the tech world.",
    },
    {
      question: "Can I submit my own product for review?",
      answer:
        "Currently, product submissions are by invitation or through our internal review process. We are working on a feature to allow community submissions in the future.",
    },
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50 rounded-2xl mt-4 md:mt-10" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-blue-700 text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;