import { gql } from '@apollo/client';

export const getUser = gql`
  query {
    profile {
      avatar
      createdAt
      email
      fullName
      id
      type
      updatedAt
    }
  }
`;
