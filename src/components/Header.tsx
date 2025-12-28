

import Link from 'next/link';

export default function Header() {
  return (
   <header className='sticky top-0 z-50 w-full bg-white shadow-md'>
    <nav className="
      flex flex-row items-center justify-between
      max-w-[1321px] h-[72.47px] 
      mt-[32.05px] mx-auto
      mx-auto px-6 lg:px-0
      font-poppins
    ">
      <div className="w-[239px] h-[45px] flex items-center flex-shrink-0">
        <h1 className="text-[28px] font-medium leading-[160%] text-black">
          Better<span className="text-brand-blue">Montessori</span>
        </h1>
      </div>
      <div className="flex flex-row items-center gap-[39px] h-[29px] text-[#777777] text-[16px]">
        <Link href="#features" className='hover:text-brand-blue'>Features</Link>
        <Link href="#about" className='hover:text-brand-blue'>About Us</Link>
        <Link href="#contact" className='hover:text-brand-blue'>Contact Us</Link>
        <Link href="#testimonials" className='hover:text-brand-blue'>Testimonials</Link>
      </div>
      <button className="
        w-[148px] h-[49px] flex-shrink-0 justify-end
        bg-brand-blue text-white hover:bg-blue-700 trangition-colors
        rounded-[8px] border-[1px] border-brand-blue font-bold text-[16px]
      ">
        Log In
      </button>

    </nav>
    </header> 
  );
}