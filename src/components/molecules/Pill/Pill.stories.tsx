import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pill } from './Pill';

export default {
  title: 'Molecules/Pill',
  component: Pill,
  argTypes: {},
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
export const WithClose = Template.bind({});

Default.args = {
  value: 'content',
  onClose: undefined,
};

WithClose.args = {
  value: 'content',
  onClose: () => console.log('closing action'),
};
