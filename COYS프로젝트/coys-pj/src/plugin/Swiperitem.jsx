// 스와이퍼 플러그인 컴포넌트

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/swiperitem.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";


export function Swiperitem() {
  // 리스트 만들기 함수
  const makeList = (num) => {
    let temp = [];
    for (let x = 0; x < num; x++) {
      temp[x] = (
        <SwiperSlide className="itembox" key={x}>
          <div className="item">
            <img src={"./images/shop/swi" + (x + 1) + ".jpg"} />
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
        spaceBetween={-50}
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
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1600:{
            slideActiveClass:6,
            spaceBetween: -50,
          }
        }}
        id="itembox"
      >
        {makeList(8)}
      </Swiper>
    </>
  );
} // Swiper 컴포넌트
