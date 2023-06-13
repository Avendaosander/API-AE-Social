
export const typeDefs = `#graphql
   type Query {
      tweets: [Tweet]
   }

   type Mutation {
      createTweet(username: String, message: String): Tweet
      updateTweet(_id: ID!, like: Boolean, fav: Boolean): Tweet
      deleteTweet(_id: ID!): Tweet
   }

   type Tweet {
      _id: ID
      username: String
      message: String
      like: Boolean
      fav: Boolean
   }
`;