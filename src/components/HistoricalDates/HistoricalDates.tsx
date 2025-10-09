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

function HistoricalDates({ dates }: IDatesProps) {
  const tl = useRef<gsap.core.Timeline>(null);
  const circle = useRef<HTMLDivElement>(null);
  const periodName = useRef<HTMLSpanElement>(null);
  const [isRendered, setIsRendered] = useState(false);
  const [swiperPeriod, setSwiperPeriod] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);

  useEffect(() => {
    setIsRendered(true);
  }, []);

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

  const angleIncrement = (Math.PI * 2) / dates.length;

  const circles = useMemo(() => {
    if (isRendered) {
      const radius = circle.current!.offsetWidth / 2;

      return dates.map((date, index) => {
        return {
          angle: 2 * Math.PI - angleIncrement * index,
          x:
            radius +
            Math.cos(angleIncrement * index - angleIncrement) * radius -
            3,
          y:
            radius +
            Math.sin(angleIncrement * index - angleIncrement) * radius -
            3,
        };
      });
    }

    return [];
  }, [isRendered, angleIncrement, dates]);

  console.log("circles", circles);

  return (
    <section className="historical-dates">
      <div className="container historical-dates__container">
        <span className="historical-dates__line historical-dates__line--h" />
        <span className="historical-dates__line historical-dates__line--v" />
        <div className="historical-dates__circle" ref={circle}>
          {circles.map(({ x, y }, index) => (
            <button
              className={`historical-dates__bullet ${
                index === activeIndex ? "historical-dates__bullet--active" : ""
              }`}
              key={index}
              style={{ top: y, left: x }}
              disabled={index === activeIndex ? true : false}
              onClick={() => {
                const rotation = circles[index].angle;

                // setCurrentAngle(() => rotation);

                tl.current!.to(circle.current, {
                  rotation: `${rotation}rad`,
                }).to(
                  ".historical-dates__bullet",
                  {
                    rotation: `${-rotation}rad`,
                  },
                  0
                );
                swiperPeriod?.slideTo(index);
              }}
            >
              <span className="historical-dates__bullet-number">
                {index + 1}
              </span>
              <span className="historical-dates__period-name" ref={periodName}>
                {dates[index].title}
              </span>
            </button>
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
                  <div className="historical-dates__numbers">
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
            <button
              className="historical-dates__nav historical-dates__nav--prev"
              onClick={() => {
                const rotation = circles[activeIndex].angle;

                tl.current!.to(circle.current, {
                  rotation: `${rotation}rad`,
                }).to(
                  `.historical-dates__bullet`,
                  {
                    rotation: `${-rotation}rad`,
                  },
                  0
                );
              }}
            >
              <img src="/images/arrow-1.svg" alt="" />
            </button>
            <button
              className="historical-dates__nav historical-dates__nav--next"
              onClick={() => {
                const rotation = circles[activeIndex].angle;

                tl.current!.to(circle.current, {
                  rotation: `${rotation}rad`,
                }).to(
                  `.historical-dates__bullet`,
                  {
                    rotation: `${-rotation}rad`,
                  },
                  0
                );
              }}
            >
              <img src="/images/arrow-1.svg" alt="" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default HistoricalDates;
