import { gql } from '@apollo/client';

export const getAllTaskStatus = gql`
  query Query($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      status
    }
  }
`;
