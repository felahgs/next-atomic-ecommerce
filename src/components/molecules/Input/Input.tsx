import React, {useState} from 'react';


import { Icon } from '@atoms/Icon';

import * as T from './Input.types';
import * as S from './Input.style';

import {useTheme} from 'styled-components';

export const Input = ({width, search=true}: T.Input) => {
  const [value, setValue] = useState<string>('');
  const theme = useTheme();

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleClear = () => setValue('');

  return (
    <S.Container>
      {search && <S.WrapperSearchIcon>
        <Icon name="search" />
      </S.WrapperSearchIcon>}

      <S.Input onChange={handleChange} value={value} width={width}/>

      {value.length > 0 && <S.ClearButton onClick={handleClear}>
        <Icon name="close" title="clear search" color={theme.colors.blue[60]} />
      </S.ClearButton>}
    </S.Container>
  );
};
