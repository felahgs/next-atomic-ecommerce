import { ReactNode } from 'react';

export type Button = {
  children?: ReactNode;
  variant?: 'default' | 'raised';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};
