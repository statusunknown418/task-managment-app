import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { NextPage } from 'next';
import { PointEstimate } from '../../../__generated__/graphql-schema-generated';
export const PointsSubDropdown: NextPage = ({ children }) => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>{children}</Dropdown.Trigger>
      <Dropdown.Content>
        {Object.values(PointEstimate).map((point) => (
          <Dropdown.Item key={point}>{point}</Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
