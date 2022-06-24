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

  it('should render the component with all stars', () => {
    render(<Rating hideValue value={5} />);
    const stars = screen.queryAllByRole('img');
    const fullStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'star',
    );

    expect(fullStarsCount).toHaveLength(5);
  });

  it('should limit the redered high values to 5', () => {
    render(<Rating value={8000} />);
    const stars = screen.queryAllByRole('img');
    const fullStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'star',
    );

    expect(fullStarsCount).toHaveLength(5);
    expect(screen.queryByText(/5/g)).toBeInTheDocument();
  });

  it('should limit the redered low values to 0', () => {
    render(<Rating value={-5} />);
    const stars = screen.queryAllByRole('img');
    const emptyStarCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'emptyStar',
    );

    expect(emptyStarCount).toHaveLength(5);
    expect(screen.queryByText(/0/g)).toBeInTheDocument();
  });

  it('should render the component with a half star', () => {
    render(<Rating hideValue value={4.28} />);
    const stars = screen.queryAllByRole('img');
    const fullStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'star',
    );
    const halfStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'halfStar',
    );

    expect(fullStarsCount).toHaveLength(4);
    expect(halfStarsCount).toHaveLength(1);
  });

  it('should render the component with a half and a empty star', () => {
    render(<Rating hideValue value={3.5} />);
    const stars = screen.queryAllByRole('img');
    const fullStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'star',
    );
    const halfStarsCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'halfStar',
    );
    const emptyStarCount = stars.filter(
      (icon) => icon.getAttribute('name') === 'emptyStar',
    );

    expect(fullStarsCount).toHaveLength(3);
    expect(halfStarsCount).toHaveLength(1);
    expect(emptyStarCount).toHaveLength(1);
  });
});
