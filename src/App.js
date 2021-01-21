import './App.css';
import React from "react";
import Navigation from './komponenter/Navigation/Navigation'
import Splashscreen from "./komponenter/Splashscreen/Splashscreen";
import {createMuiTheme, Grid, MuiThemeProvider, responsiveFontSizes, Typography} from "@material-ui/core";
import SprakModul from './komponenter/SprakModul/SprakModul'
import {dark} from "@material-ui/core/styles/createPalette";
import Erfaring from "./komponenter/Erfaring/Erfaring";
import ErfaringHeader from "./komponenter/Erfaring/ErfaringHeader";
import BG from './SVG/Sprak.svg'


const App = () =>  {

    let theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFA652',
            },
            secondary: {
                main: '#FF7329',
            },
        },
    });

    theme = responsiveFontSizes(theme);

    let darkTheme = createMuiTheme({
        palette: {
            type: "dark"
        },
    });

    darkTheme = responsiveFontSizes(darkTheme);



        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <Navigation />
                    <Grid container justify={"center"}>
                        <Grid item xs={8} style={{height: '95vh'}}>
                            <Splashscreen />
                        </Grid>

                        {/*<Grid container justify={"center"} spacing={3} style={{padding: '15px 10px', position: 'relative', backgroundColor: '#f1f1f1'}}>*/}
                        {/*    /!*<img src={BG} alt={''} style={{position: 'absolute', width:'100%', left:0, top:0, zIndex:'-2'}}/>*!/*/}
                        {/*    <Grid item md={8} xs={12}>*/}
                        {/*        <SprakModul />*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}

                        <Grid container justify={"center"} alignItems={'baseline'} direction={'row'} spacing={3} style={{margin: 0, position: 'relative'}}>
                            <Grid xs={12} item style={{position:'absolute', top:0, left:0, width:'100%', zIndex:-1,background: 'radial-gradient(circle, rgba(255,166,82,1) 0%, rgba(255,115,41,1) 100%)', height: '40vh'}}>

                            </Grid>
                            <Grid item md={8} xs={12} style={{ marginTop: '0' , textAlign: 'center', color: '#fff'}}>
                                <ErfaringHeader />
                            </Grid>
                            <Grid item md={8} xs={12} style={{marginTop:'-10rem'}}>
                                <Erfaring />
                            </Grid>
                        </Grid>


                        <Grid container style={{background: '#c8f8b3', paddingTop: '', height: '40vh'}}>

                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </React.Fragment>
        )
}

export default App;
