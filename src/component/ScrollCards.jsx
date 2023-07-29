import React, { useRef, useState } from "react";
import { ScrollCard } from "./ScrollCard";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { animeData } from "../lib/data";

export const ScrollCards = () => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    if (ref.current.scrollLeft + scrollOffset >= ref.current.scrollLeftMax)
      return setRight(false);
    if (ref.current.scrollLeft + scrollOffset < 0) return setLeft(false);
    if (left !== true) setLeft(true);
    if (right !== true) setRight(true);
  };

  return (
    <div className="px-4 relative">
      <div
        className="grid  grid-flow-col gap-[10px] py-[25px] overflow-x-scroll snap-x cards w-full scroll-smooth"
        ref={ref}>
        {animeData.map((anime) => (
          <ScrollCard
            key={anime.title}
            title={anime.title}
            text={anime.short_description}
            bannerURL={anime.banner_img}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button onClick={() => scroll(-300)} className="mr-4 px-[14px]">
          <FiArrowLeftCircle className=" text-3xl" />
        </button>
        <button onClick={() => scroll(300)} className="px-[14px]">
          <FiArrowRightCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};
