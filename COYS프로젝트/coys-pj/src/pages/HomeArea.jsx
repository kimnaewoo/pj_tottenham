import { Link } from "react-router-dom";
import "../css/home_area.css";

export function HomeArea() {
  return (
    <section id="home-area" className="home-area">
      <h1 className="htit">SPURS CONTECT</h1>
      <div className="home">
        <div className="hpicture">
          <img src="./images/home/home.jpg" alt="home" />
          <div className="h-ex">
            <h1>Spurs Media Watch</h1>
            <h2>
              Spurs Media Watch Today's media stories brought to you by NewsNow.
              <br />
              These stories have been specially selected from today's media.
              <br /> They do not necessarily represent the views or position of Tottenham Hotspur Football Club. For
              total Spurs news coverage, visit NewsNow.co.uk, the UK's #1 football news aggregator.
            </h2>
            <div className="jump">
              <Link to="/contact">contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
