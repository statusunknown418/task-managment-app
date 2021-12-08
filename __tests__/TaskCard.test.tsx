import TestRenderer from 'react-test-renderer';
import { TaskCard } from '../components/exports';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import faker from 'faker';
import {
  GetAllTasksByStatusDocument,
  PointEstimate,
  Status,
  Task,
  TaskTag,
  UserType,
} from '../__generated__/graphql-remastered';

const mocks = [
  {
    request: {
      query: GetAllTasksByStatusDocument,
      variables: {
        input: {
          status: Status.Backlog,
        },
      },
    },

    result: {
      data: {
        tasks: [
          {
            id: faker.random.uuid(),
            name: 'new task',
            createdAt: faker.date.recent(),
            dueDate: faker.date.future(),
            tags: [TaskTag.ANDROID, TaskTag.IOS],
            creator: {
              id: faker.random.uuid(),
              fullName: faker.name.findName(),
              createdAt: faker.date.recent(),
              email: faker.internet.email(),
              updatedAt: faker.date.recent(),
              avatar: faker.image.avatar(),
              type: UserType.Candidate,
            },
            pointEstimate: PointEstimate.ONE,
          },
        ],
      },
    },
  },
];
it('should render a task card', () => {
  const taskCard = TestRenderer.create(
    <MockedProvider mocks={mocks}>
      <TaskCard task={mocks[0].result.data.tasks[0]} />
    </MockedProvider>,
  );

  const tree = taskCard;
  expect(tree.toJSON()).toMatchSnapshot();
});
