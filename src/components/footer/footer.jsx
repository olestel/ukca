import React from "react";
import { Link } from "react-scroll";
import "./footer.scss";

import { ReactComponent as Logo } from "../../assets/footer/logo.svg";
import { ReactComponent as Arrow } from "../../assets/footer/arrow.svg";
import { ReactComponent as FacebookIcon } from "../../assets/contact/facebook.svg";

const partnerBox = () => {
  const handleGoToFacebook = () =>
    window.open(
      "https://www.facebook.com/profile.php?id=61560465976352&mibextid=LQQJ4d",
      "_blank"
    );

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-box footer-logo">
          <Logo className="ukca-logo" />
          <p>© 2024 - UKCA, All Right Reserved</p>
        </div>
        <FacebookIcon
          className="contact__social"
          onClick={handleGoToFacebook}
        />
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <div className="footer-box back-to-top">
            <p>BACK TO TOP</p>
            <Arrow />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default partnerBox;
