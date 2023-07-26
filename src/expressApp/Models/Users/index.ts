const typeDefs = `#graphql


email:string,
isActive?: boolean;

  type User {
    email: String
    isActive: boolean
  }

  input CreateUserInput {
    email: String
  }

  input UpdateUserInput {
    isActive: boolean
  }

  type Query {
    Users: [User]
    User(email: String): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(email: String!, input: UpdateUserInput!): User
    removeUser(email: String!): User
  }
`;

export default {
    typeDefs,
    resolvers: {
        Query: {
        },
    
        Mutation: {
        },
    }
  };