import "./hero.css";
import heroImage from "../assets/hero_image.png";
import Container from "../container/Container";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-inner">
          <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
              <div className="hero-hand-icon">
                <p>new collections for everyone</p>
              </div>
            </div>

            <Link to="/mens" className="hero-latest-btn">
              Latest Collection
            </Link>
          </div>
          <div className="hero-right">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
