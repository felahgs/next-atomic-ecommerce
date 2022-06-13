import React, { useState } from 'react';

import { Icon } from '@atoms/Icon';

import * as S from './Select.style';
import * as T from './Select.types';

export const Select = ({ children, label, onChange }: T.Select) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange(e);
  };

  return (
    <>
      <S.Container offset={value.length > 0 ? label?.length || 0 : 0}>
        <S.WrapperIcon>
          <Icon size="15px" name="arrowDown" />
        </S.WrapperIcon>
        <S.Label hasValue={!!value}>{label}</S.Label>
        <S.Select value={value} onChange={(e) => handleChange(e)}>
          {!!label && (
            <option value="" style={{ display: 'none' }} disabled></option>
          )}
          {children}
        </S.Select>
      </S.Container>
    </>
  );
};
