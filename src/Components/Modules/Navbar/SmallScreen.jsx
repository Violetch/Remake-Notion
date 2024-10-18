import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";
import Mapping from "../../../Utils";
import { NAVBAR_SMALL_LIST } from "../../../Constacts/Navbar";
import { RxCross2 } from "react-icons/rx";

const SmallScreen = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isBars, setIsBars] = useState(false);

  const handleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav
      className={`${
        isBars && "h-screen"
      } w-full flex flex-col bg-neutral-100 px-4 pt-4 fixed z-50`}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-1">
          <RiNotionFill className="text-neutral-900" size={34} />
          <h1 className="font-semibold tracking-tight text-xl text-neutral-900">
            Notion
          </h1>
        </div>
        <div className="flex justify-center items-center  gap-6">
          <button className="text-sm bg-neutral-900 rounded-md px-3 py-1 font-semibold text-neutral-100">
            Get Notion Free
          </button>
          {isBars ? (
            <RxCross2
              className="text-neutral-900"
              size={25}
              onClick={() => setIsBars(false)}
            />
          ) : (
            <FaBars
              className="text-neutral-900 font-bold"
              size={23}
              onClick={() => setIsBars(true)}
            />
          )}
        </div>
      </div>
      <div className="h-[1px] bg-neutral-900/20 mt-4"></div>

      {isBars && (
        <>
          <div className="h-[1px] w-full bg-neutral-300 mt-3"></div>
          <div className="flex flex-col h-full">
            <div>
              <Mapping
                of={NAVBAR_SMALL_LIST}
                render={(item, index) => (
                  <div>
                    <ul className="flex flex-col my-5" key={index}>
                      <li
                        className="text-neutral-900 font-bold cursor-pointer"
                        onClick={() => handleIndex(index)}
                      >
                        {item.title}
                      </li>
                      {activeIndex === index && (
                        <a className="mt-4 text-neutral-900" href="">
                          {item.desc && (
                            <>
                              {item.desc.map((itemDesc, indexDesc) => (
                                <ul
                                  className="flex items-center mt-2"
                                  key={indexDesc}
                                >
                                  <li className={itemDesc.styleIcon}>
                                    {itemDesc.icon}
                                  </li>
                                  <li
                                    className={itemDesc.styleSubTitle}
                                    key={indexDesc}
                                  >
                                    {itemDesc.subTitle}
                                  </li>
                                </ul>
                              ))}
                            </>
                          )}
                        </a>
                      )}
                    </ul>
                    <div className="h-[1px] w-full bg-neutral-300"></div>
                  </div>
                )}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 mt-auto">
              <div className="h-[1px] w-full bg-neutral-300"></div>

              <button className="bg-neutral-900 rounded-md w-full py-2 font-semibold text-neutral-100">
                Get Notion Free
              </button>
              <button className="rounded-md w-full py-2 border border-neutral-300 font-semibold text-neutral-900">
                Log In
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default SmallScreen;
