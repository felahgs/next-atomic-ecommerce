import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Badge } from './Badge';

describe('Button', () => {
  it('should render the component', () => {
    render(<Badge value={1701}/>);
    expect(screen.getByText(/1701/g)).toBeInTheDocument();
  });

  it('should not be rendered when value is <= 0', () => {
    render(<Badge value={0}/>);
    expect(screen.queryByText(/0/g)).toBeNull();
  });
});
