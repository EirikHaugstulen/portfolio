import React, {Component} from "react";

class FotballApi extends Component {
    state = {
        loading: true,

    }

    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        return <React.Fragment>
            {this.state.loading ? <div>Laster inn...</div> : <div>Ferdig!</div>}
        </React.Fragment>
    }
}

export default FotballApi;