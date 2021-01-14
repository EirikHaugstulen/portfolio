import './App.css';
import React, {Component} from "react";
import Navigation from './komponenter/Navigation/Navigation'
import SplashBG from "./komponenter/Splashscreen/SplashBG/SplashBG";
import Splashscreen from "./komponenter/Splashscreen/Splashscreen";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";


const App = () =>  {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFA652',
            },
            secondary: {
                main: '#FF7329',
            },
        },
    });

        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <Navigation />
                    <Splashscreen />
                </MuiThemeProvider>
            </React.Fragment>
        )
}

export default App;
