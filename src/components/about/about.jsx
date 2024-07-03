import React from "react";

import "./about.scss";
// Components
import AboutItem from "./aboutItem/aboutItem";
import SteelRoofingImg from "../../assets/about/steel-roofing-img.png";

const about = () => (
  <div id="about">
    <AboutItem
      title="ABOUT OUR PRODUCT"
      text="
        With our company you can trust that your roofing project will be
        easy, quick and pleasant. We`re with you throughout the project and
        our roofing professionals are ready to help you whenever you need.
        Our experience in roofing, and the outstanding quality of the
        sustainable and durable products guarantee you a worry-free roof
        that lasts for decades.
      "
    />
    <AboutItem
      title="Steel roofing sheets"
      text="Our first-class steel roofs have protected homes for over 60 years. Their durability, quality and sustainable advantages are unchallenged. From our wide selection of colours, coatings and styles you will definitely find the perfect option for your home, whether it be modern, traditional or something else."
      isLeft
      image={SteelRoofingImg}
    />
    <AboutItem
      title="Class A Fire Rating"
      text="Fires from electrical malfunction, lightning strikes, and even wildfires are far less likely to catch when you have a metal roof. Metal roofs will never burn and offer Class A fire rating."
    />
    <AboutItem
      title="Quite"
      text="Thanks to its unique stone coating and specially designed installation system, noise from rain and hail is minimized to a level that can surpass any other roofing material."
      isLeft
    />
    <AboutItem
      title="Warranty"
      text="Expected service life approximately 60 years. Technical warranty 30 years . Maintenance warranty 15 years."
    />
  </div>
);

export default about;
