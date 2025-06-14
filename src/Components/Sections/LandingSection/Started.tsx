import React from "react";

const Started = () => {
  return (
    <section className="wr-container flex justify-center items-center w-full h-fit text-neutral-900 px-[80px] py-[110px]">
      <div className="st-wrapper-content flex flex-col gap-14 w-[1280px] h-[670px]">
        <div className="he-wrapper-title">
          <h1 className="text-6xl font-bold">Get started.</h1>
        </div>
        <div className="st-wrapper-img grid grid-cols-2 place-items-center  h-full w-full gap-4">
          <div className="relative overflow-hidden flex flex-col gap-5 bg-slate-200 rounded-xl px-8 py-7 h-full w-full">
            <h1 className="font-semibold text-5xl">Notion</h1>
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-neutral-100 font-semibold rounded-md">
                Try it free
              </button>
              <button className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold rounded-md">
                Download now
              </button>
            </div>
            <img
              className="w-[600px] absolute bottom-0 right-0"
              src="./img-19.webp"
            />
          </div>
          <div className="relative overflow-hidden flex flex-col gap-5 bg-slate-200 rounded-xl px-8 py-7 h-full w-full">
            <h1 className="font-semibold text-5xl">Notion Calender</h1>
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-neutral-100 font-semibold rounded-md">
                Try it free
              </button>
              <button className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold rounded-md">
                Download now
              </button>
            </div>
            <img
              className="w-[600px] absolute bottom-0 right-0"
              src="./img-20.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;
