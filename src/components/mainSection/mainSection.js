import React, {Component} from "react";
import './mainSection.css';
import PostCard from "../postCard";
import NewsService from "../../services/newsService";

export default class MainSection extends Component{

    state = {
        articles: null
    };

    newsService = new NewsService();

    componentDidMount() {
        this.updateArticles();
    }

    updateArticles(){
        this.newsService.getResource('http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=94c52385b9ee4e0e88f39ca104a29429')
            .then((item) => {
                this.setState({articles: item.articles})
            })
            .catch((err) => console.log(err))
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            return <PostCard news={item}/>
        })
    };

    render() {
        // console.log(this.state.articles);

        if (!this.state.articles){
            return <div style={{height: 1000+'px'}}>Wait...</div>
        }

        const {articles} = this.state;
        const element = this.renderItems(articles);
        console.log(element);

        return (
            <section>
                <div className="wrapper">
                    <div className="content">
                        {element}
                    </div>
                </div>
            </section>
        )
    }
}