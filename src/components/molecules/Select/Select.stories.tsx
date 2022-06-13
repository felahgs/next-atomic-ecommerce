import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="condition">Condition</option>
    <option value="second">Second</option>
    <option value="third">Third</option>
    <option value="fourth">Fourt</option>
  </Select>
);
export const Default = Template.bind({});
Default.args = {
  label: 'Sort by',
  onChange: (e) => console.log('selected value: ' + e.target.value),
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  onChange: (e) => console.log('selected value: ' + e.target.value),
};
