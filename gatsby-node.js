const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions
   const productTemplate = path.resolve(`src/templates/Product.js`)
   const result = await graphql(`
   query GET_PRICES {
         allStripePrice {
         edges {
            node {
               id
               unit_amount
               product {
               name
               images
               }
            }
         }
         }
      }
      
   `)


   if (result.errors) {
      throw result.errrors
   }

   result.data.allStripePrice.edges.forEach(({ node }) => {
      createPage({
         path: `${node.id}`,
         component: productTemplate,
         context: { ...node }
      })
   })
}