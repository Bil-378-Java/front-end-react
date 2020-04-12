import React, {Component} from "react";
import './header.css';
import MainLogo from './../../images/main-logo.png';
// import {Link, NavLink} from "react-router-dom/modules/Link";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="wrapper menu">
                    <div className="img-item">
                        <img className="main-photo" src={MainLogo} alt=""/>
                    </div>
                    <div className="title-item">Make Memories</div>
                    <ul className="list-item">
                        <li>
                            <Link to='/' className="i">
                                {/*<i className="fas fa-search fa-2x"></i>*/}
                                a
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className="i">
                                {/*<i className="far fa-compass fa-2x"></i>*/}
                                b
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile' className="i">
                                {/*<i className="fas fa-user fa-2x"></i>*/}
                                c
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}