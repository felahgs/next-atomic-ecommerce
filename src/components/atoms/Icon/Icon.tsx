import icons from './iconList';
import * as T from './Icon.types';

import { useTheme } from 'styled-components';

export const Icon = ({ name, size = 20, color, title, style }: T.Icon) => {
  const theme = useTheme();
  const customColor = color || (theme.colors.icon as string);

  return icons[name]({ size, color: customColor, title, style });
};
