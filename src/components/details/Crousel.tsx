"use client";
import "@/components/css/crousel.css";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";

let count_event = 0;
function EventSlider({ thumb }: { thumb: string[] }) {
  const posterRef = [
    useRef<HTMLLabelElement>(null),
    useRef<HTMLLabelElement>(null),
    useRef<HTMLLabelElement>(null),
  ];
  const [initialClientX, setInitialClientX] = useState(0);
  const [finalClientX, setFinalClientX] = useState(0);
  const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    clearInterval(slideIntervalev);
    setInitialClientX(e.touches[0].clientX);
  };
  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setFinalClientX(e.touches[0].clientX);
  };
  const touchEnd = () => {
    if (initialClientX - finalClientX > 0) {
      console.log("swiped left");
    } else {
      console.log("swiped right");
    }
  };
  const changestate = () => {
    if (
      posterRef[0].current === null ||
      posterRef[1].current === null ||
      posterRef[2].current === null
    )
      return;
    if (count_event == 0) {
      posterRef[0].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[0].current.style.opacity = "0.6";
      posterRef[0].current.style.zIndex = "0";

      posterRef[1].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[1].current.style.opacity = "0.6";
      posterRef[1].current.style.zIndex = "0";

      posterRef[2].current.style.transform = "translatex(0%) scale(1)";
      posterRef[2].current.style.opacity = " 1";
      posterRef[2].current.style.zIndex = "1";

      count_event = 1;
    } else if (count_event == 1) {
      posterRef[1].current.style.transform = "translatex(0%) scale(1)";
      posterRef[1].current.style.opacity = "1";
      posterRef[1].current.style.zIndex = "1";

      posterRef[2].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[2].current.style.opacity = "0.6";
      posterRef[2].current.style.zIndex = "0";

      posterRef[0].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[0].current.style.opacity = "0.6";
      posterRef[0].current.style.zIndex = "0";

      count_event = 2;
    } else if (count_event == 2) {
      posterRef[1].current.style.transform = "translatex(40%) scale(.8)";
      posterRef[1].current.style.opacity = "0.6";
      posterRef[1].current.style.zIndex = "0";

      posterRef[2].current.style.transform = "translatex(-40%) scale(.8)";
      posterRef[2].current.style.opacity = "0.6";
      posterRef[2].current.style.zIndex = "0";

      posterRef[0].current.style.transform = "translatex(0%) scale(1)";
      posterRef[0].current.style.opacity = "1";
      posterRef[0].current.style.zIndex = "1";

      count_event = 0;
    }
  };
  var slideIntervalev: any;
  useLayoutEffect(() => {
    slideIntervalev = setInterval(() => {
      changestate();
    }, 6000);

    return () => {
      clearInterval(slideIntervalev);
    };
  }, []);
  return (
    <div className="event_container">
      <div
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        className="event_cards"
      >
        <label
          ref={posterRef[0]}
          className="event_card poster-1"
          htmlFor="item-1"
        >
          <Image
            className="event_img w-fit"
            fill={true}
            src={thumb[0]}
            alt="img1"
          />
        </label>
        <label
          ref={posterRef[1]}
          className="event_card poster-2"
          htmlFor="item-2"
        >
          <Image fill={true} className="event_img" src={thumb[1]} alt="img2" />
        </label>
        <label
          ref={posterRef[2]}
          className="event_card poster-3"
          htmlFor="item-3"
        >
          <Image fill={true} className="event_img" src={thumb[2]} alt="img3" />
        </label>
      </div>
    </div>
  );
}

export default EventSlider;