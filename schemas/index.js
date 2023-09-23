// as document in order to description (Query / Mutation / Subscription)
// # Điểm đầu tiên từ phía client truy vấn dữ liệu lên phía server đều phải đi qua 3 thằng này
export const typeDefs = `#graphql
    type Creator {
        id: String,
        name: String
    }

    type Product {
        id: String,
        name: String,
        short_name: String,
        creator: Creator
    }

    type Category {
        id: String,
        name: String,
        creator: Creator,
        products: [Product]
    }

    type Query {
        categories: [Category],
        category(categoryId: String): Category,
        products: [Product],
        product(productId: String): Product
    }
`;