import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@atoms/Button';

import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Button variant="raised">My Cart</Button>
  </Badge>
);
export const Default = Template.bind({});
Default.args = {
  color: 'red',
  value: 5,
};
