import React from 'react';
import Image from 'next/image';

import * as S from './Avatar.style';
import * as T from './Avatar.types';

export const Avatar = ({ children, backgroundColor, size, src }: T.Avatar) => {
  return (
    <S.Avatar bgColor={backgroundColor} src={src} size={size}>
      {src ? null : children}
    </S.Avatar>
  );
};
