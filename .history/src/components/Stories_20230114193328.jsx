import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";
import {Link} from "react-router-dom"


const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-900 hover:scale-105 transition-all duration-700 ease-in-out ring-1 ring-slate-200">
                {/* href={val.url} */}
                <a href={val.url} target="_blank">
                  <div  className="flex items-center justify-center">
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">{val.by}</span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{truncate(val.text, {length: 175})}</p>
                  </div>
                  </a>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
