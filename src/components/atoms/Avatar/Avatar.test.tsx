import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Avatar } from './Avatar';

describe('Button', () => {
  it('should render the component', () => {
    render(<Avatar>Fx</Avatar>);
    expect(screen.getByText(/Fx/g)).toBeInTheDocument();
  });
});
