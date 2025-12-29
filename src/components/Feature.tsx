


export default function Feature() {
   const features = [
    { title: "Mood Tracker",
     description: "Track happy, energetic, neutral, sad, and angry moods with fun emojis. See patterns over time!", 
     icon: "🤩" 
    },
    { title: "Meal Time", 
    description: "Log meal times and what was eaten. Monitor nutrition and eating patterns of your child.", 
    icon: "🍼" 
  },
    { title: "Attendance",
     description: "Mark present or absent. Keep track of school days and special occasions of your child.", 
     icon: "🏅" 
    },
    { title: "Behaviour",
     description: "Log behaviors like smiling, focused, curious, and more. Celebrate the good moments!", 
     icon: "🏆" 
    },
    { title: "Potty Training",
     description: "Track potty training progress. Celebrate milestones and build confidence!", 
     icon: "🚽" 
    },
    { title: "Nap Time", 
      description: "Track total nap time and sleep patterns. Understand your child's rest needs.",
       icon: "😴" },
  ];
  return (
    <section id="feature" className="w-full bg-white py-10">
      <div className="flex flex-col items-center w-full max-w-[1022px] mx-auto gap-[24px]">
        <div className="flex flex-col items-center w-full max-w-[530px] text-center relative">
          
          <h2 className="font-poppins font-bold text-[46px] leading-[160%] text-black">
            Watch Your Little One <br />
               
             Grow & Shine!
          </h2>
          <div className="
    absolute 
    top-[77.31px]
    right-[390.37px]    
    w-[120.73px] 
    h-[28.29px] 
    bg-[#38BAE0] 
    text-white 
    rounded-[20px] 
    flex items-center justify-center 
    -rotate-[25deg]  
    font-bold 
    text-[12px] 
    z-10             
    shadow-sm
  ">
    Curiosity Leads
  </div>
        </div>
        <div className="max-w-[1022px] w-full text-center">
        <p className="font-reem font-normal text-[26px] leading-[160%] text-black">
          Track moods, behaviors, meals, naps, and potty training all in one fun app. 
          See your childs amazing journey unfold!
        </p>
      </div>
     <button className="bg-brand-blue text-white px-[16px] py-[10px] w-[194px] h-[49px] rounded-[8px] border border-brand-blue font-poppins font-bold text-[18px] flex items-center justify-center gap-[10px] mt-2 transition-transform hover:scale-105">
          Get started 
          <span className="text-[20px]">→</span>
        </button>
      </div>
      <div className="flex flex-col items-center w-full max-w-[659px] mx-auto mt-[100px] p-[10px] gap-[4px] text-center">
        <h3 className="font-poppins font-bold text-[41px] leading-[160%] text-black text-center">
          Everything You Need To Track!
        </h3>
        <p className="font-poppins font-normal text-[23px] leading-[160%] text-[#6C6C6C] max-w-[435px]">
           Keep track of what your child is doing.
        </p>
    
      </div>

      <div className="w-full max-w-[1004px] mx-auto mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
         {features.map((feature, index) => (
    <div
      key={index}
      className="bg-[#EBF8FC] h-[273px] w-[268px] rounded-[16px] border-[3px] border-brand-blue p-6 flex flex-col items-center gap-4"
    >
  
      <div className="w-[60px] h-[60px] flex items-center justify-center bg-white rounded-[110px] border-[1px] border-brand-blue text-[30px]">
        {feature.icon}
      </div>

      <h4 className="font-poppins font-bold text-[20px] text-[#184E5E] text-center">
        {feature.title}
      </h4>

      <p className="w-[227px] h-[66px] font-poppins font-normal text-[13px] leading-[160%] text-[#184E5E] text-center rotation-0">
        {feature.description}
      </p>
    </div>
  ))}
      
      </div>
    </section>
  )
}

