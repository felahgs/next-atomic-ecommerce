import React from 'react';

import { Icon } from '@atoms/Icon';

import * as S from './Rating.style';
import * as T from './Rating.types';

import { useTheme } from 'styled-components';

export const Rating = ({ value, color, size, hideValue }: T.Rating) => {
  const theme = useTheme();

  enum RATE_STAR {
    FULL = 'star',
    HALF = 'halfStar',
    EMPTY = 'emptyStar',
  }

  const selectFill = (index: number) => {
    if (Math.floor(value) === index && value % 1 != 0) return RATE_STAR.HALF;
    if (value >= index) return RATE_STAR.FULL;
    return RATE_STAR.EMPTY;
  };

  return (
    <S.Rating style={{ color: color }}>
      {Array(5)
        .fill('')
        .map((_, i) => (
          <Icon
            color={color || theme.colors.orange[60]}
            size={size || '10px'}
            key={`star_${i}`}
            name={selectFill(i + 1)}
          />
        ))}
      {!hideValue && <S.Text>{value}</S.Text>}
    </S.Rating>
  );
};
