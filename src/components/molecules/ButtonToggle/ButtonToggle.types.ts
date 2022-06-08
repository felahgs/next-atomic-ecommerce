import { ReactNode } from 'react';

export type ButtonToggle = {
  children: ReactNode;
  onChange?: (activeindex: number) => void
};
