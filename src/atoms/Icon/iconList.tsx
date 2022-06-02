import React from 'react';
import { BiSearchAlt2,  } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import * as T from './Icon.types';

const icons = {
  search: ({size, color, title}: T.ImportedIcon) => <BiSearchAlt2 role={'img'} color={color} size={size} title={title} />,
  close: ({size, color, title}: T.ImportedIcon) => <IoClose role={'img'} color={color} size={size} title={title} />
};

export default icons;