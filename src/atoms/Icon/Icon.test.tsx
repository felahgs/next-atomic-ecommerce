import React from 'react';

import { render, screen } from 'tests/test-utils';

import {Icon} from './Icon';

describe('TestPage', () => {
  it('should the component', () => {
    render(<Icon name="search" />);
    expect(screen.getByRole('img', {hidden: true})).toBeInTheDocument();
  });
});