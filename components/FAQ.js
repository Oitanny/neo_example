'use client'

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mb-4">
        <button
          className={`flex justify-between items-center w-full text-left p-4 rounded-lg ${
            isOpen ? 'bg-white text-[#424242]' : 'bg-[#424242] text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">{question}</span>
          {isOpen ? (
            <FiChevronUp className="flex-shrink-0 ml-2" />
          ) : (
            <FiChevronDown className="flex-shrink-0 ml-2" />
          )}
        </button>
        {isOpen && (
          <div className="mt-2 p-4 bg-white rounded-lg">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    );
  };

const FAQ = () => {
  const faqData = [
    {
      question: "How do I create an interview?",
      answer: "To create an interview, navigate to the 'Create Interview' section from the main menu. Follow the step-by-step guide to set up your interview questions, duration, and other parameters."
    },
    {
      question: "Can I customize email templates?",
      answer: "Yes, you can customize email templates. Go to the 'Email' section, where you'll find options to create and edit templates for various communication needs with candidates."
    },
    {
      question: "How do I view candidate profiles?",
      answer: "Candidate profiles can be accessed through the 'Candidates' section in the main menu. Here, you can view details, resumes, and interview performance for each candidate."
    },
    {
      question: "What support options are available?",
      answer: "We offer multiple support channels. You can reach out via the 'Support' section in the menu, which includes options for live chat, email support, and access to our knowledge base."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow flex-grow p-6 mt-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;