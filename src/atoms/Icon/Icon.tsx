import React from 'react';

import icons from './iconList';
import * as S from './Icon.style';
import * as T from './Icon.types';

export const Icon = ({name, size}: T.Icon) => {

  console.log('icons', icons);
  return (
    <S.Container>
      {icons[name](size)}
    </S.Container>
  );
};
