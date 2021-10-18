import React from "react";
import Button from "./Button";

import "normalize.css";
import "./Card.css"


const Card = ({item}) => {

    if(!item) {
        return null
    }
    return (
        <div
                className="card-container"
        >
            <div
                className="card-container__img-container"
                >
                <img
                className="img-container__img"
                src={item.image.url}></img>
            </div>
            <div
                    className="card-container__content">
                <div></div>
                <div>
                    <h1
                    className="content__title"
                    >{item.title.text}{` `}</h1>
                    <p
                    className="content__description"
                    >{item.description.text}</p>
                </div>
                <div>
                    <Button itemText={item.quantity.text} onClick={()=> console.log(`Your order for ${item.quantity.text} of ${item.title.text} has been placed. Thank you for your business!`)}/>
                </div>
            </div>
        </div>
    )
}


export default Card
