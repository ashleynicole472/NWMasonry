import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Social</h4><hr/>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>BBB</h4><hr/>
                        <ul>
                            <li>
                                <a
                                    className="footer-links"
                                    href="https://www.bbb.org/us/wa/vancouver/profile/mason-contractors/nw-masonry-llc-1296-22649156"
                                    target="#">
                                    Better Business Burearu
                                </a>
                            </li>
                        </ul>
                        <div className="col-md-4">
                            
                        </div>

                    </div>
                    <div className="col-md-4">
                        <h4>Contact</h4><hr />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
