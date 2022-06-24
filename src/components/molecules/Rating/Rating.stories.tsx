import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';

export default {
  title: 'Molecules/Rating',
  component: Rating,
  argTypes: {},
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
export const HideValue = Template.bind({});

Default.args = {
  value: 4,
  size: '15px',
  hideValue: false,
};

HideValue.args = {
  value: 4,
  size: '15px',
  hideValue: true,
};
