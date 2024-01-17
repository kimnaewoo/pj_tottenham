import "../css/gnb.css";

import $ from "jquery";
import { memo, useEffect } from "react";
import { Menu } from "../modules/Menu";
import { Link } from "react-router-dom";

function temp() {
  let logo = $("#gnb img");
  let menu = $("#menu div");
  let user = $(".user");
  let sns = $(".sns-menu a");

  let sts = $(".top").is(".on");

  if (sts) {
    logo.attr("src", "./images/logo2.png");
    menu.css({ backgroundColor: "#fff" });
    user.css({ color: "#fff" });
    sns.css({ color: "#fff" });
    // $("html,body").css({ overflow: "hidden" });
  } else {
    // $("html,body").css({ overflowY: "visible" }).animate({ scrollTop: "+1px" }).animate({ scrollTop: "-1px" });
  }
} // temp

export const Gnb = memo(({ logSts, logOut }) => {
  // 랜더링후 실행
  useEffect(() => {
    $("#menu").click(() => {
      $(".top , .bottom").toggleClass("on");
      $(".all-menu").fadeToggle(400);
    }); // click
  }, []); // useEffect

  return (
    <>
      <Menu />
      <div id="gnb" className="gnb">
        <Link to="">
          <img className="logo" src="./images/logo2.png" alt="logo" />
        </Link>
        <div id="menu" onClick={() => temp()}>
          <div className="top"></div>
          <div className="bottom"></div>
        </div>
        <div className="log">
          {logSts === null && (
            <>
              <Link to="login" className="fa-solid fa-user user"></Link>
            </>
          )}
          {logSts !== null && (
            <>
              <a href="#" className="fa-solid fa-user-slash user logout" onClick={logOut}></a>
            </>
          )}
        </div>
        <div className="sns-menu">
          <Link
            to="https://www.facebook.com/TottenhamHotspur/?locale=ko_KR"
            className="fa-brands fa-facebook fk"
          ></Link>
          <span>페이스북</span>
          <Link to="https://www.instagram.com/spursofficial/ " className="fa-brands fa-instagram is"></Link>
          <span>페이스북</span>
          <Link
            to="https://www.youtube.com/channel/UCEg25rdRZXg32iwai6N6l0w"
            className="fa-brands fa-youtube yt"
          ></Link>
          <span>페이스북</span>
        </div>
      </div>
    </>
  );
});
