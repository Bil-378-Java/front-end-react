import React, {Component} from "react";
import './aboutSection.css';
import Vector from './../../images/vector.jpg'
import ProfileLogo from './../../images/profile-logo.jpg';

export default class AboutSection extends Component{
    render() {
        return (
            <section>
                <div className="wrapper">
                    <div className="main-picture" style={{backgroundImage: `url('https://s2.best-wallpaper.net/wallpaper/1920x1080/1802/Vector-picture-winter-snow-hut-night_1920x1080.jpg')`}}>
                        <div className="item1">
                            <div className="profile-logo" style={{backgroundImage: `url(${ProfileLogo})`}}></div>
                        </div>
                        <div className="item2">
                            <div className="desc">
                                <div className="name-of-company">
                                    Name of a Company
                                </div>
                                <div className="description">
                                    Short description about a company for example: our company is lalalala
                                </div>
                            </div>
                        </div>
                        <div className="item3">
                            <a href="#" className="settings-icon">
                                <i className="fas fa-cog fa-4x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}