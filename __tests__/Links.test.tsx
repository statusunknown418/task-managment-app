import { screen } from '@testing-library/react';
import Home from '../pages';
import { customRender } from '../utils/test-utils';

test('nextjs routing tests', () => {
  customRender(<Home />);

  const myProfileLink = screen.getByRole('link', { name: /my-profile/i });

  const selector = screen.getByText(/# my tasks/i);
  expect(myProfileLink).toBeInTheDocument();
  expect(selector).not.toBeInTheDocument();
});
