import React from 'react';

import { render, screen } from 'tests/test-utils';

import { Icon } from './Icon';
import { IconsTypes } from './Icon.types';


describe('Icon', () => {
  it.each([['search'], ['close'], ['list'], ['grid']])('should render the component', (type) => {
    render(<Icon name={type as IconsTypes} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});
