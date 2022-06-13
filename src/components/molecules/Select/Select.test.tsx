import React from 'react';

import { fireEvent, render, screen } from 'tests/test-utils';

import { Select } from './Select';

describe('Button', () => {
  it('should render the component', () => {
    render(
      <Select onChange={jest.fn()}>
        <option value="first">First</option>
        <option value="second">Second</option>
      </Select>,
    );

    expect(screen.getByText(/First/)).toBeInTheDocument();
    expect(screen.getByText(/Second/)).toBeInTheDocument();
  });

  it('should render the component with label ans no default option selected', () => {
    render(
      <Select label="select one" onChange={jest.fn()}>
        <option value="first">First</option>
        <option value="second">Second</option>
      </Select>,
    );

    const optA = screen.getByText(/First/) as HTMLOptionElement;
    const optB = screen.getByText(/Second/) as HTMLOptionElement;

    expect(optA.selected).toBeFalsy();
    expect(optB.selected).toBeFalsy();

    expect(screen.getByText(/select one/)).toBeInTheDocument();
  });

  it('should return the selected target when triggering onChange', () => {
    const onChangeMock = jest.fn((e) => e.target.value);
    render(
      <Select onChange={onChangeMock}>
        <option value="first">First</option>
        <option value="second">Second</option>
      </Select>,
    );
    const optA = screen.getByText(/First/) as HTMLOptionElement;
    const optB = screen.getByText(/Second/) as HTMLOptionElement;

    expect(optA.selected).toBeTruthy();
    expect(optB.selected).toBeFalsy();

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'second' } });

    expect(optA.selected).toBeFalsy();
    expect(optB.selected).toBeTruthy();

    expect(onChangeMock).toBeCalledTimes(1);
  });
});
