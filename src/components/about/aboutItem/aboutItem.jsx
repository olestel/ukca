import React from "react";
import { Grid } from "@mui/material";

import "../about.scss";
// Components
import Title from "../../ui-components/title/title";
import Button from "../../ui-components/button/button";
// Assets
import AboutImage from "../../../assets/about/about.png";

const AboutItem = (props) => (
  <div className="wrapper about-more-item">
    <Title title={props.title} />
    <Grid container>
      {props.isLeft && (
        <Grid item md={12} lg={6}>
          <div className="about-image left">
            <img src={props.image || AboutImage} alt="hero" />
          </div>
        </Grid>
      )}
      <Grid item md={12} lg={6} className="about-info">
        <p className="font12">{props.text}</p>
        <Button label="SEND MESSAGE" target={"contact"} />
      </Grid>
      {!props.isLeft && (
        <Grid item md={12} lg={6}>
          <div className="about-image">
            <img src={props.image || AboutImage} alt="hero" />
          </div>
        </Grid>
      )}
    </Grid>
  </div>
);

export default AboutItem;
