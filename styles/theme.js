import { colors } from './colors';

export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    titles: '#000000',
    text: '#19191D',
    subcaption: '#787885',

    ...colors,
  },
};

export const darkTheme = {
  colors: {
    background: '#1C2025',
    titles: '#D6E1DF',
    text: '#D6E1DF',

    ...colors,
  },
};
