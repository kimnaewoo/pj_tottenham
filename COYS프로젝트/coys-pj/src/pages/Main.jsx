import { HomeArea } from "./HomeArea";
import { MatchArea } from "./MatchArea";
import { NewsArea } from "./NewsArea";
import { ShopArea } from "./ShopArea";
import { Intro } from "../layout/Intro";
import { TopArea } from "../layout/TopArea";
import { scrollFn } from "../func/jquery-windowscroll_evt";
import { useEffect } from "react";

import $ from "jquery";

// 라우터 역할을 하는 MainArea 컴포넌트
export function Main() {
  useEffect(() => {
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" });

    if (window.matchMedia("(max-width:375px and min-width:376px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", scrollFn);
    } else {
      // 자동스크롤 이벤트 설정하기 /////
      window.addEventListener("scroll", scrollFn);
      console.log("메인스크롤설정");
    }
    return () => {
      window.removeEventListener("scroll", scrollFn);
      console.log("메인에서 소멸할 스크롤");
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////
  return (
    <>
      <Intro />
      <TopArea />
      <ShopArea />
      <MatchArea />
      <NewsArea />
      <HomeArea />
    </>
  );
} // MainArea 컴포넌트
