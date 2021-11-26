import { gql } from '@apollo/client';

export const getTaskByStatus = gql`
  query Query($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      dueDate
      name
      tags
      pointEstimate
    }
  }
`;
