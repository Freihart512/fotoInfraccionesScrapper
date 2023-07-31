const typeDefs = `#graphql
type Query {
    getVersion: String!
  }
`;

const resolvers = {
  Query: {
    getVersion: () => `v1`,
  },
};

export default {
  typeDefs,
  resolvers
};
