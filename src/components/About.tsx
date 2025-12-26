
'use client';
import React from 'react';

const reasons = [
  {
    id: "01",
    title: "Careful & Fun",
    description: "Tracking development should be joyful! Our playful design makes it fun for kids and parents alike."
  },
  {
    id: "02",
    title: "Super Easy",
    description: "No complicated forms. Just tap, track, and celebrate. Takes seconds to log each moment."
  },
  {
    id: "03",
    title: "Safe & Secure",
    description: "No complicated forms. Just tap, track, and celebrate. Takes seconds to log each moment."
  },
  {
    id: "04",
    title: "Smart Insights",
    description: "See patterns and trends over time. Understand your child's unique rhythm and needs."
  },
  {
    id: "05",
    title: "Celebrate Growth",
    description: "Every milestone matters. Get reminders to celebrate your child's amazing progress."
  }
];
export default function About() {
  return (
    <section id="about" className="w-full bg-white  flex flex-col items-center">
      
      <div className="relative w-full max-w-[1440px] h-[529px] bg-brand-blue  flex flex-row items-center justify-between overflow-hidden">
        <div className="flex flex-col w-[610px] h-[356px] absolute top-[87px] left-[114px] gap-[24px] text-white">
          <div className="w-[179px] h-[42px] rounded-[20px] border-[1px] border-white p-[10px] gap-[10px] flex flex-row items-center  ">
            <span className="font-poppins text-[14px] leading-[160%]">Caring Is Always Free</span>
          </div>

          <h6 className="font-poppins font-bold text-[29px] leading-[160%]">
            We Help Your Children <br />
            <span className="text-brand-yellow">Grow with Confidence</span>
          </h6>

          <p className="w-[610px] h-[174px] font-poppins text-[18px] leading-[160%] text-white">
            We believe every childs growth journey is unique and special. 
            BetterMontessori  was created by parents and educators who wanted a simple, joyful way to track and celebrate every milestone.
            Our mission is to help parents and educators stay connected to childrens
            development, making it easy to see patterns, celebrate progress, and support growth in a fun, colorful way
          </p>
        </div>
        <div className="w-[359px] h-[383px] bg-white rounded-[40px] absolute top-[73px]  left-[967px] border-[6px] border-white">
          <p className=" w-[350px] h-[87px] absolute top-[256px] left-[5px] font-poppins font-bold text-[18px] text-center leading-[160%] text-black">
            “Empowering little learners to build big futures with curiosity and kindness.”
          </p>
        </div>
      </div>
      <div className="mt-[100px] flex flex-col items-center gap-[40px]">
        <h3 className="font-poppins font-bold text-[41px]">
          Why Choose Better <span className="text-brand-blue">Montessori</span>?
        </h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 max-w-[1300px] mx-auto">
          {reasons.map((item) => (
            <div key={item.id} 
            className="flex items-start gap-6 group w-full sm:w-[320px] lg:w-[380px]">
              <div className="w-[87px] h-[89px] rounded-[8px] bg-[#C1EAF5] text-brand-blue text-[41px]  flex items-center justify-center font-bold ">
                {item.id}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-brand-blue font-bold text-[23px] leading-[160%] font-poppins w-[243px] h-[37px] ">{item.title}</h3>
                <p className="text-[#4D4D4D] text-[16px] leading-[160%] font-poppins w-[243px] h-[78px] ">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
            
        
      </div>
    </section>
  );
}
