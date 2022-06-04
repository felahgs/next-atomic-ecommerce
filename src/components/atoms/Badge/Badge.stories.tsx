import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <div style={{width: '40px', height: '30px'}}>
    <Badge {...args}/>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  color: 'red',
  value: 5
};

