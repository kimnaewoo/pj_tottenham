import "../css/news_area.css";

export function NewsArea() {
  return (
    <section id="main-area" className="main-area">
      <h1 className="n-tit">SPURS NEWS</h1>
      <div className="news-area">
        <div className="news n1">
          <img src="./images/news/news0.jpg" alt="news0" />
        </div>
        <div className="news n2">
          <img src="./images/news/news3.jpg" alt="news1" />
        </div>
        <div className="news n3">
          <img src="./images/news/news1.jpg" alt="news2" />
        </div>
        <div className="news n4">
          <img src="./images/news/news4.jpg" alt="news3" />
        </div>
        <div className="news n5">
          <img src="./images/news/news7.jpg" alt="news3" />
        </div>
      </div>
    </section>
  );
}
