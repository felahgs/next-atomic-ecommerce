import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '@atoms/Text';
import { Icon } from '@atoms/Icon';

import { ButtonToggle } from './ButtonToggle';

export default {
  title: 'Molecules/ButtonToggle',
  component: ButtonToggle,
  argTypes: {},
} as ComponentMeta<typeof ButtonToggle>;

const TemplateA: ComponentStory<typeof ButtonToggle> = () => (
  <ButtonToggle onChange={(i) => console.log(i, 'is active')}>
    <Text.Subcaption style={{ color: 'inherit' }}>Show all</Text.Subcaption>
    <Text.Subcaption style={{ color: 'inherit' }}>Auction</Text.Subcaption>
    <Text.Subcaption style={{ color: 'inherit' }}>Buy now</Text.Subcaption>
  </ButtonToggle>
);

const TemplateB: ComponentStory<typeof ButtonToggle> = () => (
  <ButtonToggle onChange={(i) => console.log(i, 'is active')}>
    <Icon style={{color: 'inherit'}} name="list" />
    <Icon style={{color: 'inherit'}} name="grid" />
  </ButtonToggle>
);

export const Default = TemplateA.bind({});
Default.args = {};

export const Icons = TemplateB.bind({});
Default.args = {};
