// Importing the gql function from the "@apollo/client" library
import { gql } from '@apollo/client';

// GraphQL query for retrieving user information
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;