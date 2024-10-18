import React from "react";
import { BsChatText } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
import { GrBook } from "react-icons/gr";
import { PiPencilLineFill, PiSealWarningLight } from "react-icons/pi";
import { TbChartDots3 } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

const Get = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 957px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-8 w-[1280px]">
        <div className="wr-wrapper-content-1 flex justify-between">
          <div className="flex flex-col gap-4 ">
            <div className="he-wrapper-title flex flex-col gap-3">
              <h1 className="text-6xl font-bold">Get a brain boost.</h1>
              <h2 className="text-lg  text-neutral-500 font-medium">
                Built right into your workspace, Notion AI is ready to
                brainstorm, <br /> summarize, help you write, and find what
                you’re looking for.
              </h2>
            </div>
            <a
              href=""
              className="text-lg font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer"
            >
              Try Notion AI →
            </a>
          </div>
          {!isBigScreen && (
            <div className="flex justify-center items-center gap-10 mt-auto">
              <div>
                <PiSealWarningLight size={90} />
                <h1 className="font-semibold text-lg mt-2">Instant answers</h1>
                <p className="text-neutral-500 font-medium">
                  Ask any question about <br /> a team’s docs and <br />{" "}
                  projects.
                </p>
              </div>
              <div>
                <PiPencilLineFill size={90} />
                <h1 className="font-semibold text-lg">Personalized editor</h1>
                <p className="text-neutral-500 font-medium">
                  Generate content that’s <br /> always relevant.
                </p>
              </div>
              <div>
                <CiFaceSmile size={90} />
                <h1 className="font-semibold text-lg mt-2">
                  AI connectors beta
                </h1>
                <p className="text-neutral-500 font-medium">
                  Access info from Slack, <br /> Google Drive and more, <br />{" "}
                  right inside Notion.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="overflow-hidden rounded-3xl border-[2px] border-neutral-900/20 ">
            <img className="w-[1280px]" src="./img-17.webp" alt="sites" />
          </div>
        </div>
        {isBigScreen && (
          <div className="he-wrapper-icon flex justify-between items-center gap-10 mt-auto">
            {isSmallScreen ? (
              <>
                <div className="flex gap-5">
                  <PiSealWarningLight size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-2">
                      Instant answers
                    </h1>
                    <p className="text-neutral-500 font-medium">
                      Ask any question about <br /> a team’s docs and <br />{" "}
                      projects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <PiPencilLineFill size={60} />
                  <div>
                    <h1 className="font-semibold text-lg">
                      Personalized editor
                    </h1>
                    <p className="text-neutral-500 font-medium">
                      Generate content that’s <br /> always relevant.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <CiFaceSmile size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-2">
                      AI connectors beta
                    </h1>
                    <p className="text-neutral-500 font-medium">
                      Access info from Slack, <br /> Google Drive and more,{" "}
                      <br /> right inside Notion.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex justify-center items-center gap-10 mt-auto">
                <div>
                  <GrBook size={80} />
                  <h1 className="font-semibold text-lg mt-2">Teamspaces</h1>
                  <p className="text-neutral-500 font-medium">
                    Dedicated space for <br /> every team and project.
                  </p>
                </div>
                <div>
                  <TbChartDots3 size={80} />
                  <h1 className="font-semibold text-lg">Integrations</h1>
                  <p className="text-neutral-500 font-medium">
                    Integrations Connected to all your <br /> favorite tools.
                  </p>
                </div>
                <div>
                  <BsChatText size={80} />
                  <h1 className="font-semibold text-lg mt-2">Just ask AI</h1>
                  <p className="text-neutral-500 font-medium">
                    Instant answers when <br /> you need them.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Get;
