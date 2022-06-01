import React from 'react';

import { render, screen } from 'tests/test-utils';

import {Icon} from './Icon';

describe('TestPage', () => {
  it('should the component', () => {
    render(<Icon name="search" />);

    // const heading = screen.getByText(
    //   /Testing Next.js With Jest and React Testing Library/i
    // );
    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(screen.getByRole('img', {hidden: true})).toBeInTheDocument();
  });
});