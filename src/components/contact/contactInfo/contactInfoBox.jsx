import React from "react";

import "./contactInfoBox.scss";

const contactInfoBox = (props) => (
  <div className="contact__info-box">
    <div>
      <img src={props.icon} alt="address" />
    </div>
    <div>
      <a href={`${props.isEmail ? "mailto:" : "tel:"}${props.textLine}`}>
        {props.textLine}
      </a>
    </div>
  </div>
);

export default contactInfoBox;
