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
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card border-primary mb-3">
                                    <div className="card-header">BBB Rating</div>
                                    <div className="card-body">
                                        <h4 className="card-title" id="rating-text">A+</h4>
                                        <a href="" className="card-text" target="#">Overview of BBB Ratings</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact</h4><hr />
                        <ul>
                            <li><i className="fas fa-phone"></i> Phone:</li>
                            <li><i className="fas fa-at"></i> Email: NWMasonryllc05@gmail.com</li>
                            <li><i className="fas fa-fax"></i> Fax: </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
