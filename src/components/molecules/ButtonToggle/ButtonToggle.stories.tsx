import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ButtonToggle } from './ButtonToggle';

export default {
  title: 'Molecules/ButtonToggle',
  component: ButtonToggle,
  argTypes: {},
} as ComponentMeta<typeof ButtonToggle>;

const Template: ComponentStory<typeof ButtonToggle> = () => (
  <ButtonToggle />
);

export const Default = Template.bind({});
Default.args = {};
