import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateTaskInput = {
  dueDate: Scalars['DateTime'];
  name: Scalars['String'];
  pointEstimate: PointEstimate;
  status: Status;
  tags: Array<TaskTag>;
};

export type DeleteTaskInput = {
  id: Scalars['String'];
};

export type FilterTaskInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  pointEstimate?: InputMaybe<PointEstimate>;
  status?: InputMaybe<Status> | string;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  deleteTask: Task;
  updateTask: Task;
};

export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};

export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};

export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};

/** Estimate point for a task */
export enum PointEstimate {
  Eight = 'EIGHT',
  Four = 'FOUR',
  One = 'ONE',
  Two = 'TWO',
  Zero = 'ZERO',
}

export type Query = {
  __typename?: 'Query';
  profile: User;
  tasks: Array<Task>;
};

export type QueryTasksArgs = {
  input: FilterTaskInput;
};

/** Status for Task */
export enum Status {
  Backlog = 'BACKLOG',
  Cancelled = 'CANCELLED',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Todo = 'TODO',
}

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  dueDate: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: User;
  pointEstimate: PointEstimate;
  position: Scalars['Float'];
  status: Status;
  tags: Array<TaskTag>;
};

/** Enum for tags for tasks */
export enum TaskTag {
  Android = 'ANDROID',
  Ios = 'IOS',
  NodeJs = 'NODE_JS',
  Rails = 'RAILS',
  React = 'REACT',
}

export type UpdateTaskInput = {
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  pointEstimate?: InputMaybe<PointEstimate>;
  position?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Status>;
  tags?: InputMaybe<Array<TaskTag>>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  type: UserType;
  updatedAt: Scalars['DateTime'];
};

/** Type of the User */
export enum UserType {
  Admin = 'ADMIN',
  Candidate = 'CANDIDATE',
}

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;

export type UpdateTaskMutation = {
  __typename?: 'Mutation';
  updateTask: {
    __typename?: 'Task';
    id: string;
    name: string;
    pointEstimate: PointEstimate;
    status: Status;
    tags: Array<TaskTag>;
  };
};

export type GetAllTaskStatusQueryVariables = Exact<{
  input: FilterTaskInput;
}>;

export type GetAllTaskStatusQuery = {
  __typename?: 'Query';
  tasks: Array<{ __typename?: 'Task'; id: string; status: Status }>;
};

export type GetAllTasksByStatusQueryVariables = Exact<{
  input: FilterTaskInput;
}>;

export type GetAllTasksByStatusQuery = {
  __typename?: 'Query';
  tasks: Array<{
    __typename?: 'Task';
    id: string;
    dueDate: any;
    name: string;
    tags: Array<TaskTag>;
    pointEstimate: PointEstimate;
    owner: { __typename?: 'User'; fullName: string; id: string };
  }>;
};

export const UpdateTaskDocument = gql`
  mutation updateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(input: $updateTaskInput) {
      id
      name
      pointEstimate
      status
      tags
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTaskInput: // value for 'updateTaskInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options
  );
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const GetAllTaskStatusDocument = gql`
  query getAllTaskStatus($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      status
    }
  }
`;

/**
 * __useGetAllTaskStatusQuery__
 *
 * To run a query within a React component, call `useGetAllTaskStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTaskStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTaskStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTaskStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllTaskStatusQuery,
    GetAllTaskStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTaskStatusQuery, GetAllTaskStatusQueryVariables>(
    GetAllTaskStatusDocument,
    options
  );
}
export function useGetAllTaskStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTaskStatusQuery,
    GetAllTaskStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTaskStatusQuery, GetAllTaskStatusQueryVariables>(
    GetAllTaskStatusDocument,
    options
  );
}
export type GetAllTaskStatusQueryHookResult = ReturnType<typeof useGetAllTaskStatusQuery>;
export type GetAllTaskStatusLazyQueryHookResult = ReturnType<
  typeof useGetAllTaskStatusLazyQuery
>;
export type GetAllTaskStatusQueryResult = Apollo.QueryResult<
  GetAllTaskStatusQuery,
  GetAllTaskStatusQueryVariables
>;
export const GetAllTasksByStatusDocument = gql`
  query getAllTasksByStatus($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      dueDate
      name
      tags
      pointEstimate
      owner {
        fullName
        id
      }
    }
  }
`;

/**
 * __useGetAllTasksByStatusQuery__
 *
 * To run a query within a React component, call `useGetAllTasksByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTasksByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTasksByStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllTasksByStatusQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllTasksByStatusQuery,
    GetAllTasksByStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllTasksByStatusQuery, GetAllTasksByStatusQueryVariables>(
    GetAllTasksByStatusDocument,
    options
  );
}
export function useGetAllTasksByStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllTasksByStatusQuery,
    GetAllTasksByStatusQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllTasksByStatusQuery, GetAllTasksByStatusQueryVariables>(
    GetAllTasksByStatusDocument,
    options
  );
}
export type GetAllTasksByStatusQueryHookResult = ReturnType<
  typeof useGetAllTasksByStatusQuery
>;
export type GetAllTasksByStatusLazyQueryHookResult = ReturnType<
  typeof useGetAllTasksByStatusLazyQuery
>;
export type GetAllTasksByStatusQueryResult = Apollo.QueryResult<
  GetAllTasksByStatusQuery,
  GetAllTasksByStatusQueryVariables
>;
