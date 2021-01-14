import React, {Component} from 'react'
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons'
import NavState from "./NavState/NavState";



class Navigation extends Component {


    render() {
        return (<React.Fragment>
                <NavState>
                    <Toolbar>
                        <Typography variant={'h6'} color={'inherit'}>
                            Eirik Haugstulen
                        </Typography>
                        <div style={{flexGrow: 1}}></div>
                        <Button color={'primary'}>
                            Logg inn
                        </Button>
                    </Toolbar>
                </NavState>
        </React.Fragment>)
    }
};

export default Navigation;