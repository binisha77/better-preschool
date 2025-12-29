'use client';
import Image from "next/image";

const cloudBumps = [
  { left: '-76.52px', top: '12.4px' },
  { left: '35.84px', top: '60.56px' },
  { left: '160.31px', top: '66.95px' },
  { left: '284.8px', top: '73.34px' },
  { left: '423.43px', top: '48.99px' }, 
  { left: '562.09px', top: '24.64px' },
  { left: '700.75px', top: '0px' },
  { left: '819.15px', top: '29.27px' },
  { left: '937.53px', top: '58.55px' },
  { left: '1055.91px', top: '88.12px' },
  { left: '1160.6px', top: '63.12px' },
  { left: '1265.28px', top: '38.12px' },
];



export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-brand-blue py-24 w-full min-h-screen ">
    
      
      <div className="absolute top-[-100px] left-0 w-full h-[300px] flex justify-center pointer-events-none z-0">
        {cloudBumps.map((bump, i) => (
          <div
            key={i}
               style={{ 
                left: bump.left, 
                top: bump.top,
                width: '175.54px',
                height: '155px' 
              }}
            className="
             
          absolute            
          bg-white        
          rounded-full 
          flex-shrink-0
          rotate-[178.9deg] 
          border border-white
          
            "
          />
        ))}
      </div>
      <div className="relative max-w-[1275px] mx-auto px-6 flex flex-col gap-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="rotate-[-1.66deg] border-[3px] border-black bg-white px-8 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-poppins font-bold text-[32px] text-black">
              Get In Touch
            </h3>
          </div>

          <p className="max-w-[566px] h-[26px] font-poppins text-white text-[16px] leading-[160%] ">
            Have questions? We’d love to hear from you! Reach out anytime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full  max-w-[1275px] mx-auto">

          <div className="bg-white rounded-[22px] min-h-[662px] w-full p-6 md:p-10">
            <h4 className="font-poppins font-bold max-w-full text-[24px] md:text-[29px] mb-6">
              Send Us a Message!
            </h4>

            <form className="flex flex-col gap-5">
              {[
                { label: "Your Name", placeholder: "e.g., Jon Doe" },
                { label: "Email Address", placeholder: "e.g., john@email.com" },
                { label: "Subject", placeholder: "How can we help?" },
              ].map((item, i) => (
                <div key={i}>
                  <label className="block mb-1 font-poppins text-[18px] font-medium">
                    {item.label}
                  </label>
                  <input
                    required
                    placeholder={item.placeholder}
                    className="w-full h-[44px] rounded-[6px] bg-[#F0F0F0] px-4 text-[16px] outline-none focus:ring-2 focus:ring-[#7F7F7F]"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-1 font-poppins text-[18px] font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what's in your mind..."
                  className="w-full rounded-[6px] bg-[#F0F0F0] px-4 py-3 text-[16px] outline-none focus:ring-2 focus:ring-[#7F7F7F]"
                />
              </div>

              <button
                type="submit"
                className="mt-3 h-[30px] rounded-[50px] bg-[#83DCFF] text-white font-bold text-[16px]"
              >
                Send Message
              </button>
            </form>
          </div>
    
    <aside className="w-full max-w-[471px] min-h-[640px] bg-white rounded-[40px] shadow-sm flex flex-col p-6 md:p-[60px] justify-center">
  <div className="flex flex-col gap-12">
    <div className="flex items-start gap-5">
      <div className="w-[52px] h-[52px] rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-poppins font-bold text-[18px] text-black leading-tight">Email</h4>
        <p className="font-poppins text-[15px] text-black">support@bettermontessori.com</p>
        <p className="font-poppins text-[13px] text-[#4D4D4D] mt-1">We reply within 24 hours.</p>
      </div>
    </div>
    <div className="flex items-start gap-5">
      <div className="w-[52px] h-[52px] rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-poppins font-bold text-[18px] text-black leading-tight">Phone</h4>
        <p className="font-poppins text-[15px] text-black">+1 (555) 123-4567</p>
        <p className="font-poppins text-[13px] text-[#4D4D4D] mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
      </div>
    </div>
    <div className="flex items-start gap-5">
      <div className="w-[52px] h-[52px] rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-poppins font-bold text-[18px] text-black leading-tight">Address</h4>
        <p className="font-poppins text-[15px] text-black">123 Learning Lane</p>
        <p className="font-poppins text-[13px] text-[#4D4D4D] mt-1">Education City, EC 12345</p>
      </div>
    </div>
  </div>

             <div className="mt-12">
              <h4 className="font-bold text-black mb-4">Follow Us</h4>
                            <nav className="flex items-center gap-[12px] w-[234px] h-[32px]">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg>

      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)">
        </rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)">
          </rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> 
          <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white">
            </path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> 
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg>
       <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#FF0000"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white"></path> </g></svg>
         <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx={512} cy={512} r={512} style={{ fill: "#5865f2" }} />
        <path
          d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z"
          style={{ fill: "#fff" }}
        />
      </g>
    </svg> 
  </nav>
  </div>
</aside>
      <div className="w-full flex justify-center items-center mt-20 relative z-20">
  <div className="relative w-[511px] h-[511px] top-[10px] left-[220px] md:w-[500px] md:h-[500px] bg-white rounded-full flex flex-col items-center justify-center p-8 text-center ">
    <div className="absolute -left-12 md:-left-50 bottom-20 md:bottom-24 ">
      <button className="flex items-center gap-5 bg-white border border-[#2B2424] px-1 py-2 md:px-7 md:py-3 rounded-[10px] w-[297px] h-[89px]">
        <Image src="/appstoreicon.png" alt="Apple" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-[#2B2424] uppercase font-semibold">Get it on</p>
          <p className="text-sm md:text-[25px] font-bold text-[#2B2424] leading-none">App Store</p>
        </div>
      </button>
    </div>
    <div className="absolute -right-12 md:-right-50 top-20 md:top-24 ">
      <button className="flex items-center gap-3 bg-white border border-[#2B2424] px-4 py-2 md:px-6 md:py-3 rounded-[10px] w-[297px] h-[89px]">
        <Image
      src="/playstoreicon.png"
      alt="Google Play" 
      width={32}
      height={32}
      className="w-6 h-6 md:w-8 md:h-8 object-contain" 
    />
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-[#184E5E] uppercase font-semibold">Get it on</p>
          <p className="text-sm md:text-[25px] font-bold text-[#184E5E] leading-none">Google Play</p>
        </div>
      </button>
    </div>

     <p className="absolute bottom-[40px] right-translate-x-1/2 text-[#867F7F] text-[15px] leading-[160%] text-center max-w-[355px]">
    Download BetterMontessori for instant feedback, personalized insights, and full offline support.
  </p>
    </div>   
       </div>  

        </div>
      </div>
    </section>
  );
}
