import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render(){
        return(
            <div classNameNameName="NavBar-Container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                          <a className="navbar-brand ComapnyName" href="#">NW Masonry LLC</a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarColor03">
                            <ul className="navbar-nav ml-auto">
                              <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Construction Services</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Project Gallery</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
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
