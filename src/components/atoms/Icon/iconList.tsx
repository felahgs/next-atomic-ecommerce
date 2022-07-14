import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { MdViewList, MdViewModule } from 'react-icons/md';
import { GoTriangleDown } from 'react-icons/go';
import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
  RiHeartLine,
  RiHeartFill,
} from 'react-icons/ri';

import { camelCaseToTitleCase } from '@utils/textConverter';

import * as T from './Icon.types';

export const ReactIcon = ({
  name,
  size,
  color,
  title,
  style,
}: T.ImportedIcon) => {
  const props = {
    style: { ...style },
    role: 'img',
    color: color,
    size: size,
    title: title,
    name: name,
    alt: `${camelCaseToTitleCase(name)} Icon`,
  };

  const iconList: T.IconList = {
    search: () => <BiSearchAlt2 {...props} />,
    close: () => <IoClose {...props} />,
    grid: () => <MdViewModule {...props} />,
    list: () => <MdViewList {...props} />,
    arrowDown: () => <GoTriangleDown {...props} />,
    star: () => <RiStarFill {...props} />,
    halfStar: () => <RiStarHalfFill {...props} />,
    emptyStar: () => <RiStarLine {...props} />,
    emptyHeart: () => <RiHeartLine {...props} />,
    heart: () => <RiHeartFill {...props} />,
  };

  return iconList[name]();
};
