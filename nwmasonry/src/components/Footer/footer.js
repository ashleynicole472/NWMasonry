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
                            <li className="li-text">
                                <i className="fas fa-map-marked"></i>
                                    Address: <br />
                                    <div className="li-indent-text">
                                        13203 SE 172nd Ave<br/>
                                    </div>
                                    <div className="li-indent-text">
                                        Ste 166-700<br />
                                    </div>
                                    <div className="li-indent-text">
                                        Happy Valley, OR 97086
                                    </div>
                                </li>
                            <li className="li-text">
                                <i className="fas fa-phone"></i>
                                Phone:
                                <div className="li-indent-text">
                                    (360)513-8352
                                </div>
                            </li>
                            <li className="li-text">
                                <i className="fas fa-at"></i>
                                Email:
                                <div className="li-indent-text">
                                    NWMasonryllc05@gmail.com
                                </div>
                            </li>
                            <li className="li-text">
                                <i className="fas fa-fax"></i>
                                Fax:
                                <div className="li-indent-text">
                                    (360)597-4798
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
