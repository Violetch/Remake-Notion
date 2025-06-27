import React from "react";
import { FaAt, FaEvernote, FaPencilAlt, FaPhotoVideo } from "react-icons/fa";
import { GiElephant } from "react-icons/gi";
import { RiPuzzle2Fill } from "react-icons/ri";
import { SiCoda, SiGoogledocs } from "react-icons/si";
import { useMediaQuery } from "react-responsive";

const Write = () => {
  const isBigScreen = useMediaQuery({ query: "(max-width: 957px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="wr-wrapper-content flex flex-col gap-8 w-[1280px]">
        <div className="wr-wrapper-content-1 flex justify-between">
          <div className="flex flex-col gap-4 ">
            <div className="he-wrapper-title flex flex-col gap-3">
              <h3 className="px-4 py-1 bg-slate-200 w-fit rounded-md  font-semibold">
                Write
              </h3>
              <h1 className="text-6xl font-bold">
                Find the <br /> right words.
              </h1>
              <h2 className="text-lg  text-neutral-500 font-medium">
                Capture ideas, gather feedback from teammates, and ask AI to add
                <br />
                the finishing touches.
              </h2>
            </div>
            <a
              href=""
              className="text-lg font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer"
            >
              Explore docs & notes →
            </a>
          </div>
          {!isBigScreen && (
            <div className="flex justify-center items-center gap-10 mt-auto">
              <div>
                <FaPhotoVideo size={90} />
                <h1 className="font-semibold text-lg">Building blocks</h1>
                <p className="text-neutral-500 font-medium">
                  100+ content types to <br /> communicate any idea.
                </p>
              </div>
              <div>
                <FaAt size={90} />
                <h1 className="font-semibold text-lg mt-1">
                  Collaborative tools{" "}
                </h1>
                <p className="text-neutral-500 font-medium">
                  Built for teams to share, <br /> suggest, and comment.
                </p>
              </div>
              <div>
                <FaPencilAlt size={90} />
                <h1 className="font-semibold text-lg mt-1">AI-assisted </h1>
                <p className="text-neutral-500 font-medium">
                  Edit, draft, translate. <br /> Ask, and AI will answer.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-7">
          <div className="overflow-hidden rounded-3xl ">
            <img className="w-[1280px]" src="./img-15.webp" alt="sites" />
          </div>
          {!isSmallScreen && (
            <>
              <div className="flex items-center font-bold gap-4">
                <h1>Replaces</h1>
                <div className="flex gap-4">
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <FaEvernote size={35} />
                    <h1>Evernote</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <SiGoogledocs size={27} />
                    <h1>Google Docs</h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 text-neutral-500">
                    <SiCoda size={28} />
                    <h1>Coda</h1>
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
                  <FaPhotoVideo size={60} />
                  <div>
                    <h1 className="font-semibold text-lg">Building blocks</h1>
                    <p className="text-neutral-500 font-medium">
                      100+ content types to communicate any idea.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaAt size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-1">
                      Collaborative tools
                    </h1>
                    <p className="text-neutral-500 font-medium">
                      Built for teams to share, suggest, and comment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <FaPencilAlt size={60} />
                  <div>
                    <h1 className="font-semibold text-lg mt-1">AI-assisted </h1>
                    <p className="text-neutral-500 font-medium">
                      Edit, draft, translate. Ask, and AI will answer.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <FaPhotoVideo size={100} />
                  <h1 className="font-semibold text-lg">Building blocks</h1>
                  <p className="text-neutral-500 font-medium">
                    100+ content types to <br /> communicate any idea.
                  </p>
                </div>
                <div>
                  <FaAt size={100} />
                  <h1 className="font-semibold text-lg mt-1">
                    Collaborative tools{" "}
                  </h1>
                  <p className="text-neutral-500 font-medium">
                    Built for teams to share, <br /> suggest, and comment.
                  </p>
                </div>
                <div>
                  <FaPencilAlt size={100} />
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
                  <GiElephant size={35} />
                  <h1>Evernote</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <SiGoogledocs size={27} />
                  <h1>Google Docs</h1>
                </div>
                <div className="flex justify-center items-center gap-1 text-neutral-400">
                  <RiPuzzle2Fill size={30} />
                  <h1>Coda</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Write;
