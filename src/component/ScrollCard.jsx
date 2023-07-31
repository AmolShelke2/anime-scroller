import React from "react";

export const ScrollCard = ({ title, text, bannerURL }) => {
  return (
    <div className="flex flex-col py-[5px] px-2 bg-white rounded-xl shadow-md snap-start transition-all w-[fit] min-h-[380px]">
      <div>
        <h3 className="text-base font-semibold capitalize">{title}</h3>

        <div className="h-fit w-fit py-2">
          <img
            src={bannerURL}
            alt="anime"
            className="rounded-md h-[180px] w-full"
          />
        </div>
        <div className="mt-[2px] max-w-[85%] scrollbar">
          <p className="max-h-[80px] overflow-y-scroll">{text}</p>
        </div>
      </div>

      <div class="mt-[16px]">
        <a
          href="aniwatch.to"
          className="inline-block no-underline text-white bg-orange-400 px-[18px] py-[12px] rounded-md transition">
          Learn More
        </a>
      </div>
    </div>
  );
};
