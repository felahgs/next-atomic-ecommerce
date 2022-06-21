import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { Pill } from './Pill';

describe('Button', () => {
  it('should render the component', () => {
    render(<Pill value={'pill test'} />);
    expect(screen.getByText(/pill test/g)).toBeInTheDocument();
  });

  it('should render the component with a close icon', () => {
    const mockOnClose = jest.fn();
    render(<Pill onClose={mockOnClose} value={'pill test'} />);

    fireEvent.click(screen.getByLabelText('dismiss'));

    expect(mockOnClose).toBeCalled();
  });
});
