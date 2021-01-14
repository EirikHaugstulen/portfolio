import React from 'react'
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu} from '@material-ui/icons'



const navigation = (props) => {


    return <React.Fragment>
        <AppBar position={"sticky"} style={{backgroundColor: 'transparent', color: 'black'}}>
            <Toolbar>
                {/*<IconButton aria-label={'appIcon'} color={'inherit'}>*/}
                {/*    <Menu/>*/}
                {/*</IconButton>*/}
                <Typography variant={'h6'} color={'inherit'}>
                    Eirik Haugstulen
                </Typography>
                <div style={{flexGrow: 1}}></div>
                <Button color={'primary'}>
                    Logg inn
                </Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
};

export default navigation