import React from "react";
import {Typography} from "@material-ui/core";
import Typewriter from 'typewriter-effect'

import classes from './SplashTxt.module.css'

const SplashTxt = (props) => (
    <div className={classes.SplashTxt}>
        <Typography variant={'h3'}>
            Dedikert utvikler <br/> med erfaring innen
                <Typewriter
                    options={{
                        strings: ['Webutvikling', 'UX/UI-Design', 'Testing', 'Inkluderende design'],
                        autoStart: true,
                        loop: true
                    }}
                />
        </Typography>
    </div>

);

export default SplashTxt;