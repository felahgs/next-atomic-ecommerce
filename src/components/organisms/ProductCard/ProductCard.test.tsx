import React from 'react';

import { render, screen } from 'tests/test-utils';

import { ProductCard } from './ProductCard';

describe('Button', () => {
  it('should render the component', () => {
    render(<ProductCard />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryAllByRole('button')).toHaveLength(2);
  });
});
