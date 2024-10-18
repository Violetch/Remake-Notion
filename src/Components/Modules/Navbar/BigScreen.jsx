import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { MdMenuBook } from "react-icons/md";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { RiArrowDropDownLine, RiNotionFill } from "react-icons/ri";
import { SlCalender, SlDocs } from "react-icons/sl";
import { VscGlobe } from "react-icons/vsc";

const BigScreen = () => {
  return (
    <nav className="fixed flex-col px-4 pt-4 items-center w-full bg-neutral-100 z-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <div className="flex justify-center items-center gap-1">
            <RiNotionFill className="text-neutral-900" size={34} />
            <h1 className="font-semibold tracking-tight text-xl text-neutral-900">
              Notion
            </h1>
          </div>
          <div className="flex justify-center items-center gap-1 font-medium text-[15px] text-neutral-900">
            <ul className="dropdown dropdown-hover group flex justify-center items-center hover:bg-slate-400/20 cursor-pointer px-[10px] py-1 rounded-md">
              <li>Product</li>
              <RiArrowDropDownLine
                className="group-hover:rotate-[180deg]"
                role="button"
                tabIndex={0}
                size={21}
              />
              <ul
                className="absolute left-0 top-[31px] menu dropdown-content bg-neutral-100 gap-1 px-2 w-[300px] font-medium rounded-md"
                tabIndex={0}
                style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}
              >
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <GiArtificialIntelligence size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">AI</h1>
                    <h2 className="text-neutral-400">
                      Integrated AI Assistant
                    </h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <SlDocs size={20} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">DOCS</h1>
                    <h2 className="text-neutral-400">Simple & Powerful</h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <MdMenuBook size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Wikis</h1>
                    <h2 className="text-neutral-400">
                      Centralize your knowledge
                    </h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <PiProjectorScreenChartThin size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Projects</h1>
                    <h2 className="text-neutral-400">For every team or size</h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <SlCalender size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Calender</h1>
                    <h2 className="text-neutral-400">
                      Time and work, together
                    </h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <VscGlobe size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Sites</h1>
                    <h2 className="text-neutral-400">Publish anything fast</h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <HiTemplate size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Template</h1>
                    <h2 className="text-neutral-400">
                      Set up to get you started
                    </h2>
                  </div>
                </a>
                <a
                  className="flex items-center px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <img src="" alt="" />
                  <div className="border border-neutral-300 rounded-md p-[7px]">
                    <LiaProjectDiagramSolid size={23} />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-neutral-900">Integrations</h1>
                    <h2 className="text-neutral-400">
                      Connect your tools to Notion
                    </h2>
                  </div>
                </a>
              </ul>
            </ul>
            <ul className="dropdown dropdown-hover relative group flex justify-center items-center hover:bg-slate-400/20 cursor-pointer px-[10px] py-1 rounded-md">
              <li>Teams</li>
              <RiArrowDropDownLine
                className="group-hover:rotate-[180deg]"
                tabIndex={0}
                role="button"
                size={21}
              />
              <ul
                className="absolute left-0 top-[31px] menu dropdown-content bg-neutral-100 gap-1 px-2 w-[180px] font-medium rounded-md"
                style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}
                tabIndex={0}
              >
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Product</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Engineering</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Design</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Marketing</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>IT</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Startups</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Enterprise</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Customor stories</li>
                </a>
              </ul>
            </ul>
            <ul className="dropdown dropdown-hover group flex justify-center items-center hover:bg-slate-400/20 cursor-pointer px-[10px] py-1 rounded-md">
              <li>Individuals</li>
              <RiArrowDropDownLine
                className="group-hover:rotate-[180deg]"
                role="button"
                tabIndex={0}
                size={21}
              />
              <ul
                className="absolute left-0 top-[31px] menu dropdown-content bg-neutral-100 gap-1 px-2 w-[130px] font-medium rounded-md"
                tabIndex={0}
                style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}
              >
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Personal</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Students</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Teachers</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Creators</li>
                </a>
              </ul>
            </ul>
            <ul className="dropdown dropdown-hover group flex justify-center items-center hover:bg-slate-400/20 cursor-pointer px-[10px] py-1 rounded-md">
              <li>Download</li>
              <RiArrowDropDownLine
                className="group-hover:rotate-[180deg]"
                role="button"
                tabIndex={0}
                size={21}
              />
              <ul
                className="absolute left-0 top-[31px] menu dropdown-content bg-neutral-100 gap-1 px-2 w-[220px] font-medium rounded-md"
                tabIndex={0}
                style={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.1)" }}
              >
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Notion</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Calender</li>
                </a>
                <a
                  className="px-[10px] py-1 hover:bg-slate-400/20 rounded-md"
                  href=""
                >
                  <li>Web Clipper</li>
                </a>
                <li className="px-[10px] py-1 text-neutral-400">
                  Notion is always at home right in your browser
                </li>
              </ul>
            </ul>
            <ul className="group flex justify-center items-center hover:bg-slate-400/20 cursor-pointer px-[10px] py-1 rounded-md">
              <li>Pricing</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 text-[15px] font-medium">
          <h1 className="hover:bg-slate-400/20 text-neutral-900 rounded-md px-[10px] py-1 cursor-pointer">
            Request a demo
          </h1>
          <div className="h-[20px] w-[1px] bg-neutral-200"></div>
          <h1 className="hover:bg-slate-400/20 text-neutral-900 rounded-md px-[10px] py-1 cursor-pointer">
            Log In
          </h1>
          <button className="bg-neutral-900 hover:bg-neutral-700 rounded-md text-neutral-100 font-medium px-[10px] py-1 cursor-pointer">
            Get Notion Free
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-900/20 mt-4"></div>
    </nav>
  );
};

export default BigScreen;
