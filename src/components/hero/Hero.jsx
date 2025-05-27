import "./hero.css";
import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";
import heroImage from "../assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="icon" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
}

export default Hero;
