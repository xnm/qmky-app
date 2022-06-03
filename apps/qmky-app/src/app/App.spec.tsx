import React from 'react';
import { render } from '@testing-library/react-native';

import App from '.';

test('renders correctly', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
