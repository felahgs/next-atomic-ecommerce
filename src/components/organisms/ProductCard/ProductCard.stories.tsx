import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from './ProductCard';

export default {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <div style={{ margin: '10px 20px' }}>
    <ProductCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image: '/shoes.jpg',
  description: 'A generic pair of shoes ready for any everyday run.',
  price: '55',
  watched: false,
  shipping: 'Ships to anywhere',
  rating: 4.5,
};
