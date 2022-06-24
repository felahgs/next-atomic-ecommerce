export type IconsTypes = 'search' | 'close' | 'grid' | 'list' | 'arrowDown' | 'star' | 'halfStar' | 'emptyStar'

export type Icon = {
  name: 'search' | 'close' | 'grid' | 'list' | 'arrowDown' | 'star' | 'halfStar' | 'emptyStar';
  size?: number | string;
  color?: string;
  title?: string;
  style?: {[value: string]: string}
};

export type ImportedIcon = {
  name: string;
  size?: number | string;
  color?: string;
  title?: string;
  style?: {[value: string]: string}
};

export type IconList = {
  [index: string]: () => JSX.Element
}