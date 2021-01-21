import React from "react";
import {Typography} from "@material-ui/core";
import ScrollAnimation from 'react-animate-on-scroll';

import classes from './ErfaringsHeader.module.css'

const erfaringHeader = () => (
    <div style={{padding: '100px 10px', fontWeight: "bold"}}>
        <ScrollAnimation animateIn="bounceIn">
            <Typography  variant={'h4'} style={{marginBottom: '5px', fontFamily: ''}}>
                Velkommen til min portefølje
            </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceIn" delay={500}>
            <Typography  variant={'h5'} style={{marginBottom: '5px', fontFamily: ''}}>
                Scroll for å bli kjent med meg
            </Typography>
        </ScrollAnimation>
    </div>
)

export default erfaringHeader;
