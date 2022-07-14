import React from 'react';
import Image from 'next/image';

import { Rating } from '@molecules/Rating';
import { Button } from '@atoms/Button';
import { Text } from '@atoms/Text';
import { Icon } from '@atoms/Icon';

import * as S from './ProductCard.style';
import * as T from './ProductCard.types';

import { useTheme } from 'styled-components';

const ProductCard = ({
  image,
  price,
  rating,
  description,
  shipping,
  watched = false,
}: T.ProductCard) => {
  const theme = useTheme();

  return (
    <S.ProductCard>
      <Image src={image} alt="Shop logo" width={224} height={227} />
      <Text>{description}</Text>
      <Text.Price>${price}</Text.Price>
      <Text.Subcaption>{shipping}</Text.Subcaption>
      <S.BottonContainer>
        <Rating size="15px" value={rating} />
        <Button>
          <Icon
            name={watched ? 'heart' : 'emptyHeart'}
            color={theme.colors.blue[60]}
          />
          Watch
        </Button>
      </S.BottonContainer>
    </S.ProductCard>
  );
};

export { ProductCard };
