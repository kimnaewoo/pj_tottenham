// 섹션소개모듈 데이터 가져오기
import { sellshopData } from "../data/sellshop";
import { selltopData } from "../data/selltop";
import { sellbanData } from "../data/sellban";
// 섹션소개모듈용 CSS 불러오기
import "../css/sellshop.css";

import { memo, useContext, useEffect } from "react";

import $ from "jquery";

import { ShopscrollFn } from "../func/shop_scroll";

import { Swipershop } from "../plugin/Swipershop";
import { Link } from "react-router-dom";
import { dcCon } from "./dcContext";

export const Sellshop = memo(({ logSts }) => {
  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);
  // 선택데이터
  const selData = sellshopData;
  const selData2 = selltopData;
  const selData3 = sellbanData;

  useEffect(() => {
    // $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" });
    // 자동스크롤 이벤트 설정하기 /////
    // window.addEventListener("scroll", scrollFn);
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", ShopscrollFn);
    } else {
      window.addEventListener("scroll", ShopscrollFn);
    }

    return () => {
      window.removeEventListener("scroll", ShopscrollFn);
      console.log("Sellshop.jsx 에서 소멸할 스크롤");
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////

  return (
    <>
      <div id="sellshop-page">
        <div className="selltop">
          <h1 className="tit">
            <a href="#">SPURS SHOP</a>
          </h1>
          <div className="sell-gnb">
            {selData2.map((v, i) => (
              <ul key={i}>
                <li href="#">{v}</li>
              </ul>
            ))}
          </div>
          <div className="gsbx">
            <a href="#" className="fa-solid fa-magnifying-glass gs"></a>
            <p className="gstit">What are you looking for?</p>
          </div>
          <a href="/" className="fa-solid fa-cart-shopping cart" />
        </div>
        <p>Home kit</p>
        <div className="sellban">
          {selData3.map((v, i) => (
            <div className="sellbanbx" key={i}>
              <a href="/">
                <img src={v.isrc} alt={v.itit} />
              </a>
              <h4 className="sellbanp">{v.itit}</h4>
            </div>
          ))}
        </div>
        <div className="sellshop">
          {selData.map((v, i) => (
            <div key={i}>
              <div className="sell-imbx">
                <Link to="/itemarea">
                  <img src={v.isrc} alt={v.tit} />
                </Link>
              </div>
              <div className="sell-titbx">
                <Link to="/itemarea">
                  <h3>{v.tit}</h3>
                </Link>
                <h2>{v.date}</h2>
                <h1>{v.price}</h1>
              </div>
            </div>
          ))}
        </div>
        <Swipershop />
        <div className="shop-main"></div>
      </div>
    </>
  );
}); ////////////// Sellshop 컴포넌트 ///////////
