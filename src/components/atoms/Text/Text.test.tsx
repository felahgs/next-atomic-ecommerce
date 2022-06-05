import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Text } from './Text';

describe('Button', () => {
  it('should render the component', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText(/Test/g)).toBeInTheDocument();
  });

  it('should render the component with Caption attribute', () => {
    render(<Text.Caption>Test Caption</Text.Caption>);
    expect(screen.getByText(/Test Caption/g)).toBeInTheDocument();
  });

  it('should render the component with Subcaption attribute', () => {
    render(<Text.Subcaption>Test Subcaption</Text.Subcaption>);
    expect(screen.getByText(/Test Subcaption/g)).toBeInTheDocument();
  });
});
