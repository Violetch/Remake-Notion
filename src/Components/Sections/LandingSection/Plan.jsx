import React from "react";
import { AiTwotoneSchedule } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { CgMonday } from "react-icons/cg";
import { CiBoxList } from "react-icons/ci";
import { FaTrello } from "react-icons/fa";
import { SiAsana } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

const Plan = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 957px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-8 w-[1280px]">
        <div className="wr-wrapper-content-1 flex justify-between">
          <div className="flex flex-col gap-4 ">
            <div className="he-wrapper-title flex flex-col gap-3">
              <h3 className="px-4 py-1 bg-slate-200 w-fit rounded-md  font-semibold">
                Plan
              </h3>
              <h1 className="text-6xl font-bold">
                Your workflow. <br /> Your way.
              </h1>
              <h2 className="text-lg  text-neutral-500 font-medium">
                There’s a lot to keep track of. Notion’s flexible pages allow
                you to <br /> design your ideal workflow and view it by
                timeline, task, team, or <br /> level of doneness.
              </h2>
            </div>
            <a
              href=""
              className="text-lg font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer"
            >
              Explore projects →
            </a>
          </div>
          {!isBigScreen && (
            <div className="flex justify-center items-center gap-10 mt-auto">
              <div>
                <CiBoxList size={90} />
                <h1 className="font-semibold text-lg">Tasks and to-dos</h1>
                <p className="text-neutral-500 font-medium">
                  Tackle any project, big <br /> or small.
                </p>
              </div>
              <div>
                <AiTwotoneSchedule size={90} />
                <h1 className="font-semibold text-lg">Custom views</h1>
                <p className="text-neutral-500 font-medium">
                  Visualize work in any <br /> format, from calendars <br /> to
                  kanban boards.
                </p>
              </div>
              <div>
                <BsLightningCharge size={90} />
                <h1 className="font-semibold text-lg mt-2">Automations</h1>
                <p className="text-neutral-500 font-medium">
                  Put tedious tasks on <br /> autopilot.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="overflow-hidden rounded-3xl ">
            <img className="w-[1280px]" src="./img-16.webp" alt="sites" />
          </div>
          {!isSmallScreen && (
            <>
              <div className="flex items-center font-bold gap-4">
                <h1>Replaces</h1>
                <div className="flex gap-4">
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <FaTrello size={25} />
                    <h1>Trello</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <SiAsana size={25} />
                    <h1>Asana</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <CgMonday size={30} />
                    <h1>Monday</h1>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {isBigScreen && (
          <div className="he-wrapper-icon flex justify-between items-center gap-10 mt-auto">
            {isSmallScreen ? (
              <>
                <div className="flex gap-5">
                  <CiBoxList size={60} />
                  <div>
                    <h1 className="font-semibold text-lg">Tasks and to-dos</h1>
                    <p className="text-neutral-500 font-medium">
                      Tackle any project, big <br /> or small.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <AiTwotoneSchedule size={60} />
                  <div>
                    <h1 className="font-semibold text-lg">Custom views</h1>
                    <p className="text-neutral-500 font-medium">
                      Visualize work in any <br /> format, from calendars <br />{" "}
                      to kanban boards.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <BsLightningCharge size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-2">Automations</h1>
                    <p className="text-neutral-500 font-medium">
                      Put tedious tasks on <br /> autopilot.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <CiBoxList size={80} />
                  <h1 className="font-semibold text-lg">Building blocks</h1>
                  <p className="text-neutral-500 font-medium">
                    100+ content types to <br /> communicate any idea.
                  </p>
                </div>
                <div>
                  <AiTwotoneSchedule size={80} />
                  <h1 className="font-semibold text-lg mt-1">
                    Collaborative tools{" "}
                  </h1>
                  <p className="text-neutral-500 font-medium">
                    Built for teams to share, <br /> suggest, and comment.
                  </p>
                </div>
                <div>
                  <BsLightningCharge size={80} />
                  <h1 className="font-semibold text-lg mt-1">AI-assisted </h1>
                  <p className="text-neutral-500 font-medium">
                    Edit, draft, translate. <br /> Ask, and AI will answer.
                  </p>
                </div>
              </>
            )}
          </div>
        )}
        {isSmallScreen && (
          <div className="h-[1px] w-full bg-neutral-900/20 mt-4"></div>
        )}
        {isSmallScreen && (
          <>
            <div className="flex flex-col jusfity-center font-bold gap-4">
              <h1>Replaces</h1>
              <div className="flex gap-4">
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <FaTrello size={25} />
                  <h1>Trello</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <SiAsana size={25} />
                  <h1>Asana</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <CgMonday size={30} />
                  <h1>Monday</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Plan;
