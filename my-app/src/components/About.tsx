import { BriefcaseBusiness, Package, ShieldUser, Atom } from "lucide-react";
import {FiCode, FiTarget, FiCheckCircle, FiHeart} from 'react-icons/fi'
import Profilepic from '../assets/profile.png'

export default function About() {
  return (
    <section className="min-h-screen w-full rounded-md backdrop-blur-xl border shadow border-[#0d1117] flex flex-col gap-10  px-4 mt-12 md:grid md:grid-cols-3  ">
      <div className=" bg-transparent rounded shadow shadow-[#cf6223] border-[1px] border-[#cf6223] flex items-center justify-center backdrop-blur-xl w-full">
        <img src={Profilepic} alt="profile-image"  className=""/>
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
        I'm Mayowa Ojomu a FullStack Developer with passion for creating
        performant, user-friendly applications. I focus on clean code, intuitive
        design, and delivering solutions that make a difference.
      </p>

      <div className="flex gap-8 text-[#cf6223] justify-center lg:justify-start mt-4 p-4 flex-col lg:shadow-none shadow-[#cf6223] shadow border-[#cf6223] rounded-xl lg:grid lg:grid-cols-4">
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 justify-start" >
          <div className="p-4 rounded-full border-none shadow shadow-[#cf6223] flex items-center  lg:shadow-none">
          <BriefcaseBusiness/>
          </div>
          <div className="flex flex-col">
            <h3 >6+</h3>
            <p className="text-slate-500">Years Experience</p>
          </div>
        </div>
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 "> 
          <div className="p-4 rounded-full border-none shadow-sm lg:shadow-none shadow-[#cf6223] flex items-center">
          <Package/>
          </div>
            <div >
            <h3>28+</h3>
            <p className="text-slate-500">Projects Completed</p>
          </div>
        </div>
        <div className="flex gap-10 lg:gap-6 lg:grid lg:grid-cols-1 ">
          <div className="p-4 rounded-full border-none shadow-sm shadow-[#cf6223] flex items-center lg:shadow-none">
          <ShieldUser/>
          </div>
          <div >
            <h3>15+</h3>
            <p className="text-slate-500">Happy Clients</p>
          </div>
        </div>
         <div className="flex gap-10  lg:gap-6 lg:grid lg:grid-cols-1 ">
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

      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 border border-[#0d1117] shadow p-2 px-2">
    
          <p className="text-sky-400">const <span className="text-purple-400">developer</span> <span className="text-white">= {"{"}</span></p>
          <div className="ml-4 flex flex-col gap-2">
          <p className="text-sky-400">name: <span className="text-green-400">'Mayor Tech',</span></p>
          <p className="text-sky-400">role: <span className="text-green-400">'Full Stack Developer',</span></p>
          <p className="text-sky-400">skills: <span className="text-green-400">{"['React','Typescript','Node.js']"},</span></p>
          <p className="text-sky-400">passion: <span className="text-green-400">'Building products that matter',</span></p>
          </div>
          <span>{"}"}</span>
        </div>
        <div>
         <div className="flex">
          <FiCode/>
          <p>Clean and maintainable</p>
         </div>
         <div className="flex">
          <FiTarget/>
          <p>Clean and maintainable</p>
         </div>
         <div className="flex">
          <FiCheckCircle/>
          <p>Clean and maintainable</p>
         </div>
         <div className="flex">
          <FiHeart/>
          <p>Clean and maintainable</p>
         </div>
        </div>
      </div>

    </section>
  );
}
