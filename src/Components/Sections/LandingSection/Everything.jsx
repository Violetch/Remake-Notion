import { CiGlobe } from "react-icons/ci";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoShapesOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { PiNewspaper, PiProjectorScreenChartLight } from "react-icons/pi";
import { SlTrophy } from "react-icons/sl";
import { VscBook } from "react-icons/vsc";

const Everything = () => {
  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-9 w-[1280px]">
        <div className="he-wrapper-title">
          <h1 className="text-6xl font-bold">
            Everything you need <br /> to do your best work.
          </h1>
        </div>
        <div className="ev-wrapper-icon grid grid-cols-4 gap-x-5 gap-y-10">
          <div className="cursor-pointer">
            <PiNewspaper size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Docs →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Build any page, communicate <br /> any idea.
            </p>
          </div>
          <div className="cursor-pointer">
            <VscBook size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Wiki →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              One home base for all your <br /> knowledge.
            </p>
          </div>
          <div className="cursor-pointer">
            <PiProjectorScreenChartLight size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Projects →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Manage any project from <br /> beginning to end.
            </p>
          </div>
          <div className="cursor-pointer">
            <GiArtificialIntelligence size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Notion AI →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Finds what you need. Does <br /> what you need.
            </p>
          </div>
          <div className="cursor-pointer">
            <MdOutlineDateRange size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Calender →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              See all your commitments in <br /> one place.
            </p>
          </div>
          <div className="cursor-pointer">
            <SlTrophy size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Goals →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Track progress toward what’s <br /> most important.
            </p>
          </div>
          <div className="cursor-pointer">
            <CiGlobe size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Sites →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Make any page a website in <br /> minutes.
            </p>
          </div>
          <div className="cursor-pointer">
            <IoShapesOutline size={80} />
            <h1 className="text-neutral-900 mt-2 hover:text-neutral-400 font-bold text-2xl">
              Templates →
            </h1>
            <p className="text-neutral-500 text-lg font-medium">
              Get started with one of <br /> 20,000+ templates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Everything;
