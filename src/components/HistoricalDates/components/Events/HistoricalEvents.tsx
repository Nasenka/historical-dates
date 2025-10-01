import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HistoricalEvent from "../Event/HistoricalEvent";
import { IHistoricalEvent } from "../../../../types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HistoricalEvents.scss";

interface IHistoricalEventsProps {
  events: IHistoricalEvent[];
}

function HistoricalEvents({ events }: IHistoricalEventsProps) {

  return (
    <div className="historical-events">
      <Swiper
        className="historical-events__slider"
        modules={[Navigation]}
        nested={true}
        navigation={{
          nextEl: ".historical-events__nav--next",
          prevEl: ".historical-events__nav--prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 25,
          },
          768: {
            spaceBetween: 32,
            slidesPerView: 2,
          },
          1280: {
            spaceBetween: 80,
            slidesPerView: 3,
          },
        }}
      >
        {events.map((event) => {
          return (
            <SwiperSlide>
              <HistoricalEvent event={event} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="historical-events__nav historical-events__nav--prev">
        <img src="/images/arrow-2.svg" alt="" />
      </button>
      <button className="historical-events__nav historical-events__nav--next">
        <img src="/images/arrow-2.svg" alt="" />
      </button>
    </div>
  );
}

export default HistoricalEvents;
