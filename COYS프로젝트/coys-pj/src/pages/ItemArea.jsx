import { useContext, useEffect, useRef, useState } from "react";
// 컨텍스트 API 불러오기
import { dcCon } from "../modules/dcContext";

import "../css/item_area.css";

import { ShopscrollFn } from "../func/shop_scroll";

import { selltopData } from "../data/selltop";
import { sellshopData } from "../data/sellshop";
import $ from "jquery";
import { Swiperitem } from "../plugin/Swiperitem";

export function ItemArea() {
  // 선택데이터
  const selData2 = selltopData;

  // 컨텍스트 API 사용하기
  const myCon = useContext(dcCon);

  // 카트에 담기 버튼 클릭시 호출함수 ////
  const useCart = () => {
    document.querySelector(".cart2").style.transform = "rotateY(360deg)";
  }; /////////// useCart함수 ////////////

  // 선택데이터 : 전체데이터[분류명][상품코드].split('^')
  // -> 개별상품 배열이 된다!
  // [상품명,상품코드,가격]
  // const selData = sinsangData[cat][goods].split('^');
  // console.log('선택데이터:',selData);

  const selData = sellshopData.find((v) => {
    // 조건: 분류와 상품분류코드가 일치하는 하나
    if (v.tit === v.tit && v.price === v.price) return true;
  });
  // filter는 결과를 배열에 담고
  // find는 배열의 결과값만 가져옴
  // 하나의 값을 가져올때는 find가 좋다!

  console.log("새로선택:", selData);
  // 전체 데이터를 셋업하기위한 항목은 ginfo임!
  const price = selData.price;
  const tit = selData.tit;

  // selData에 담긴 기존 객체데이터와 상품개수항목이 추가된
  // 객체를 만들고 이것을 로컬스에 저장한다!!!

  useEffect(() => {
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" });
    // 자동스크롤 이벤트 설정하기 /////
    // window.addEventListener("scroll", scrollFn);
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", ShopscrollFn);
    } else {
      window.addEventListener("scroll", ShopscrollFn);
    }

    // 숫자출력 input
    const sum = $("#sum");
    // 수량증감 이미지버튼
    const numBtn = $(".chg_num img");

    // 수량 증감 함수 /////////
    numBtn.click((e) => {
      // 이미지순번
      let seq = $(e.currentTarget).index();
      // 기존값 읽기
      let num = Number(sum.val());
      let total = $('#total').text().split('₩‌');
      // 윗버튼은 ++, 아랫버튼은 --
      seq ? num-- : num++;
      // 한계값
      if (num < 1) num = 1;
      console.log("순번:", seq, num);
    //   console.log($('#total'));
      // 증감 반영
      sum.val(num);
      // 총합계 반영
      // 기본값 : selData[2]
      // 출력박스 : #total
      $("#total").text(total * num + "원");
      console.log(total);
    });

    return () => {
      window.removeEventListener("scroll", ShopscrollFn);
      console.log("Sellshop.jsx 에서 소멸할 스크롤");
    }; ////////// 소멸자 return //////
  }, []); /////// useEffect ///////////

  // 리랜더링 실행구역 /////
  useEffect(() => {
    // 수량초기화
    $("#sum").val("1");
    // 총합계초기화
    $("#total").text((price) + "원");
  }); ////////// useEffect //////

  //정규식함수(숫자 세자리마다 콤마해주는 기능)
//   function addComma(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

  return (
    <>
      <div id="item_area">
        <div className="selltop2">
          <h1 className="tit2">
            <a href="#">SPURS SHOP</a>
          </h1>
          <div className="sell-gnb2">
            {selData2.map((v, i) => (
              <ul key={i}>
                <li href="#">{v}</li>
              </ul>
            ))}
          </div>
          <div className="gsbx2">
            <a href="#" className="fa-solid fa-magnifying-glass gs2"></a>
            <p className="gstit2">What are you looking for?</p>
          </div>
          <a href="/" className="fa-solid fa-cart-shopping cart2" />
        </div>
        <div id="imbx">
          <div className="inx">
            <div className="gimg">
              <div className="small">
                <img src="./images/item/item1.jpg" alt="썸네일 이미지" />
                <img src="./images/item/item2.jpg" alt="썸네일 이미지" />
                <img src="./images/item/item3.jpg" alt="썸네일 이미지" />
                <img src="./images/item/item4.jpg" alt="썸네일 이미지" />
                <img src="./images/item/item5.jpg" alt="썸네일 이미지" />
                <img src="./images/item/item6.jpg" alt="썸네일 이미지" />
              </div>
            </div>
            <div className="gdesc scbar">
              <h1>HOME Kit / All Spurs</h1>
              <div>
                <ol>
                  <li id="gtit">{tit}</li>
                  <li>
                    <span id="gprice"> {price}</span>
                  </li>
                  <li>
                    <span>★★★★☆</span>
                  </li>
                  <li>
                    <span>Size</span>
                    <span className="size">
                      <span>S</span>
                      <span>M</span>
                      <span>L</span>
                      <span>XL</span>
                      <span>2XL</span>
                    </span>
                  </li>
                  <li>
                    <span>total</span>
                    <span>
                      <input type="text" id="sum" defaultValue="1" />
                      <b className="chg_num">
                        <img src="./images/item/cnt_up.png" alt="증가" />
                        <img src="./images/item/cnt_down.png" alt="감소" />
                      </b>
                    </span>
                  </li>
                  <li className="tot">
                    <span>Sum</span>
                    <span id="total">{price}원</span>
                  </li>
                </ol>
              </div>
              <div className="btnbox">
                <button className="btn btn1">Add Name & Number</button>
                <button className="btn btn2" onClick={useCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <Swiperitem />
      </div>
    </>
  );
} ////////////// Sellshop 컴포넌트 ///////////
