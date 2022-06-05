import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Avatar } from './Avatar';

describe('Button', () => {
  it('should render the component', () => {
    render(<Avatar>Fx</Avatar>);
    expect(screen.getByText(/Fx/g)).toBeInTheDocument();
  });

  it('should not render the text when a img src is passed', () => {
    render(<Avatar src="/mocked-img">Fx</Avatar>);
    expect(screen.queryByText(/Fx/g)).not.toBeInTheDocument();
  });
});
