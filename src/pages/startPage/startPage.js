import React, {Component} from "react";
import './startPage.css';
import Header from "../../components/header";
import MainSection from "../../components/mainSection";

export default class StartPage extends Component{
    render() {
        return (
            <>
                <Header/>
                <MainSection/>
            </>
        )
    }
}