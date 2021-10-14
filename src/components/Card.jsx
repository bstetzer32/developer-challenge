import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Card = ({item}) => {

    if(!item) {
        return null
    }
    return (
        <div
                css={css`
                    width: 330px;
                    height: 600px;
                    border: 1px solid black;`}
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
                        height: 340px;
                        padding: 30px;
                    `}>
                <div>
                    <h2
                    css={css`
                    	font-family: "Lobster";
                    `}
                    >{item.title.text}{` `}</h2>
                    <p
                    css={css`
	                    font-family: "Jura";
	                    font-size: 1rem;
                    `}
                    >{item.description.text}</p>
                </div>
                <div
                    css={css`
                    	align-self: end;
                    `}>
                    <button></button>
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