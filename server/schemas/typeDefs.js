const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Auth{
    token: ID!
    user: User
  }

  input saveBookData{
    authors: [String]
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }
 
  type Query{
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: saveBookData): User
    removeBook(bookId: String!): User
  }
`
module.exports = typeDefs;