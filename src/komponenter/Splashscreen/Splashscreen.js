import React from "react";
import {Button} from "@material-ui/core";
import sun from '../../SVG/Jumbo.svg'

import classes from './Splashscreen.module.css'
import SplashTxt from "./SplashBG/SplashTxt/SplashTxt";

export default function Splashscreen () {

    return <React.Fragment>
            <div className={classes.Container}>
                <div className={classes.Item}>
                    <SplashTxt />
                    <Button variant={'outlined'} color={'primary'}>Les mer</Button>
                    <Button variant={'contained'} color={'primary'}>Ta kontakt</Button>
                    <img src={sun} alt={'sun'} style={{position: 'absolute', top: 0, right: 0, width: '50%', zIndex: -2}} />
                </div>
            </div>

    </React.Fragment>
}