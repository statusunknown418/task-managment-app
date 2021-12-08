import { screen } from '@testing-library/react';
import Home from '../pages';
import { customRender } from '../utils/test-utils';

describe('HomePage', () => {
  it('should render correctly', () => {
    const findText = 'Dashboard';

    customRender(<Home />);
    const link = screen.getByText(findText);

    expect(link).toBeInTheDocument();
  });
});
