import React from "react";
import { BsChatText } from "react-icons/bs";
import { FaConfluence, FaGoogleDrive } from "react-icons/fa";
import { GrBook } from "react-icons/gr";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { TbChartDots3 } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

const Organize = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 957px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-8 w-[1280px]">
        <div className="wr-wrapper-content-1 flex justify-between">
          <div className="flex flex-col gap-4 ">
            <div className="he-wrapper-title flex flex-col gap-3">
              <h3 className="px-4 py-1 bg-slate-200 w-fit rounded-md  font-semibold">
                Organize
              </h3>
              <h1 className="text-6xl font-bold">
                Remember <br />
                everything.
              </h1>
              <h2 className="text-lg  text-neutral-500 font-medium">
                No more endless searching for the info you need. Everything you{" "}
                <br />
                and your team store in Notion is accessible in an instant.
              </h2>
            </div>
            <a
              href=""
              className="text-lg font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer"
            >
              Explore knowledge management →
            </a>
          </div>
          {!isBigScreen && (
            <div className="flex justify-center items-center gap-10 mt-auto">
              <div>
                <GrBook size={90} />
                <h1 className="font-semibold text-lg mt-2">Teamspaces</h1>
                <p className="text-neutral-500 font-medium">
                  Dedicated space for <br /> every team and project.
                </p>
              </div>
              <div>
                <TbChartDots3 size={90} />
                <h1 className="font-semibold text-lg">Integrations</h1>
                <p className="text-neutral-500 font-medium">
                  Integrations Connected to all your <br /> favorite tools.
                </p>
              </div>
              <div>
                <BsChatText size={90} />
                <h1 className="font-semibold text-lg mt-2">Just ask AI</h1>
                <p className="text-neutral-500 font-medium">
                  Instant answers when <br /> you need them.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="overflow-hidden rounded-3xl ">
            <img className="w-[1280px]" src="./img-17.webp" alt="sites" />
          </div>
          {!isSmallScreen && (
            <>
              <div className="flex items-center font-bold gap-4">
                <h1>Replaces</h1>
                <div className="flex gap-4">
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <FaConfluence size={25} />
                    <h1>Confluence</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <SiMicrosoftsharepoint size={27} />
                    <h1>SharePoint</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <FaGoogleDrive size={30} />
                    <h1>Google Drive</h1>
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
                  <GrBook size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-2">Teamspaces</h1>
                    <p className="text-neutral-500 font-medium">
                      Dedicated space for <br /> every team and project.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <TbChartDots3 size={60} />
                  <div>
                    <h1 className="font-semibold text-lg">Integrations</h1>
                    <p className="text-neutral-500 font-medium">
                      Integrations Connected to all your <br /> favorite tools.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <BsChatText size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-2">Just ask AI</h1>
                    <p className="text-neutral-500 font-medium">
                      Instant answers when <br /> you need them.
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
        {isSmallScreen && (
          <div className="h-[1px] w-full bg-neutral-900/20 mt-4"></div>
        )}
        {isSmallScreen && (
          <>
            <div className="flex flex-col flex-wrap jusfity-center font-bold gap-4">
              <h1>Replaces</h1>
              <div className="flex gap-4">
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <FaConfluence size={25} />
                  <h1>Confluence</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <SiMicrosoftsharepoint size={27} />
                  <h1>SharePoint</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <FaGoogleDrive size={30} />
                  <h1>Google Drive</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Organize;
