import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { Button } from './Button';

describe('Button', () => {
  it('should the component', () => {
    render(<Button onClick={jest.fn()}>Press me!</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockedClick = jest.fn();
    render(<Button onClick={mockedClick}>Press me!</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockedClick).toBeCalled();
  });
});
