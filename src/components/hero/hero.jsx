import React from "react";

// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/hero-image.png";
//Components
import Button from "../ui-components/button/button";
import { Grid } from "@mui/material";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Grid container>
        <Grid item md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font40">Hello!!!</h1>
            <h1 className="weight800 font35">
              WE ARE UKRAINIAN TEAM WITH CANADIAN EXPERIENCE
            </h1>
            <p className="font12">
              We provide free estimates. Some of the benefits of our roof system
              is that it's modern, quiet and expected service life is
              aproxolimetly 60 years.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Grid>
        <Grid item md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default hero;
