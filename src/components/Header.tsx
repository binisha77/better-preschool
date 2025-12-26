

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="
      flex flex-row items-center justify-center
      w-[1321px] h-[72.47px] 
      mt-[32.05px] mx-auto
      gap-[192px]
      font-poppins
    ">
      <div className="w-[239px] h-[45px] flex items-center">
        <h1 className="text-[28px] font-medium leading-[160%] text-black">
          Better<span className="text-brand-blue">Montessori</span>
        </h1>
      </div>
      <div className="flex flex-row items-center gap-[39px] h-[29px] text-[#777777] text-[16px]">
        <Link href="#features" >Features</Link>
        <Link href="#about" >About Us</Link>
        <Link href="#contact">Contact Us</Link>
        <Link href="#testimonials" >Testimonials</Link>
      </div>
      <button className="
        w-[148px] h-[49px] 
        bg-brand-blue text-white 
        rounded-[8px] border-[1px] border-brand-blue font-bold text-[16px]
      ">
        Log In
      </button>

    </nav>
  );
}