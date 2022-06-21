import React from 'react';

import { Icon } from '@atoms/Icon';

import * as S from './Pill.style';
import * as T from './Pill.types';

export const Pill = ({ value, fontColor, background, onClose }: T.Pill) => {
  return (
    <S.Pill style={{ color: fontColor, backgroundColor: background }}>
      <S.Text>{value}</S.Text>
      {onClose && (
        <S.IconContainer aria-label="dismiss" onClick={onClose}>
          <Icon name="close" size={'18px'} />
        </S.IconContainer>
      )}
    </S.Pill>
  );
};
