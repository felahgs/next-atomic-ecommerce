import React from 'react';

import { render, screen } from 'tests/test-utils';

import { ProductCard } from './ProductCard';

describe('Button', () => {
  it('should render the component', () => {
    render(
      <ProductCard
        image="/shoes.jpg"
        description="A generic pair of shoes ready for any everyday run."
        price="55"
        watched={false}
        shipping="Ships to anywhere"
        rating={4.5}
      />,
    );

    expect(screen.getByText(/generic pair of shoes/i)).toBeInTheDocument();
    expect(screen.getByText(/Ships to anywhere/i)).toBeInTheDocument();
    expect(screen.getByText('$55')).toBeInTheDocument();
  });
});
