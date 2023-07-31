// npm install @apollo/server express graphql cors body-parser
import express, { Express } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schema';


export async function InitializeApi(serverPort:number) {

  const app: Express = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers,
    introspection: process.env.NODE_ENV !== 'production',
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  app.use(
    '/',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: serverPort }, resolve));
  console.log(`🚀 Server ready at port ${serverPort}`);

}
