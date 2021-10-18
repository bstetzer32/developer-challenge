import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "normalize.css";
import "./Nav.css"

const Nav = () => {
    
    // Navbar using gastby-link to direct to pages created dynamically in gastby-node.js
    return (
        <div className="navbar">
            <FontAwesomeIcon 
                icon={faUserCircle}
                className="nav-user-icon nav-icon" 
                onClick={()=> console.log("User Profile Coming Soon!")}
            />
            <Link 
                to="/soup" 
                activeClassName="active"
                className="link"
            >
                <button>
                    SOUPS
                </button>
            </Link>
            <Link 
                to="/dessert" 
                activeClassName="active"
                className="link"
                // className="home"
            >
                <button>
                    DESSERTS
                </button>
            </Link>
            <Link 
                to="/pet-food" 
                activeClassName="active"
                className="link"
            >
                <button>
                    PET FOOD
                </button>
            </Link>
            <FontAwesomeIcon 
                icon={faShoppingCart}
                className="nav-cart-icon nav-icon" 
                onClick={()=> console.log("Cart Page Coming Soon!")}
            />
        </div>
    )
}

export default Nav