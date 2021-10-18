import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts';
import Card from "../components/Card";



const CardTemplate = ({ data }) => {
    data = data.prismicProduct.data
    return (
    <Layout 
        description={data.description.text}
        title={data.title.text}
    >
        <Card item={data}></Card>
    </Layout>
)}

CardTemplate.propTypes = {
  children: PropTypes.func,
}

export default CardTemplate

export const query = graphql`
    query CardQuery($id: String) {
        prismicProduct(id: {eq: $id}) {
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