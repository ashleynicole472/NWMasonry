import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
            <div classNameName="NavBar-container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <h4 id="Navbar-Company-Name">NW Masonry LLC.</h4>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarColor01"
                                    aria-controls="navbarColor01"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                            <div className="collapse navbar-collapse justify-content-between ml-auto" id="navbarColor01">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/ConstructionServices">Construction Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/ProjectGallery">Project Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/AboutUs">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;
