import { useEffect } from "react";


import $ from "jquery"
import "../css/contect.css";

import { contectData } from "../data/contect";
import { conscrollFn } from "../func/contect_scroll";
import { eventData } from "../data/event";

export function Contect() {
  // 선택된 데이터
  const selData = contectData;

  useEffect(() => {
    $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+=1px" })
    // 자동스크롤 이벤트 설정하기 /////
    window.addEventListener("scroll", conscrollFn);
    if (window.matchMedia("(max-width:375px)").matches) {
      // 미디어 쿼리에 따라 이벤트 핸들러 연결
      window.removeEventListener("scroll", conscrollFn);
      console.log("미디어쿼리~");
    }
    else{
      window.addEventListener("scroll", conscrollFn);
    }

    return () => {
      window.removeEventListener("scroll", conscrollFn);
      console.log("Contect.jsx 에서 소멸할 스크롤");
    }; ////////// 소멸자 return //////

  },[]); /////// useEffect ///////////


  const eventList = () => {
    const hcode = [];
    for (let i = 1; i < 6; i++) {
      hcode[i] = <img src={"./images/contect/event/evt" + i + ".png"} key={i}/>;
    }
    return hcode;
  };
  return (
    <>
      <div id="ct-area" className="ct-area">
        <div className="ct-top">
          <h2>THE</h2>
          <h3>STADIUM</h3>
        </div>
        <h1 className="ct-tit">WELCOME TO TOTTENHAM HOTSUP STADIUM</h1>
        <div className="ct-intro">
          <div className="intro-img">
            <img src="./images/contect/stadium02.jpg" alt="" />
          </div>
          <div className="intro-ex">
            <h3>The Stadium</h3>
            <br />
            <h4>
              The home of Tottenham Hotspur Football Club and the largest club stadium in London with a capacity of
              62,850.
              <br />
              <br />
              Opened in April, 2019, the stadium is designed to maximise the supporter experience and brings fans closer
              to the pitch than at any comparable size stadium in the UK - distances from the front row to the touchline
              range from just 4.9 metres to 7.9 metres.
              <br />
              <br />
              Our 17,500-seat, single-tier South Stand is the largest in the UK and stands at more than 34 metres in
              height - on top of which sits the Club's famous golden cockerel.
              <br />
              <br />
              Over 60 food and drink outlets across the stadium are inspired by London's vibrant street food scene,
              offering supporters a wide range of choice, including plant-based options throughout. Highlights include
              The Market Place in the South Stand, featuring Europe's longest bar - The Goal Line.
              <br />
              <br />
              The stadium is multi-use with a unique, dividing retractable grass surface enabling the staging of a
              variety of major events in addition to Spurs matches, including NFL, boxing, rugby and concerts - creating
              recurring sources of revenue for the Club to reinvest in its football activities.
              <br />
              <br />
              With the addition of Visitor Attractions, including Stadium Tours and The Dare Skywalk, and world-class
              Conference & Events facilities, Tottenham Hotspur Stadium brings nearly two million visitors to N17 every
              year and a £344m annual boost to the local economy in one of London's most deprived areas.
              <br />
              <br />
              Tottenham Hotspur is Premier League's greenest club and the stadium is powered by 100% renewable energy,
              with a zero waste-to-landfill policy, a reusable beer cup scheme and a wide range of public transport
              options.
            </h4>
            <button className="exbtn">VIEW UPCOMING EVENTS</button>
          </div>
        </div>
        <h1 className="info-tit">SPURS INFOMATION</h1>
        <div id="ct-info" className="ct-info">
          <div className="infobx">
            {selData.map((v, i) => (
              <div className="info" key={i}>
                <a href="#">
                  <img src="./images/contect/inpo.jpg" alt="info" />
                  <div className="info-etc">
                    <h1>{v.tit}</h1>
                    <h2>{v.stit}</h2>
                    <button>{v.cthis}</button>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div id="event-area" className="event-area">
          <h1 className="event-tit">
            <span>EVENTS</span> & <span>CONCERTS</span>
          </h1>
          <h1 className="event-stit">
            Welcome to Tottenham Hotspur Stadium, a world-class venue bringing you
            <br />
            <p>the very best in live sport and music.</p>
          </h1>
          <div className="list-area">
            <ul className="listbx">
              <li className="list">{eventList()}</li>
            </ul>
          </div>
          <ul className="eventbx">
            {eventData.map((v, i) => (
              <li className="evtbx" key={i}>
                <img src={v.isrc} alt="event" />
                <div className="titbx">
                  <h3 className="evt-tit">{v.tit}</h3>
                  <div className="btnbx">
                    <button className="evtbtn">{v.cthis}</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
