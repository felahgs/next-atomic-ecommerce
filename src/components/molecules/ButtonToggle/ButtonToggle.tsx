import React, { useState, Children } from 'react';

import * as T from './ButtonToggle.types';
import * as S from './ButtonToggle.style';

export const ButtonToggle = ({ children, onChange }: T.ButtonToggle) => {
  const [selected, setSelected] = useState(0);

  const handleClick = (index: number) => {
    setSelected(index);
    onChange && onChange(index);
  };

  return (
    <S.ButtonToggle>
      {Children.map(children, (child, index) => (
        <S.Element
          selected={index === selected}
          onClick={() => handleClick(index)}
          key={`button-toggle-element-${index}`}
        >
          {child}
        </S.Element>
      ))}
      <S.Selector position={selected} size="default" variant="raised" />
    </S.ButtonToggle>
  );
};
