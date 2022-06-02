import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchInput } from './SearchInput';

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: '1000px',
};
