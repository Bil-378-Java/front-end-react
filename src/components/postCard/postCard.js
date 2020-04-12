import React, {Component} from "react";
import './postCard.css';
import Logo from './../../images/container-img/1.jpg'
import PostImage from './../../images/container-img/4.jpg';
import NewsService from "../../services/newsService";

export default class PostCard extends Component{

    state = {
        news: null
    };

    componentDidMount() {
        this.setState({news: this.props.news})
    }

    render() {

        if(!this.state.news){
            return <div>Wait..</div>
        }
        const {news} = this.state;

        return (
            <div className="card-level-0">
                <div className="card-level-1">
                    <div className="card-header clearfix">
                        <div className="card-logo-and-name clearfix">
                            <div className="card-logo">
                                <img src={news.urlToImage} alt=""/>
                            </div>
                            <div className="card-company-name">
                                {news.source.name}
                            </div>
                        </div>
                        <div className="card-location">
                            <div className="card-location-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="card-location-name">location</div>
                        </div>
                    </div>
                    <div className="card-picture">
                        <img src={news.urlToImage} alt=""/>
                    </div>
                    <div className="card-likes-content">
                        <button className="card-like-button">
                            <i className="far fa-thumbs-up"></i>
                        </button>
                        <button className="card-comments-button">
                            <i className="fas fa-comment-dots"></i>
                        </button>
                        <button className="card-amoutn-of-likes-button">
                            517 likes
                        </button>
                    </div>
                    <div className="card-description">
                        <h3>Description:</h3>
                        <p>
                            {news.title}
                        </p>
                        <br/>
                        <p>
                            {news.description}
                        </p>
                        <h5>Show All Comments : 500</h5>
                    </div>
                </div>
            </div>
        )
    }
}