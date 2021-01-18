import React from "react";
import {Container} from "@material-ui/core";

import classes from "./Aux.modules.css"

const aux = (props) => (
    <Container style={classes.Container}>
        {props.children}
    </Container>
);

export default aux;