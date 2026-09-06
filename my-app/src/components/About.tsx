import { BriefcaseBusiness, Package, ShieldUser, Atom } from "lucide-react";
import {FiCode, FiTarget, FiCheckCircle, FiHeart} from 'react-icons/fi'
import Profilepic from '../assets/profile.png'

export default function About() {
  return (
    <section className="min-h-screen w-full rounded-md backdrop-blur-xl  shadow bg-[#030a13]  flex flex-col gap-10 p-2 px-4 mt-12 md:grid md:grid-cols-3 justify-center items-center">
      <div className="flex relative w-full">
      <div className=" bg-transparent rounded-2xl shadow shadow-[#cf6223] border-[1px] border-[#cf6223] flex items-center justify-center backdrop-blur-xl w-fulll md:h-[400px] ">
        <img src={Profilepic} alt="profile-image"  width={250} height={150} />
      </div>
      <h2 className="absolute bottom-10 text-2xl -right-4 text-[#cf6223] ">Mayor</h2>
      </div>
      <div className=" flex flex-col gap-8 lg:gap-4 w-full">
      <span className="text-[#cf6223] font-semibold">ABOUT ME</span>
      <div className="flex ">
        <h3 className="flex gap-1 text-[1.8rem] lg:text-[1.5rem] leading-[1.5]">
          Building with purpose. Designing with impact.{" "}
          <span className="text-[#cf6223]">|</span>{" "}
        </h3>
      </div>
      <p className="text-slate-500 targeting-[1.5px] text-[1rem] md:text-[1rem] lg:text-[1rem] leading-[2]">
        I'm a FullStack Developer with passion for creating
        performant, user-friendly applications. I focus on clean code, intuitive
        design, and delivering solutions that make a difference.
      </p>

      <div className="flex gap-8 text-[#cf6223] bg-[#0d1117]/50 justify-center lg:justify-start mt-4 p-4 flex-col lg:shadow-none shadow-[#cf6223] shadow border-[#cf6223] rounded-xl lg:grid lg:grid-cols-4">
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 justify-start border-b-[1px] 
        pb-4 border-b-gray-400/5 " >
          <div className="p-4 rounded-full border-none shadow shadow-[#cf6223] flex items-center  lg:shadow-none">
          <BriefcaseBusiness/>
          </div>
          <div className="flex flex-col">
            <h3 >6+</h3>
            <p className="text-slate-500">Years Experience</p>
          </div>
        </div>
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 border-b-[1px] 
        pb-4 border-b-gray-400/5"> 
          <div className="p-4 rounded-full border-none shadow-sm lg:shadow-none shadow-[#cf6223] flex items-center">
          <Package/>
          </div>
            <div >
            <h3>28+</h3>
            <p className="text-slate-500">Projects Completed</p>
          </div>
        </div>
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 border-b-[1px] 
        pb-4 border-b-gray-400/5">
          <div className="p-4 rounded-full border-none shadow-sm shadow-[#cf6223] flex items-center lg:shadow-none">
          <ShieldUser/>
          </div>
          <div >
            <h3>15+</h3>
            <p className="text-slate-500">Happy Clients</p>
          </div>
        </div>
         <div className="flex gap-10  lg:gap-6 lg:grid lg:grid-cols-1 border-b-[1px] 
        pb-4 border-b-gray-400/5">
          <div className="p-4 rounded-full border-none shadow-sm shadow-[#cf6223] items-center flex lg:shadow-none">
          <Atom />
          </div>
          <div >
            <h3>1M+</h3>
            <p className="text-slate-500">Users Impacted</p>
          </div>
         </div>
      </div>
      </div>

      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col gap-2 border border-gray-500/50 rounded-xl  p-4 px-4 shadow-inner">
    
          <p className="text-sky-400">const <span className="text-purple-400">developer</span> <span className="text-white">= {"{"}</span></p>
          <div className="ml-4 flex flex-col gap-2">
          <p className="text-sky-400">name: <span className="text-green-400">'Mayowa Ojomu',</span></p>
          <p className="text-sky-400">role: <span className="text-green-400">'Full Stack Developer',</span></p>
          <p className="text-sky-400">skills: <span className="text-green-400">{"['React','Typescript','Node.js']"},</span></p>
          <p className="text-sky-400">passion: <span className="text-green-400">'Building products that matter',</span></p>
          </div>
          <span>{"}"}</span>
        </div>

        <div className="flex flex-col gap-2">
         <div className="flex items-center gap-4">
          <FiCode className="text-[#cf6223] text-xl"/>
          <p>Clean and maintainable</p>
         </div>
         <div className="flex items-center gap-4">
          <FiTarget className="text-[#cf6223] text-xl"/>
          <p>Peformance Focused</p>
         </div>
         <div className="flex items-center gap-4">
          <FiCheckCircle className="text-[#cf6223] text-xl"/>
          <p>Pixel Perfect Design</p>
         </div>
         <div className="flex items-center gap-4">
          <FiHeart className="text-[#cf6223] text-xl"/>
          <p>Scalable Architecture</p>
         </div>
        </div>
      </div>

    </section>
  );
}
