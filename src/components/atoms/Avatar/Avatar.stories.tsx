import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>FS</Avatar>
);
export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'lightBlue',
};

export const Image = Template.bind({});
Image.args = {
  backgroundColor: 'lightgreen',
  src: '/img/avatar.png',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  backgroundColor: 'lightBlue',
  size: '150px',
  src: '/img/avatar.png',
};

export const ImageNoBackground = Template.bind({});
ImageNoBackground.args = {
  backgroundColor: 'lightgray',
  size: '100px',
  src: '/img/batavatar.svg',
};
