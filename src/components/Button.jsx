import React from "react";


const Button = ({onClick, itemText}) => {
    return (
            <button
            onClick={onClick}
            className="card-container__button">
                ORDER {itemText}
            </button>
    )
}

export default Button