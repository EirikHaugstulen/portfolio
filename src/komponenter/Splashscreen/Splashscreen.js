import React from "react";
import {Button, Container, Typography} from "@material-ui/core";
import sun from '../../SVG/Jumbo.svg'
import SplashTxt from "./SplashBG/SplashTxt";

export default function Splashscreen () {
    const txtStyle = {
        fontFamily: "Montserrat, sans-serif",
        marginTop: '300px',
        lineHeight: '1.6',
        marginBottom: '30px'
    }
    return <React.Fragment>
            <Container style={{marginBottom: '4000px'}}>
                <SplashTxt txtStyle={txtStyle} />
                <Button variant={'outlined'} color={'primary'}>Les mer</Button>
                <Button variant={'contained'} color={'primary'} style={{marginLeft: '20px'}}>Ta kontakt</Button>
            </Container>
        <img src={sun} alt={'sun'} style={{position: 'absolute', top: 0, right: 0, width: "50%"}} />
    </React.Fragment>
}