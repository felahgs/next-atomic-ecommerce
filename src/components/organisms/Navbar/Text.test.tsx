import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Navbar } from './Navbar';

describe('Button', () => {
  it('should render the component', () => {
    render(<Navbar />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryAllByRole('button')).toHaveLength(2);
  });
});
