

'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "left" 
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "right"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "left"
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "right"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-full py-20 flex flex-col lg:flex-row items-center ioverflow-hidden">
            <div className="lg:w-1/2 bg-brand-blue p-10 md:p-16 pl-6 md:pl-[60px] rounded-tr-[5rem] text-white self-stretch flex flex-col justify-center">
        <h2 className="text-[29px] md:text-5xl font-bold mb-8 leading-tight">
          Hear From Our Parents And Community!
        </h2>
        
        <div className="space-y-6 font-poppins text-white leading-relaxed text-[18px]">
          <p>
            Welcome To Our Testimonials Section, Where You Can Discover The Heartfelt Stories And Genuine Experiences Of Our Parents And Communities.
          </p>
          <p className="font-poppins text-[18px] leading-[160%]">
            &ldquo;Where real voices reflect the trust, growth, and joyful learning that define BetterMontessori. Explore the inspiring journeys shared by families who have been part of our Montessori experience.&rdquo;
          </p>
        </div>
      </div>

   
      <div className="lg:w-1/2 w-full space-y-6 lg:px-10 py-18">
        {testimonials.map((t) => (
          <div 
            key={t.id} 
            className={`flex flex-col max-w-sm transition-transform  ${
              t.alignment === 'right' ? 'ml-auto' : 'ml-0'
            }`}
          >
           
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-[#D9D9D9] rounded-full flex-shrink-0" />
              <div className='bg-[#F2F2F2]'>
                <h4 className="font-bold text-black  leading-none">{t.name}</h4>
                <p className="text-xs text-[#737373] mt-1">{t.role}</p>
              </div>
            </div>
            <p className="text-[#184E5E] text-[18px] leading-relaxed ">
              {t.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

}
