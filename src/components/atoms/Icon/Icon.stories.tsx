import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
  name: 'search',
  size: 45,
};

export const Close = Template.bind({});
Close.args = {
  name: 'close',
  size: 45,
};

export const Grid = Template.bind({});
Grid.args = {
  name: 'grid',
  size: 45,
};

export const List = Template.bind({});
List.args = {
  name: 'list',
  size: 45,
};

export const arrowDown = Template.bind({});
arrowDown.args = {
  name: 'arrowDown',
  size: 45,
};

export const star = Template.bind({});
star.args = {
  name: 'star',
  size: 45,
};

export const halfStar = Template.bind({});
halfStar.args = {
  name: 'halfStar',
  size: 45,
};

export const emptyStar = Template.bind({});
emptyStar.args = {
  name: 'emptyStar',
  size: 45,
};
