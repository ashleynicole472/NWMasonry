import React, { Component } from 'react';
import './WelcomeSign.css';
import WelcomeSign from './Images/NWMWelcomeSign.png';


class WelcomeSignLogo extends Component{
    render(){
        return(
            <div className="welcomesign-container">
                <div className="row">
                    <div className="col-sm-12">
                        <img
                            className="welcomeSign"
                            src={WelcomeSign} />
                    </div>
                </div>
            </div>
        )
    }
}


export default WelcomeSignLogo;
