import React from "react";
import {FilterHdr, LocationCity} from "@material-ui/icons";
import {Divider, Grid, ListItem, makeStyles, Typography} from "@material-ui/core";
import Mountain from '../../SVG/Mountains.svg'
import City from '../../SVG/City.svg'
import Code from '../../SVG/code-break.svg'
import SprakAvatar from "./SprakAvatar/SprakAvatar";

import classes from './SprakModul.module.css'




const SprakModul = () => {

    return <div className={classes.container}>
        <Grid container spacing={3} direction={'row'} style={{textAlign: 'center'}}>
            <Grid item md={4} xs={12}>
                <Typography variant={"h5"}>
                    Byen ved Rondane
                </Typography>
                <SprakAvatar bilde={Mountain} bildeAlt={'Bilde av fjell'}/>
                <Typography variant={"subtitle1"}>
                    Kommer fra "Byen ved Rondane", nemlig Otta i Sel kommune.
                </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <Typography variant={"h5"}>
                    OsloMet - Storbyuniversitetet
                </Typography>
                <SprakAvatar bilde={City} bildeAlt={'Bilde av by'}/>
                <Typography variant={"subtitle1"}>
                    Bachelor i Applied Computer Science ved OsloMet - Storbyuniversitetet.
                </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <Typography variant={"h5"}>
                    Lorem ipsum
                </Typography>
                <SprakAvatar bilde={Code} bildeAlt={'Åpne og lukke-element'}/>
                <Typography variant={"subtitle1"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Grid>
        </Grid>
    </div>
};

export default SprakModul;