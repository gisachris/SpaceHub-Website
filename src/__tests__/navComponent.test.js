import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/navigation';

test('renders correctly', () => {
  const { container } = render(
    <Router>
      <Navigation />
    </Router>,
  );

  expect(container).toMatchSnapshot();
});
