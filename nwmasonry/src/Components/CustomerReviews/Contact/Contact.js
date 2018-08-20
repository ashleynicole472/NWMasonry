import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
    render(){
        return(
            <div className="col-sm-6 contact-container">
                <h2 className="contact-header">Contact us</h2><hr />
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="inputDefault" />
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Phone number"
                        id="inputDefault" />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Budget $"
                            id="inputDefault" />
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                        <small
                            id="emailHelp"
                            className="form-text text-muted">We will never share your email with anyone else.
                        </small>

                    <textarea
                        className="form-control"
                        id="exampleTextarea"
                        placeholder="Your message here..."
                        rows="3">
                    </textarea>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block">Submit
                    </button>
                </div>
            </div>
        )
    }
}


export default Contact;
