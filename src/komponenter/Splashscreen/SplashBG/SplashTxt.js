import React from "react";
import {Typography} from "@material-ui/core";

const SplashTxt = (props) => (
    <Typography variant={'h3'} style={props.txtStyle}>
        <strong>Dedikerte kunnskaper <br/>
            innen<span style={{color: '#FFA652'}}> Utvikling</span></strong>
    </Typography>
);

export default SplashTxt;