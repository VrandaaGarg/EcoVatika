import React from "react";

const Faqs = () => {
  const faqs = [
    {
      question: "How do I use the RecycleItem SearchBar?",
      answer:
        "To use the RecycleItem SearchBar, simply type the name of the item you wish to recycle into the search bar. You will receive detailed information about the item's recyclability, material composition, recycling instructions, local recycling guidelines, and more.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        " Subscribe to our newsletter to get the latest updates and announcements directly to your inbox. Additionally, you can send us an email at ecovatika@gmail.com, and our support team will get back to you as soon as possible.",
    },
    {
      question: "What is EcoScore?",
      answer:
        "EcoScore is a carbon footprint calculator available on EcoVatika. By inputting data such as O3, NO2, particulate matter, solar energy consumption, fuel consumption (L), and car travel (km), you can estimate your carbon equivalents and understand your environmental impact.",
    },
    {
      question: "What is the Sustainable Quiz?",
      answer:
        "The Sustainable Quiz is an engaging tool on EcoVatika that tests your knowledge of sustainability. Answer 10 questions to see how much you know about eco-friendly practices and get tips to improve your sustainability efforts.",
    },
  ];

  return (
    <div className="max-w-4xl py-12 mx-12 md:mx-auto">
      <h2 className="text-4xl text-black dark:text-white font-bold mb-10 text-center">
        Questions & Answers
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 flex-shrink-0 bg-[#7cd136] text-white  rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9l3-3 3 3m0 6l-3 3-3-3"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
