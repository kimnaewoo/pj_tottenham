import { useEffect } from "react";

import "../css/team.css";
import { teamscrollFn } from "../func/team_scroll";
import { teamData } from "../data/team";
import { loanData } from "../data/loan";
import $ from "jquery";

export function Team() {
  useEffect(() => {
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" })
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", teamscrollFn);
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", teamscrollFn);
      console.log("미디어쿼리~");
    } 
    else{
      window.addEventListener("scroll", teamscrollFn);
    }
    return () => {
      window.removeEventListener("scroll", teamscrollFn);
      console.log("Team.jsx 에서 소멸할 스크롤");
    }; ////////// 소멸자 return /////

  },[]); /////// useEffect ///////////
  return (
    <>
      <div className="team-area">
        <div className="team-top"></div>
        <h1 className="team-tit">TEAMS</h1>
        <div className="teambx">
          <div className="team">
            {teamData.map((v, i) => (
              <div className="pro" key={i}>
                <div className="pro-img">
                  <img src={v.isrc} alt={v.tit} />
                </div>
                <div className="pro-data">
                  <p className="pro-tit">{v.tit}</p>
                  <p className="pro-from">{v.from}</p>
                </div>
                <div className="pro-num">{v.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="loan-area">
        <div className="loan-top"></div>
        <h1 className="loan-tit">LOAN</h1>
        <div className="loanbx">
          <div className="loan">
            {loanData.map((v, i) => (
              <div className="pro" key={i}>
                <div className="pro-img">
                  <img src={v.isrc} alt={v.tit} />
                </div>
                <div className="pro-data">
                  <p className="pro-tit">{v.tit}</p>
                  <p className="pro-from">{v.from}</p>
                </div>
                <div className="pro-num">{v.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
