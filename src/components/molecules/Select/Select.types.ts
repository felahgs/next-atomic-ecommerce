import { ReactNode } from 'react';

export type Select = {
  children: ReactNode;
  label?: string;
  onChange: (e:  React.ChangeEvent<HTMLSelectElement>) => void;
};
