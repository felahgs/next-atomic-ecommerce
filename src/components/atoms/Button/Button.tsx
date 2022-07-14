import React from 'react';

import * as S from './Button.style';
import * as T from './Button.types';

export const Button = ({
  onClick,
  children,
  style,
  size = 'medium',
  variant = 'default',
  disabled = false,
}: T.Button) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <S.Button
      style={{ ...style }}
      onClick={handleClick}
      disabled={disabled}
      size={size}
      variant={variant}
    >
      {children}
    </S.Button>
  );
};
