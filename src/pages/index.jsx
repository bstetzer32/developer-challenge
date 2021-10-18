import React, {useEffect, useState} from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import SEO from "../components/SEO";
import Card from "../components/Card";
import Nav from "../components/Nav";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`

	background-color: #7855da;
	color: #ffffff;

	font-family: "Lobster";
	font-size: 2rem;
`;
const PhoneScreen = styled.div`

	background-color: #7855da;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 896px;
`

// ========= MAIN =========
const Index = ({ data }) => {

	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				{/* centered container for phone screen */}
				<PhoneScreen>
					<div>
						<Logo
							css={css`
							margin-left: 50px;
							`}/>
						{/* card component that rerenders when selected item changes */}
						<Card item={items[selected]}></Card>
						<div 
							css={css`
							height: 60px;
							`}/>
					</div>
					{/* nav menu that uses state to maintain location */}
					<Nav selected={selected} onClick={(e)=> setSelected(e.target.value)}/>
				</PhoneScreen>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
// Querying for all products
export const query = graphql`
	query {
		allPrismicProduct {
			edges {
			node {
				id
				data {
				description {
					text
				}
				image {
					url
				}
				quantity {
					text
				}
				title {
					text
				}
				type
				}
			}
			}
		}
	}

	`;
