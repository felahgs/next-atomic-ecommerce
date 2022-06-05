import React from 'react';

import * as S from './Badge.style';
import * as T from './Badge.types';

import { useTheme } from 'styled-components';

export const Badge = ({ color, value, children }: T.Badge) => {
  const { colors } = useTheme();
  const showBadge = !!(value && value > 0);

  return (
    <S.Container>
      {children}
      {showBadge && (
        <S.Badge color={color || (colors.red as string)}>
          {value > 99 ? '99+' : value}
        </S.Badge>
      )}
    </S.Container>
  );
};
