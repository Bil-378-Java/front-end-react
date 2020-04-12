import React, {Component} from 'react';
import './gallerySection.css';
import NewsService from "../../services/newsService";
import PostCardProfile from "../postCardProfile";

class GallerySection extends Component {

    state = {
        articles: null
    };

    newsService = new NewsService();

    renderItems = (items) => {
        return items.map((item) => {
            return (
                <PostCardProfile item={item}/>
            )
        })
    };

    componentDidMount() {
        this.updateState();
    }

    updateState = () => {
        this.newsService.getResource('http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=94c52385b9ee4e0e88f39ca104a29429')
            .then((response) => {
                this.setState({articles: response.articles})
            })
    };

    render() {
        const {articles} = this.state;

        if (!articles){
            return <div>Error...</div>
        }

        const element = this.renderItems(articles);

        return (
            <section>
                <div className="wrapper">
                    <div className="content">
                        <div className="container">
                            {element}
                        </div>
                        <div className="more-posts">
                            More Posts
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GallerySection;