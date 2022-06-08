import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { ButtonToggle } from './ButtonToggle';

describe('ButtonToggle', () => {
  it('should render the component', () => {
    render(
      <ButtonToggle onChange={(i) => console.log(i, 'is active')}>
        <p>Item A</p>
        <p>Item B</p>
        <p>Item C</p>
      </ButtonToggle>,
    );
    expect(screen.getByText('Item A')).toBeInTheDocument();
    expect(screen.getByText('Item B')).toBeInTheDocument();
    expect(screen.getByText('Item C')).toBeInTheDocument();
  });

  it('should return the index of the selected item', () => {
    const mockChange = jest.fn();
    render(
      <ButtonToggle onChange={mockChange}>
        <p>Item A</p>
        <p>Item B</p>
        <p>Item C</p>
      </ButtonToggle>,
    );

    const itemB = screen.getByText('Item B');
    fireEvent.click(itemB);
    expect(mockChange).toBeCalledWith(1);


  });
});
