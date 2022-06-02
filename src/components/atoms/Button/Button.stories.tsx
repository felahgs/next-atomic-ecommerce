import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args}>Press me!</Button>
  </>
);
export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('clicked default'),
};
export const Raised = Template.bind({});
Raised.args = {
  variant: 'raised',
  onClick: () => alert('clicked raised'),
};
