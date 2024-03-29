import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('should render the component', () => {
    render(<SearchInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be able to clear the value by clicking the clear button', () => {
    render(<SearchInput />);

    const input = screen.getByRole('textbox') as HTMLTextAreaElement;
    fireEvent.change(input, { target: { value: 'testing asdf' } });

    expect(input.value).toBe('testing asdf');

    fireEvent.click(screen.getByRole('button'));
    expect(input.value).toBe('');
  });
});
