import React from 'react';

import * as S from './Text.style';
import * as T from './Text.types';

const Text = ({ children, style }: T.Text) => {
  return <S.Text style={{ ...style }}>{children}</S.Text>;
};

Text.Caption = function ({ children, style }: T.Text) {
  return <S.Caption style={{ ...style }}>{children}</S.Caption>;
};

Text.Subcaption = function ({ children, style }: T.Text) {
  return <S.Subcaption style={{ ...style }}>{children}</S.Subcaption>;
};

Text.Price = function ({ children, style }: T.Text) {
  return <S.Price style={{ ...style }}>{children}</S.Price>;
};

export { Text };
