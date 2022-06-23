import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Rating } from './Rating';

describe('Button', () => {
  it('should render the component', () => {
    render(<Rating value={4.25} />);
    expect(screen.getByText(/4.25/g)).toBeInTheDocument();
  });

  it('should render the component without displaying the value', () => {
    render(<Rating hideValue value={4.25} />);
    expect(screen.queryByText(/4.25/g)).not.toBeInTheDocument();
  });
});
