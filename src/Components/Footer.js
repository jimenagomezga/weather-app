import React from "react";
import "../Styles/Footer.css";
import instagramIcon from "../../src/Assets/instagram.png";
import facebookIcon from "../../src/Assets/instagram (1).png";
import twitterIcon from "../../src/Assets/instagram (2).png";
import youtubeIcon from "../../src/Assets/instagram (3).png";

function Footer() {
  return (
    <div className="footerContainer">
      <footer>
        <div className="menuFooter">
          <h4>Configuración y ayuda</h4>
          <h4>Contacto</h4>
          <h4>Aviso Legal</h4>
          <h4>Política de privacidad</h4>
        </div>
        <div className="icons">
          <img src={instagramIcon} alt="instagramIcon" />
          <img src={facebookIcon} alt="facebookIcon" />
          <img src={twitterIcon} alt="twitterIcon" />
          <img src={youtubeIcon} alt="youtubeIcon" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
