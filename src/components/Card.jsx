import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Card = ({item, children}) => {

    if(!item) {
        return null
    }
    return (
        <div
                css={css`
                    width: 330px;
                    height: 600px;
                    border: 0;
                    border-radius: 50px;
                    overflow: hidden;
	                background-color: #ffffff;
	                color: #000000;
                    box-shadow: 0 25px 25px rgb(0 0 0 / 20%);
                    `}
        >
            <div
                css={css`
                    width: 330px;
                    height: 200px;
                    overflow: hidden;`}>
                <img
                css={css`
                    width: 330px;
                    height: 200px;
                    object-fit: cover;
                    object-position: center bottom;
                    bottom: 0;
                `}
                src={item.image.url}></img>
            </div>
            <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 370px;
                        padding: 0px 30px 30px 30px;
                    `}>
                <div></div>
                <div>
                    <h1
                    css={css`
                    	font-family: "Lobster";
	                    font-size: 2.5rem;
                        font-weight: normal;
                    `}
                    >{item.title.text}{` `}</h1>
                    <p
                    css={css`
	                    font-family: "Jura";
	                    font-size: 0.9rem;
                        font-weight: lighter;
                    `}
                    >{item.description.text}</p>
                </div>
                <div>
                    <button
                    css={css`
                    	width: 100%;
                        height: 60px;
	                    font-family: "Jura";
                        border-width: 0;
                        border-radius: 15px;
	                    background-color: #da55db;
	                    color: #ffffff;
                    `}>ORDER {item.quantity.text.toUpperCase()}</button>
                </div>
            </div>
        </div>
    )
}

// // use gatsby's graphql query to get required data

export default Card

            // css={css`
            //     padding: 0px 30 px 30px 30px;
            //     display: flex;
            //     flex-direction: column;
            //     justify-content: space-between;
            // `}