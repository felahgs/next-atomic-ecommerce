import React from 'react';
import Image from 'next/image';

import { Avatar } from '@atoms/Avatar';
import { Badge } from '@atoms/Badge';
import { Button } from '@atoms/Button';
import { Text } from '@atoms/Text';
import { SearchInput } from '@molecules/SearchInput';

import * as S from './Navbar.style';

const Navbar = () => {
  return (
    <S.Navbar>
      <S.ContainerLeft>
        <Image src="/img/Logo.svg" alt="Shop logo" width={208} height={80} />
        <Text.Caption>Sell on Shopka</Text.Caption>
        <Text.Caption>Register</Text.Caption>
      </S.ContainerLeft>

      <S.ContainerCenter>
        <SearchInput />
        <Text.Caption>Consumer Eletronics</Text.Caption>
      </S.ContainerCenter>

      <S.ContainerRight>
        <Button>Sign in</Button>
        {/* TODO: add value control */}
        <Badge value={12}>
          <Button>My cart</Button>
        </Badge>
        <Avatar>FS</Avatar>
      </S.ContainerRight>
    </S.Navbar>
  );
};

export { Navbar };
