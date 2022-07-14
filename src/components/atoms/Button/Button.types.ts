import { ReactNode } from 'react';

import { IconsTypes } from '@atoms/Icon/Icon.types';

export type Button = {
  children?: ReactNode;
  disabled?: boolean;
  icon?: IconsTypes;
  style?: {[value: string]: string}
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'raised';
  onClick?: () => void;
};
