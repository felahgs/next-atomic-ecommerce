import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {},
} as ComponentMeta<typeof Text>;

const TemplateA: ComponentStory<typeof Text> = (args) => (
  <>
    <Text {...args}>This is a text</Text>
  </>
);

const TemplateB: ComponentStory<typeof Text> = (args) => (
  <>
    <Text.Caption {...args}>This is a Caption</Text.Caption>
  </>
);

const TemplateC: ComponentStory<typeof Text> = (args) => (
  <>
    <Text.Subcaption {...args}>This is a subcaption</Text.Subcaption>
  </>
);

export const Default = TemplateA.bind({});
export const Title = TemplateB.bind({});
export const Subtitle = TemplateC.bind({});

