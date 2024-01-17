// 메인 페이지

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { FooterArea } from "./FooterArea";
import { Gnb } from "../pages/Gnb";
import { useNavigate } from "react-router-dom";
import { dcCon } from "../modules/dcContext";
import { MainArea } from "./MainArea";
import $ from 'jquery'
export function Layout() {
  // 1. 로그인 상태체크 변수 : 로컬스 'minfo' 초기할당!
  const [logSts, setLogSts] = useState(localStorage.getItem("minfo"));

  // 2. 로그인 환영메시지 상태변수
  const [logMsg, setLogMsg] = useState(null);

  const logOut = useCallback(() => {
    console.log("삭제!");
    // 1. 로컬스토리지 삭제('minfo')
    localStorage.removeItem("minfo");
    // 2. 로그인 상태값 업데이트
    setLogSts(null);
    // 3. 로그인 메시지 업데이트
    setLogMsg(null);
    // 4. 첫페이지로 이동
    // chgPage('/',{});
    $('.fa-user').css({display:'none'});
  }, []); // logOut 함수

  // 렌더링 후 실행구역 - 한번만
  useEffect(() => {
    if (localStorage.getItem("minfo")) {
      const minfo = JSON.parse(localStorage.getItem("minfo"));
      // 컨텍스트 API에 공개된 로그인 메시지 업데이트하기
      setLogMsg("welcome " +"Our "+ minfo.unm );
    }
  }, []);

  useLayoutEffect(() => {
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0, 0);
  });

  // 라우터 이동객체설정
  const goNav = useNavigate();

  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  const chgPage = useCallback((pgName) => {
    goNav(pgName);
  }, []);

  return (
    <dcCon.Provider value={{ chgPage, setLogMsg, logSts, setLogSts }}>
      <Gnb chgPageFn={chgPage} logSts={logSts} logOut={logOut}/>
      <MainArea logMsg={logMsg} chgPageFn={chgPage} />
      <FooterArea />
    </dcCon.Provider>
  );
}
