import React, {useEffect, useState} from "react";
import { graphql } from "gatsby";

import "normalize.css";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import SEO from "../components/SEO";
import Card from "../components/Card";
import { ReactComponent as Logo } from "../assets/Logo.svg";

// ========= COMPONENTS =========

// a container to fill the window, wrap all contents, and center them
const Container = styled.div`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	background-color: #7855da;
	color: #43d1e7;

	font-family: "Lobster";
	font-size: 2rem;
`;

// ========= MAIN =========
const Index = ({ data }) => {
	// get the product data from prisma
	const [items, setItems] = useState({})
	const [selected, setSelected] = useState("DESSERT")
	useEffect(()=>{
		let newItems = {}
		data.allPrismicProduct.edges.forEach((v, i) =>{
			newItems[v.node.data.type] = v.node.data
		})
		setItems(newItems)
	},[])
	// const item = data.allPrismicProduct.data;
	console.log(items)

	return (
		<>
			{/* set the page metadata */}
			<SEO title="Welcome to the Challenge" />

			<Container>
				<Logo />
				<Card item={items[selected]}></Card>
			</Container>
		</>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
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
