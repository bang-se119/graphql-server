import dummy from "../dummy/index.js";

// as block handling data from client
export const resolvers = {
    Query: {
        categories: async () => {
            return dummy.categories;
        },
        products: () => {
            return dummy.products
        },
        category: (parent, args) => {
            const categoryObj = dummy.categories.find(val => val.id === args.categoryId)
            return categoryObj
        },
        product: (parent, args) => {
            const productObj = dummy.products.find(val => val.id === args.productId)
            return productObj
        }
    },
    Product: {
        creator: (parent, args) => {
            const creatorObj = dummy.creators.find(val => val.id === parent.creatorId)
            return creatorObj
        }
    },
    Category: {
        creator: (parent, args) => {
            const creatorObj = dummy.creators.find(val => val.id === parent.creatorId)
            return creatorObj
        },
        products: (parent, args) => {
            const productArr = dummy.products.filter(val => val.categoryId === parent.id)
            return productArr
        }
    }
};