import React, {Component} from "react";
import './profilePage.css';
import Header from "../../components/header2";
import AboutSection from "../../components/aboutSection";
import RatingLocationSection from "../../components/ratingLocationSection";
import GallerySection from "../../components/gallerySection";

export default class ProfilePage extends Component{
    render() {
        return (
            <>
            <Header/>
            <AboutSection/>
            <RatingLocationSection/>
            <GallerySection/>
            </>
        )
    }
}