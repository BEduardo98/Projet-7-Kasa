import FooterLogo from "../../assets/FooterLogo.svg";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="div_footer">
        <img className="img_footer" src={FooterLogo} alt="Kasa logo footer" />
        <p className="p_footer">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
