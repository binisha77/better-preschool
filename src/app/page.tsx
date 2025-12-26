import Header from "../components/Header";
import Feature from "../components/Feature";
import About from "../components/About";

import Testimonials from "../components/Testimonial";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Frequently from "../components/Frequently";


export default function Home() {
  return (
    <main className="bg-[#F6F6F6] min-h-screen ">
    <div className="w-full max-w-[1440px] mx-auto bg-white rounded-t-[100px] shadow-sm flex flex-col items-center">
        <Header />
        <Feature />
        <About />
        <Testimonials />
        <Frequently />
        <Contact />
        <Footer />
      </div>
      
       
    </main>
  )
}
