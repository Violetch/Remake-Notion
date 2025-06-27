import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { SlCalender, SlDocs } from "react-icons/sl";
import { VscGlobe } from "react-icons/vsc";

const Hero = () => {
  return (
    <section className="he-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="he-wrapper-content flex flex-col gap-12 w-[1280px]">
        <div className="he-wrapper-content-1 flex justify-between items-center">
          <div className="flex flex-col gap-9 ">
            <div className="he-wrapper-title flex flex-col gap-3">
              <h1 className="text-7xl font-bold">Write. Plan. Organize.</h1>
              <h2 className="text-2xl">With a little help from AI.</h2>
            </div>
            <div className="he-wrapper-button-gr flex gap-2">
              <button className="px-5 py-2 bg-blue-500 hover:bg-blue-700 rounded-md font-bold text-neutral-100">
                Get Notion free
              </button>
              <button className="px-5 py-2 bg-slate-200 hover:bg-slate-300 rounded-md text-blue-500 font-bold">
                Request a demo
              </button>
            </div>
            <div className="he-wrapper-teams flex flex-col gap-2">
              <h2 className="text-neutral-500 font-medium">
                Trusted by teams at
              </h2>
              <div className="flex items-center gap-9 flex-wrap">
                <img className="w-[90px]" src="./icon-14.svg" alt="affirm" />
                <img className="w-[110px]" src="./icon-15.svg" alt="toyota" />
                <img className="w-[110px]" src="./icon-16.svg" alt="discord" />
                <img className="w-[90px]" src="./icon-17.svg" alt="figma" />
              </div>
            </div>
          </div>
          <div>
            <img
              className="he-img-drawing w-[650px]"
              src="./img-13.webp"
              alt="drawing people"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-7">
          <div
            className="overflow-hidden rounded-xl border border-neutral-900/20"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
          >
            <img className="w-[1280px]" src="./img-14.webp" alt="sites" />
          </div>
          <div className="he-wrapper-img-switch flex justify-center flex-wrap gap-2">
            <button className="flex justify-center items-center gap-1 border bg-neutral-300/50 hover:bg-transparent hover:border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <MdMenuBook size={23} />
              <h1 className="font-semibold">Wikis</h1>
            </button>
            <button className="flex justify-center items-center gap-1 border hover:bg-slate-200 border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <SlDocs size={20} />
              <h1 className="font-semibold">Docs</h1>
            </button>
            <button className="flex justify-center items-center gap-1 border hover:bg-slate-200 border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <PiProjectorScreenChartThin size={23} />
              <h1 className="font-semibold">Projects</h1>
            </button>
            <button className="flex justify-center items-center gap-1 border hover:bg-slate-200 border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <GiArtificialIntelligence size={23} />
              <h1 className="font-semibold">AI</h1>
            </button>
            <button className="flex justify-center items-center gap-1 border hover:bg-slate-200 border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <SlCalender size={23} />
              <h1 className="font-semibold">Calender</h1>
            </button>
            <button className="flex justify-center items-center gap-1 border hover:bg-slate-200 border-neutral-900/20 rounded-md px-3 py-1 duration-200">
              <VscGlobe size={23} />
              <h1 className="font-semibold">Sites</h1>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
