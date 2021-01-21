import React from "react";

import classes from './SprakAvatar.module.css'

const SprakAvatar = (props) => (
    <React.Fragment>
        <img src={props.bilde} alt={props.bildeAlt} className={classes.Ava}/>
    </React.Fragment>
);

export default SprakAvatar