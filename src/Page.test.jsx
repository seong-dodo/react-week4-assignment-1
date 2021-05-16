import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import Page from './Page';

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  const { getByText } = render((
    <Page />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();
});