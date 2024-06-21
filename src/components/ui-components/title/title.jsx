import React from "react";

import "./title.scss";
import { Grid } from "@mui/material";

const title = (props) => (
  <Grid container>
    <Grid item className="big__title">
      <h2 className="weight800 font60 padding40">{props.title}</h2>
    </Grid>
  </Grid>
);

export default title;
