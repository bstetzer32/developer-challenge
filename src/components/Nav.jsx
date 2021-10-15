import React from "react";
import "normalize.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Nav.css"

const Nav = ({selected, onClick}) => {

    return (
        <div className="navbar">
            <FontAwesomeIcon icon={faUserCircle} className="nav-user-icon" onClick={()=> console.log("User Profile Coming Soon!")}/>
            <button value="SOUP" onClick={onClick} className={selected === "SOUP" ? "active" : null}>
                SOUPS
            </button>
            <button value="DESSERT" onClick={onClick} className={selected === "DESSERT" ? "active" : null}>
                DESSERTS
            </button>
            <button value="PET FOOD" onClick={onClick} className={selected === "PET FOOD" ? "active" : null}>
                PET FOOD
            </button>
            <FontAwesomeIcon icon={faShoppingCart} className="nav-cart-icon" onClick={()=> console.log("Cart Page Coming Soon!")}/>
        </div>
    )
}

export default Nav