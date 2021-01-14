import React, {Component} from 'react';
import {AppBar} from "@material-ui/core";

class NavState extends Component {

    state = {
        hideNav: true
    }

    componentDidMount() {
        console.log('DidMount')
        window.addEventListener('scroll', this.handleScroll);
    }

    navStyles = {
        navDefault: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'black',
            top: 0
        },
        navScroll: {
            backgroundColor: 'white',
            boxShadow: '0 4px 4px -2px rgba(0,0,0,0.2)',
            top:0
        }
    }



    handleScroll = () => {
        if (window.scrollY > 20) {
            this.setState({
                hideNav: false
            })
        }else {
            this.setState({
                hideNav: true
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.hideNav ?
                    <AppBar
                        position={"fixed"}
                        style={this.navStyles.navDefault}
                >
                    {this.props.children}
                </AppBar> :
                    <AppBar
                        position={"fixed"}
                        style={this.navStyles.navScroll}
                    >
                        {this.props.children}
                    </AppBar>
                }
            </div>
        )
    }
}

export default NavState;