import './App.css';
import React from "react";
import Navigation from './komponenter/Navigation/Navigation'
import Splashscreen from "./komponenter/Splashscreen/Splashscreen";
import {createMuiTheme, Grid, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import SprakModul from './komponenter/SprakModul/SprakModul'
import {dark} from "@material-ui/core/styles/createPalette";


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

                        <Grid container justify={"center"} spacing={3} style={{backgroundColor: '#f1f1f1', boxShadow: '0 0 10px -5px #000000'}}>
                            <Grid item md={8} xs={12}>
                                <SprakModul />
                            </Grid>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </React.Fragment>
        )
}

export default App;
