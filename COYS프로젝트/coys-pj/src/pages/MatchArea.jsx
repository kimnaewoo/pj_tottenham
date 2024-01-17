import "../css/match_area.css";

export function MatchArea() {
  return (
    <section id="match-area" className="match-area">
      <h1>Match Day</h1>
      <div id="mc-area">
        <div id="mcbox">
          <div className="mcbox">
            <h4>Tuesday</h4>
            <h3>24 OCT, 04:00</h3>
            <div className="mc1">
              <img src="./images/match/son.png" alt="son" />
              <div className="score">VS</div>
              <img src="./images/match/wol.png" alt="wol" />
            </div>
            <p className="mc2">premier League</p>
            <p className="mc2">TottenhamHotspur stadium,london</p>
          </div>
          <div className="mcbox">
            <h4>Friday</h4>
            <h3>27 OCT, 21:00</h3>
            <div className="mc1">
              <img src="./images/match/son.png" alt="son" />
              <div className="score">VS</div>
              <img src="./images/match/ast.png" alt="ast" />
            </div>
            <p className="mc2">premier League</p>
            <p className="mc2">TottenhamHotspur stadium,london</p>
          </div>
        </div>
      </div>
      <div className="ht">
        <div className="ht1">
          <img src="./images/match/match.jpg" alt="ht" />
          <h4>Spurs vs Liverfool | Key Highlights | 2023/24</h4>
        </div>
        <div className="ht2">
          <img src="./images/match/match02.jpg" alt="ht" />
          <h4>Spurs vs Chelsea | Key Highlights | 2023/24</h4>
        </div>
      </div>
    </section>
  );
}
