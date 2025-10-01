import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IHistoricalDate } from "../../types";
import HistoricalEvents from "./components/Events/HistoricalEvents";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HistoricalDates.scss";

gsap.registerPlugin(useGSAP);

interface IDatesProps {
  dates: IHistoricalDate[];
}

// Слайдер главный
//    анимация при переключении слайдов - цифры увеличиваются, а ивенты изчезают и появляются

// Слайдер внутренний
//    анимация при перелистывании основного, контент поднимается плавно наверх

function HistoricalDates({ dates }: IDatesProps) {
  const numbers = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  const circle = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);
  const [swiperPeriod, setSwiperPeriod] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  // useGSAP(
  //   () => {
  //     const start = gsap.utils.toArray('.historical-dates__start');
  //     tl.current = gsap
  //       .timeline({defaults:{
  //         duration:2,
  //         ease:'sine.inOut',
  //     }})
  //       .to(start, {
  //         textContent:'10',
  //         snap:'textContent',
  //       }, 0);
  //   },
  //   { scope: numbers }
  // );

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        defaults: {
          duration: 1,
        },
      });
    },
    { scope: circle }
  );

  const angles = useMemo(() => {
    const angleIncrement = (Math.PI * 2) / dates.length;

    return dates.map((data, index) => {
      const angle = angleIncrement * index;

      return angle;
    });
  }, [dates]);

  console.log("angles", angles);

  const circles = useMemo(() => {
    if (isRendered) {
      const radius = circle.current!.offsetWidth / 2;

      return angles.map((angle) => {
        return {
          x: radius + Math.cos(angle) * radius - 8,
          y: radius + Math.sin(angle) * radius - 8,
        };
      });
    }

    return [];
  }, [isRendered, angles]);

  console.log("circles", circles);

  return (
    <section className="historical-dates">
      <div className="container historical-dates__container">
        <span className="line-h"></span>
        <span className="line-v"></span>
        <div className="circle" ref={circle}>
          {circles.map(({ x, y }, index) => (
            <span
              className="bullet"
              key={index}
              style={{ top: y, left: x }}
              onClick={() => {
                tl.current!.to(circle.current, {
                  // rotation: `${2 * Math.PI - angles[index]}rad`,
                  rotation: `${
                    angles[index] > Math.PI
                      ? 2 * Math.PI - angles[index]
                      : -angles[index]
                  }rad`,
                }).to(
                  `.bullet`,
                  {
                    rotation: `${-(2 * Math.PI - angles[index])}rad`,
                  },
                  0
                );
                swiperPeriod?.slideTo(index);
              }}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <h1 className="historical-dates__title">
          Исторические
          <br />
          даты
        </h1>
        <Swiper
          className="historical-dates__period"
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          modules={[EffectFade, Navigation, Pagination]}
          navigation={{
            nextEl: ".historical-dates__nav--next",
            prevEl: ".historical-dates__nav--prev",
          }}
          pagination={true}
          onSlideChange={(swiper: SwiperType) => {
            // tl.current!.to(circle.current, {
            //   rotation: `${
            //     activeIndex > swiper.activeIndex ? angles[1] : -angles[1]
            //   }rad`,
            // }).to(
            //   `.bullet`,
            //   {
            //     rotation: `${-(2 * Math.PI - angles[1])}rad`,
            //   },
            //   0
            // );
            setActiveIndex(() => swiper.activeIndex);
          }}
          onSwiper={setSwiperPeriod}
          slidesPerView={1}
          breakpoints={{
            1280: {
              pagination: false,
            },
          }}
        >
          {dates.map((period) => {
            return (
              <SwiperSlide>
                <div className="historical-dates__content" key={period.id}>
                  <div className="historical-dates__numbers" ref={numbers}>
                    <span className="historical-dates__start">
                      {period.start}
                    </span>
                    <span className="historical-dates__end">{period.end}</span>
                  </div>
                  <h2 className="historical-dates__name">{period.title}</h2>
                  <HistoricalEvents events={period.events} />
                </div>
              </SwiperSlide>
            );
          })}
          <div className="historical-dates__navigation">
            <span className="historical-dates__fraction">
              0{activeIndex + 1}/0{dates.length}
            </span>
            <span
              className="historical-dates__nav historical-dates__nav--prev"
              onClick={() => {
                tl.current!.to(circle.current, {
                  rotation: `${-angles[1]}rad`,
                }).to(
                  `.bullet`,
                  {
                    rotation: `${-(2 * Math.PI - angles[1])}rad`,
                  },
                  0
                );
              }}
            >
              <img src="/images/arrow-1.svg" alt="" />
            </span>
            <span
              className="historical-dates__nav historical-dates__nav--next"
              onClick={() => {
                tl.current!.to(circle.current, {
                  rotation: `${angles[1]}rad`,
                }).to(
                  `.bullet`,
                  {
                    rotation: `${-(2 * Math.PI - angles[1])}rad`,
                  },
                  0
                );
              }}
            >
              <img src="/images/arrow-1.svg" alt="" />
            </span>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default HistoricalDates;
