import React from "react";
import {Avatar} from "@material-ui/core";

import classes from './SprakAvatar.module.css'
import {Image} from "@material-ui/icons";

const SprakAvatar = (props) => (
    <React.Fragment>
        <img src={props.bilde} alt={props.bildeAlt} className={classes.Ava}/>
    </React.Fragment>
);

export default SprakAvatar