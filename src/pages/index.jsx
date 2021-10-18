import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts";
import * as indexStyles from "./index.module.css"

import "normalize.css";

import Card from "../components/Card";


// ========= MAIN =========
const Index = ({ data }) => {
    data = data.prismicProduct.data

	return (
		<Layout 
			description={data.description.text}
			title={data.title.text}
		>
			{/* card component that rerenders when selected item changes */}
			<Card item={data}></Card>
		</Layout>
	);
};

export default Index;

// ========= QUERY =========
// use gatsby's graphql query to get required data
// Querying for all products
export const query = graphql`
    query HomeQuery {
        prismicProduct(id: {eq: "40a49fa0-aa00-52b4-aa05-8b502a4dacd9"}) {
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
`
