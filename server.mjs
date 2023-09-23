import express from 'express';
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';

const app = express();
const httpServer = http.createServer(app);

// as document in order to description (Query / Mutation / Subscription)
// # Điểm đầu tiên từ phía client truy vấn dữ liệu lên phía server đều phải đi qua 3 thằng này
const typeDefs = `#graphql
    type Query {
        name: String
    }
`;

// as block handling data from client
const resolvers = {
    Query: {
        name: () => { return 'Cosmetic' }
    }
};

// schema
// resolver
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log('🚀 Server ready at http://localhost:4000');
