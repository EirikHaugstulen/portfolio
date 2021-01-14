import './App.css';
import React, {Component} from "react";
import Navigation from './komponenter/Navigation/Navigation'


class App extends Component {
    render() {

        return (
            <React.Fragment>
                <Navigation />
            </React.Fragment>
        );
    }
}

export default App;
