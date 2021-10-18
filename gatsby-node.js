const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    // query all products
    const {data} = await graphql(`
        query Products {
            allPrismicProduct {
                edges {
                    node {
                        id
                        data {
                        type
                        }
                    }
                }
            }
        }
    `)

    // create a page for each product, assigning the path to be the product type... 
    // ...lowercased and with spaces replaced with a dash
    data.allPrismicProduct.edges.forEach(edge => {
        node = edge.node
        actions.createPage({
			path: "/" + node.data.type.toLowerCase().replace(' ', '-'),
            component: path.resolve('./src/templates/card-template.jsx'),
            context: {id: node.id}
		});
    });
}
