import React, { Component } from 'react';
import ContactUs from './Contact/Contact.js';
import './Reviews.css';

class Reviews extends Component{
    render(){
        return(
            <div classNameName="reviews-container">
                <div className="row">
                    <div className="col-sm-6 col-sm-6 ">
                        <h2 className="Testimonial-text">Testimonials</h2><hr />
                        <div className="content-slider">
                          <div className="slider">
                            <div className="mask">
                              <ul>
                                <li className="anim1">
                                  <div className="quote">Hello, this is a quote from a person. They did amazing work, quick effective and clean</div>
                                  <div className="source">- Person</div>
                                </li>
                                <li className="anim2">
                                  <div className="quote">Hello, this is a quote from another person. Russell and his team did such a fantastic job, I cant bleieve this is my house. I speak very highly of him and his team and hope to do business again!</div>
                                  <div className="source">- Another person</div>
                                </li>
                                <li className="anim3">
                                  <div className="quote">Hello, this is a quote from an animal.</div>
                                  <div className="source">- Animal</div>
                                </li>
                                <li className="anim4">
                                  <div className="quote">Hello, this is a quote from a plant.</div>
                                  <div className="source">- Plant</div>
                                </li>
                                <li className="anim5">
                                  <div className="quote">How do ya like that.</div>
                                  <div className="source">- Cassidy</div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                    <ContactUs />
                </div>
            </div>
        )
    }
}
export default Reviews;
