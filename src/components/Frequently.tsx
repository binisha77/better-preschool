


'use client';
import React, { useState } from 'react';



const faqData = [
  {
    question: "Is BetterMontessori free?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. After that, we have affordable plans starting at just $9.99/month."
  },
  {
    question: "Is BetterMontessori free?",
  },
  {
    question: "Is BetterMontessori free?",
  },
  {
    question: "Is BetterMontessori free?",
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Frequently Asked Questions!
        </h2>
        <div className="space-y-4 mb-16">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="w-[698px] border-[2px] border-[#28849F] rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left "
              >
                <span className="font-bold text-black text-[20px] leading-[160%]">{item.question}</span>
                <div className={`w-8 h-8 rounded-full bg-[#38BAE0] flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-black text-[18px] leading-relaxed  pt-4">
                  {item.answer}
                </div>
              </div> 
            </div>
          ))}
        </div>
        <div className="bg-[#EBF8FC] w-[698px] h-[178px] rounded-[20px] p-10 border border-[#A9A9A9] text-center">
          <h3 className="text-[23px] text-center font-poppins font-bold text-black leading-[160%] mb-2">Still have questions?</h3>
          <p className="w-[590px] h-[32px] text-black text-[20px] font-poppins ">
            Can not find the answers of the questions you are looking for?
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-[20px] border border-[1px] font-bold ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}