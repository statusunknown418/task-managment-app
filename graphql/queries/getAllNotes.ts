import { gql } from '@apollo/client';

export const getAllTasks = gql`
  query Query($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      name
      status
      position
    }
  }
`;
