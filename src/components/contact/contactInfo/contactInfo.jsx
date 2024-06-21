import React from "react";
import { Grid } from "@mui/material";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";

import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";

const contactInfo = () => (
  <Grid container>
    <Grid item xs={12}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} lg={3} className="contact__info">
          <ContactInfoBox icon={ContactInfoIcon2} textLine="+14126992781" />
        </Grid>
        <Grid item xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine="ukcaroof@gmail.com"
            isEmail
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default contactInfo;
