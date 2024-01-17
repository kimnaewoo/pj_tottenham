import "../css/shop_area.css";
import { SwiperApp } from "../plugin/Swiper";



export function ShopArea() {
  
  return (
    <section id="shop-area" className="shop-area">
      <div className="msg-box">
        <h1>
          We love <strong>sports</strong>, and we harness the tremendous power of sports in our
          <strong>marketing</strong>. We know exactly what the limitless possibilities the <strong>digital</strong>{" "}
          world offers.
          <br />
          <strong>Creativity</strong> has given rise to award-winning campaigns, activations and platforms.
          <br />
        </h1>
        <h2>
          We <strong>think</strong>
          about it and <strong>make</strong> it.
        </h2>
      </div>
      <SwiperApp/>
      
    </section>
  );
}
