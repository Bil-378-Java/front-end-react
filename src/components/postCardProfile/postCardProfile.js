import React from "react";
import img from "../../images/container-img/1.jpg";

export default function PostCardProfile (props) {
    const {item} = props;
    return(
        <div className="items">
            <img src={item.urlToImage} alt=""/>
            <div className="item-text">{item.title}</div>
        </div>
    )
}