import React from 'react'
import './ImageOnTopProduct.css'

function ImageOnTopProduct(props) {
    console.log(props);
    return (
        <div className="ImageOnTopProduct">
            <button>Add to Cart</button>
            <div className="ImageOnTopProduct-description">
                <span className="ImageOnTopProduct-title">{props.title}</span>
                <span className="ImageOnTopProduct-price">{props.price}</span>
                <span className="ImageOnTopProduct-rating">
                    <p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p><p>🌟</p>
                </span>
            </div>
            <img src={props.image} />
        </div>
    )
}

export default ImageOnTopProduct
