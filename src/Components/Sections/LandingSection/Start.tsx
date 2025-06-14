import React from "react";
import { CgCircleci } from "react-icons/cg";
import { FaBookOpen, FaMotorcycle } from "react-icons/fa";
import { FaCircleCheck, FaNoteSticky } from "react-icons/fa6";
import { MdAirplaneTicket } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Start = () => {
  return (
    <section className="st-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-8 w-[1280px]">
        <div className="flex flex-col gap-4 ">
          <div className="he-wrapper-title flex flex-col gap-3">
            <h1 className="text-6xl font-bold">
              Start with a template. <br /> Build anything.
            </h1>
          </div>
          <a
            href=""
            className="text-lg font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer"
          >
            Browse all templates →
          </a>
        </div>
        <div className="st-wrapper-icon flex gap-8 h-[550px]">
          <div className="relative overflow-hidden st-wrapper-lg-icon flex flex-col w-1/2 rounded-2xl px-8 py-7 cursor-pointer font-bold text-lg bg-slate-200 gap-4 hover:bg-slate-300 duration-200">
            <FaBookOpen className="text-red-500" size={50} />
            <h1>Company Wiki →</h1>
            <img
              className="absolute -bottom-5 rounded-xl border border-neutral-900/5"
              src="./img-18.webp"
            />
          </div>
          <div className="st-wrapper-sm-icon grid grid-cols-2 gap-8 w-1/2">
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <FaMotorcycle className="text-blue-500" size={50} />
              <h1 className="font-bold text-lg">Project Roadmap →</h1>
            </div>
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <CgCircleci className="text-orange-500" size={40} />
              <h1 className="font-bold text-lg">OKRs →</h1>
            </div>
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <FaNoteSticky className="text-yellow-500" size={45} />
              <h1 className="font-bold text-lg">Meeting Notes →</h1>
            </div>
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <MdAirplaneTicket className="text-red-500" size={50} />
              <h1 className="font-bold text-lg">Vacation Planner →</h1>
            </div>
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <SlCalender className="text-green-600" size={40} />
              <h1 className="font-bold text-lg">Editorial Calender →</h1>
            </div>
            <div className="flex flex-col rounded-2xl px-8 py-7 cursor-pointer bg-slate-200 hover:bg-slate-300 duration-200 gap-4">
              <FaCircleCheck className="text-red-500" size={40} />
              <h1 className="font-bold text-lg">Habit Tracker →</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
