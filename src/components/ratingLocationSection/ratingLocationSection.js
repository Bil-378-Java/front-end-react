import React, {Component} from "react";
import './ratingLocationSection.css';

export default class RatingLocationSection extends Component{
    render() {
        return (
            <section>
                <div className="wrapper">
                    <div className="rating-location">
                        <div className="rating">
                            <span className="fa fa-star fa-lg checked"></span>
                            <span className="fa fa-star fa-lg checked"></span>
                            <span className="fa fa-star fa-lg checked"></span>
                            <span className="fa fa-star fa-lg not-checked"></span>
                            <span className="fa fa-star fa-lg not-checked"></span>
                        </div>
                        <div className="location">
                            <div className="location-logo">
                                <i className="fas fa-map-marked-alt fa-2x"></i>
                            </div>
                            <div className="location-text">
                                location
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}