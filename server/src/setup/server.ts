import { ApolloServer } from "apollo-server-express";
import express from "express";
import resolvers from "../resolvers";
import typeDefs from "../typeDefs";

export default async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({
    app,
    cors: true,
  });

  await new Promise((resolve) => app.listen({ port: 4000 }, () => resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
