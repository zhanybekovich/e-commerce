import "./footer.css";
import footerLogo from "../assets/logo_big.png";
import instagram from "../assets/instagram_icon.png";
import pinterest from "../assets/pinterest_icon.png";
import whatsApp from "../assets/whatsapp_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsApp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
