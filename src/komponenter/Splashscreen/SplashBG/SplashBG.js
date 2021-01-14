import React from "react";

const SplashBG = (props) => {
    const styles = {
        height: '700px',
        padding: '30px 40px',
        width: '100%',
        background: 'url('+props.splash+')',
        textAlign: 'center',
        marginTop: '-64px',
        color: 'white',
        alignItems: 'center',
        marginBottom: '900px'
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}


export default SplashBG;