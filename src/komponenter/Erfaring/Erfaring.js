import React from 'react'
import FB from '../../SVG/Feedback Audience.svg'
import OS from '../../SVG/Online Shoping.svg'
import SU from '../../SVG/Startup.svg'

import classes from './Erfaring.module.css'
import {Grid, Typography} from "@material-ui/core";

const Erfaring = () => {

    return <React.Fragment>
        <div className={classes.Container} style={{textAlign: 'center'}}>
            <Typography variant={'h4'} >
                Hvilken nytte kan jeg ha?
            </Typography>
            <Grid container style={{paddingTop: '40px'}}>
                <Grid item md={4} xs={12} className={classes.borderGrid}>
                    <img src={FB} alt={'Tilbakemelding fra kunde'} />
                    <Typography variant={'h6'}>
                        Kravhåndtering
                    </Typography>

                    <Typography style={{marginTop: '20px', marginBottom: '40px'}}>
                        Jeg lever for å glede både eier og bruker av produktene jeg lager.
                        Min erfaring fra salg og kundeservice hjelper meg med å danne relasjoner med sluttkunde.
                    </Typography>

                </Grid>

                <Grid item md={4} xs={12} className={classes.borderGrid}>
                    <img src={OS} alt={'Design på flere enheter'} />
                    <Typography variant={'h6'}>
                        Design
                    </Typography>

                    <Typography style={{marginTop: '20px', marginBottom: '40px'}}>
                        Jeg lever for å glede både eier og bruker av produktene jeg lager.
                        Min erfaring fra salg og kundeservice hjelper meg med å danne relasjoner med sluttkunde.
                    </Typography>
                </Grid>

                <Grid item md={4} xs={12} className={classes.borderGrid}>
                    <img src={SU} alt={'Pc med bilde av rakett'} />
                    <Typography variant={'h6'}>
                        Utvikling
                    </Typography>

                    <Typography style={{marginTop: '20px', marginBottom: '40px'}}>
                        Jeg liker å glede både eier og bruker av produktene jeg lager.
                        Min erfaring fra salg og kundeservice hjelper meg med å danne relasjoner med sluttkunde.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    </React.Fragment>
}

export default Erfaring;