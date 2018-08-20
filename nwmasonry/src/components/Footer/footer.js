import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="title-footer">Social</h4><hr/>
                        <ul>
                            <li className="li-social-icon"><i className="fab fa-twitter-square Social-icon"></i></li>
                            <li className="li-social-icon"><i className="fab fa-google-plus-square Social-icon"></i></li>
                            <li className="li-social-icon"><i className="fab fa-facebook Social-icon"></i></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4 className="title-footer">BBB</h4><hr/>
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4">
                                <div className="bbb-rating">
                                    <p id="rating-text">BBB Rating</p>
                                    <h4 className="card-title" id="rating-text">A+</h4>
                                    <a href="https://www.bbb.org/us/wa/vancouver/profile/mason-contractors/nw-masonry-llc-1296-22649156"
                                        className="link-bbb"
                                        target="#">Overview of this BBB Rating
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className="title-footer">Contact</h4><hr />
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
