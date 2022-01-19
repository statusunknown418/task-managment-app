import faker from 'faker';

export const SEED_NOTIFICATIONS = [
  {
    id: 1,
    title: 'New task assigned to you',
    description: 'You have a new task',
    date: '2020-01-01',
    read: false,
  },
  {
    id: 2,
    title: 'New task',
    description: 'You have a new task',
    date: '2020-01-01',
    read: false,
  },
];

export const ASSIGNEES = [
  //  random users
  ...new Array(8).fill(0).map(() => ({
    id: Math.random(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  })),
];
