import { memo } from "react";
import "../css/top_area.css";
export const TopArea = memo(({logmsg}) => {
  return (
    <>
      <section id="top-area" className="top-area">
        <video muted autoPlay loop>
          <source src="./videos/main_video.mp4" type="video/mp4" />
        </video>
        <h1>WE ARE INEVITABLE</h1>
        <h2>CREATIVES IN FOOTBALL</h2>
        <h4>" Glory, Glory, Tottenham Hotspur "</h4>
        <h5 className="logmsg">{logmsg}</h5>
        <div className="wheel">
          <img src="./images/wheel.png" alt="마우스휠" />
        </div>
      </section>
    </>
  );
});