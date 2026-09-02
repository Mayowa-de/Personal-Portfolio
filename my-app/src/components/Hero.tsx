import { GitBranchIcon, Link2Icon, XIcon, ArrowRight } from "lucide-react";
import Acm from "../assets/acm.svg";
import CodeShip from "../assets/codeship.svg";
import ReasonStudio from "../assets/reasonstudios.svg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex px-4 min-h-screen mt-8 mb-8 md:mt-0 md:mb-0 relative ">
      <div className="flex flex-col gap-6 z-50 ">
        <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 text-[1rem] md:text-[1.5rem] lg:text-[1.8rem]">
          <span className="rounded-full w-[12px] h-[12px] border-2 border-[#cf6223]"></span>
          <h2 className="text-[#cf6223] tracking-[1.5px]">
            FULL STACK DEVELOPER
          </h2>
          <span className="rounded-full w-[12px] h-[12px] border-none bg-[#cf6223]"></span>
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl leading-[1.5] tracking-normal">
          <h2>
            I build digital experiences that solve{" "}
            <span className="text-[#cf6223]">real problems.</span>
          </h2>
        </div>
        <div>
          <p className="text-slate-500 leading-[2] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
            Helping startups and businesses build fast, scalable, and beautiful
            web applications.
          </p>
        </div>
        <div className=" grid gap-4 mt-6 md:flex md:gap-4">
          <button className="p-4 bg-gradient-to-r from-[#cf6223] from-70% to-black/0 to-8% rounded-md shadow flex gap-6 items-center justify-center">
            Let's Build Something <ArrowRight />
          </button>
          <button className="p-4 bg-transprent border-2 border-[#cb682a] shadow shadow-[#e05904] rounded-md">
            View My Work
          </button>
        </div>

        <div className="md:flex gap-8 text-white  mt-4 hidden ">
            <FaGithub className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6"/>
            <FaTwitter className="w-6 h-6"/>
        </div>
      </div>

        <div className="flex items-center justify-center mt-8">
          <h2 className="text-slate-500">TRUSTED BY INNOVATIVE COMPANIES</h2>
        </div>

        <div className="flex gap-2 md:gap-20 text-slate-400 justify-center w-full">
          <div className="flex gap-1">
            <img
              src={Acm}
              alt="ACM Logo"
              className="w-[24px] h-[24px] bg-slate-400 rounded-full"
            />
            <p>AcmeCorp</p>
          </div>
          <div className="flex gap-1">
            <img
              src={CodeShip}
              alt="CodeShip Logo"
              className="w-[24px] h-[24px] bg-slate-400 rounded-full"
            />
            <p>Shippo</p>
          </div>
          <div className="flex gap-1">
            <img
              src={ReasonStudio}
              alt="Reason Studio Logo"
              className="w-[24px] h-[24px] bg-slate-400 rounded-full"
            />
            <p>loopstudio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
