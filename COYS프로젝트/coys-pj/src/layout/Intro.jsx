import { useEffect } from "react";
import "../css/intro.css";

// 제이쿼리 불러오기
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

export function Intro() {
  useEffect(() => {
    // 인트로 이벤트
    setTimeout(() => {
      $(".fir").css({ top: "60%", opacity: 1 });
    }, 1000);
    setTimeout(() => {
      $(".sec").css({ top: "73%", opacity: 1 });
    }, 2000);
    setTimeout(() => {
      $(".rom img").css({ transform: "translate(-40%, -50%)" });
    }, 3000);
    setTimeout(() => {
      $(".mad img").css({ transform: "translate(-36%, -50%)" });
    }, 4000);
    setTimeout(() => {
      $(".son img").css({ transform: "translate(-45%, -50%)" });
    }, 5000);
    setTimeout(() => {
      $("#intro-area").css({ height: "0vh" });
    }, 7000);
  }, []);

  return (
    <>
      <div id="intro-area" className="intro-area">
        <section id="intro-area" className="intro-area">
          <div className="cap-box">
            <div className="intro-captain mad">
              <img src="./images/intro/james.jpg" alt="james" />
            </div>
            <div className="intro-captain son">
              <img src="./images/intro/son.jpg" alt="son" />
            </div>
            <div className="intro-captain rom">
              <img src="./images/intro/romero.png" alt="romero" />
            </div>
          </div>
          <p className="msg fir">#TOTTENHAM HOTSPUR</p>
          <p className="msg sec">#COME ON YOUR SPURS</p>
        </section>
      </div>
    </>
  );
} // Intro 컴포넌트
