/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaskBoard } from '../../components/exports';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../graphql/client';

describe('TaskBoard', () => {
  it('renders without crashing', () => {
    render(
      <ApolloProvider client={apolloClient}>
        <TaskBoard />
      </ApolloProvider>
    );
  });
});
