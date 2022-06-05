import React from 'react';

import * as S from './Badge.style';
import * as T from './Badge.types';

import { useTheme } from 'styled-components';

export const Badge = ({ color, value, children }: T.Badge) => {
  const { colors } = useTheme();

  if (!value || value <= 0) return null;

  return <S.Container>
    {children}
    <S.Badge color={color || (colors.red as string)}>{value}</S.Badge>
  </S.Container>;
};
