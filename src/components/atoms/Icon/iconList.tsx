import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { MdViewList, MdViewModule } from 'react-icons/md';
import { GoTriangleDown } from 'react-icons/go';

import * as T from './Icon.types';

const icons = {
  search: ({ size, color, title, style }: T.ImportedIcon) => (
    <BiSearchAlt2 style={{...style}} role={'img'} color={color} size={size} title={title} />
  ),
  close: ({ size, color, title, style }: T.ImportedIcon) => (
    <IoClose style={{...style}} role={'img'} color={color} size={size} title={title} />
  ),
  grid: ({ size, color, title, style }: T.ImportedIcon) => (
    <MdViewList style={{...style}} role={'img'} color={color} size={size} title={title} />
  ),
  list: ({ size, color, title, style }: T.ImportedIcon) => (
    <MdViewModule style={{...style}} role={'img'} color={color} size={size} title={title} />
  ),
  arrowDown: ({ size, color, title, style }: T.ImportedIcon) => (
    <GoTriangleDown style={{...style}} role={'img'} color={color} size={size} title={title} />
  ),
};

export default icons;
