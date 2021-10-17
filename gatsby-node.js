const path = require('path');

exports.createPages = async ({graphql, actions}) => {
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

    data.allPrismicProduct.edges.forEach(edge => {
        node = edge.node
        actions.createPage({
			path: "/" + node.data.type.toLowerCase().replace(' ', '-'),
            component: path.resolve('./src/pages/index.jsx'),
            context: {id: node.id}
		});
    });
}
//     query CardQuery($id: String) {
//       prismicProduct(id: {eq: $id}) {
//         data {
//           description {
//             text
//           }
//           image {
//             url
//           }
//           quantity {
//             text
//           }
//           title {
//             text
//           }
//           type
//         }
//       }
//     }