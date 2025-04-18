const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Define Resolvers
const root = {
  message: () => "Hello, GraphQL!",
};
const graphQlServer = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables GraphQL Playground
});

module.exports = graphQlServer;
