// 스와이퍼 플러그인 컴포넌트

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiper.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";


export function SwiperApp() {
  // 리스트 만들기 함수
  const makeList = (num) => {
    let temp = [];
    for (let x = 0; x < num; x++) {
      temp[x] = (
        <SwiperSlide className="kitbox" key={x}>
          <div className="kit">
            <img src={"./images/shop/hk" + (x + 1) + ".jpg"} />
            <p>　COYS</p>
          </div>
        </SwiperSlide>
      );
    } // for문
    return temp;
  };
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={-200}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1600:{
            slideActiveClass:6,
            spaceBetween: -200,
          }
        }}
        id="kitbox"
      >
        {makeList(11)}
      </Swiper>
    </>
  );
} // Swiper 컴포넌트
