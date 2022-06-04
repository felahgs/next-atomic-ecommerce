import React from 'react';

import * as S from './Text.style';
import * as T from './Text.types';

const Text = ({ children }: T.Text) => {
  return <S.Text>{children}</S.Text>;
};

Text.Caption = function({children}: T.Text) {
  return <S.Caption>{children}</S.Caption>;
};

Text.Subcaption = function({children}: T.Text) {
  return <S.Subcaption>{children}</S.Subcaption>;
};

export { Text };
