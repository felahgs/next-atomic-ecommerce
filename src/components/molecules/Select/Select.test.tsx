import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Select } from './Select';

describe('Button', () => {
  it('should render the component', () => {
    render(<Select> Test </Select>);
    expect(screen.getByText(/Test/g)).toBeInTheDocument();
  });
});
