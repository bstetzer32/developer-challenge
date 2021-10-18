import React from "react";
import { Link } from "gatsby-link";
import "normalize.css";
import "./Nav.css"
import { ReactComponent as FaUserCircle } from "../assets/FaUserCircle.svg";
import { ReactComponent as FaShoppingCart } from "../assets/FaShoppingCart.svg";

const Nav = () => {

    return (
        <div className="navbar">
            <FaUserCircle 
                className="nav-user-icon" 
                onClick={()=> console.log("User Profile Coming Soon!")}
            />
            <Link 
                to="/soup" 
                activeClassName="active"
            >
                SOUPS
            </Link>
            <Link 
                to="/dessert" 
                activeClassName="active"
            >
                DESSERTS
            </Link>
            <Link 
                to="/pet-food" 
                activeClassName="active"
            >
                PET FOOD
            </Link>
            <FaShoppingCart 
                className="nav-cart-icon" 
                onClick={()=> console.log("Cart Page Coming Soon!")}
            />
        </div>
    )
}

export default Nav