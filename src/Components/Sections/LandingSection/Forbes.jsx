import React from "react";
import { ImPushpin } from "react-icons/im";

const Forbes = () => {
  return (
    <section className="h-[50vh] flex justify-center items-center">
      <div className="wr-wrapper-content flex justify-center items-center">
        <div className="fo-wrapper-pinned  flex flex-col relative justify-center items-center px-5 bg-slate-200/50 w-[600px] h-[225px] -rotate-[3deg]  text-neutral-900 gap-2">
          <ImPushpin
            className="absolute -top-[50px] text-[70px]
          "
          />
          <h1 className="text-4xl font-medium">"Your AI everything app"</h1>
          <h2 className="font-bold text-xl">Forbes</h2>
        </div>
      </div>
    </section>
  );
};

export default Forbes;
