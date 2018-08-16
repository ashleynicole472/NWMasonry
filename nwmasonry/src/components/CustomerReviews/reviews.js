import React, { Component } from 'react';
import './Reviews.css';

class Reviews extends Component{
    render(){
        return(
            <div classNameName="reviews-container">
                <div className="row">
                    <div className="col-sm-6">
                        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                            {/*Wrapper for slides*/}
                            <div className="carousel-inner" role="listbox">
                                <div className="item active">
                                    <div className="card text-white bg-primary mb-3">
                                        <div className="card-body">
                                            <blockquote className="blockquote text-right">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="card text-white bg-primary mb-3">
                                        <div className="card-body">
                                            <blockquote className="blockquote text-right">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                        <div className="card-body">
                                            <blockquote className="blockquote text-right">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="card text-white bg-primary mb-3">
                                        <div className="card-body">
                                            <blockquote className="blockquote text-right">
                                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Controls*/}
                            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Reviews;
