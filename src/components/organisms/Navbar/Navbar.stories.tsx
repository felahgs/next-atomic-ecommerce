import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Navbar>;

const TemplateA: ComponentStory<typeof Navbar> = () => (
  <>
    <Navbar />
  </>
);

export const Default = TemplateA.bind({});
