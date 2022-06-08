export type IconsTypes = 'search' | 'close' | 'grid' | 'list'

export type Icon = {
  name: 'search' | 'close' | 'grid' | 'list';
  size?: number | string;
  color?: string;
  title?: string;
  style?: {[value: string]: string}
};

export type ImportedIcon = {
  size?: number | string;
  color?: string;
  title?: string;
  style?: {[value: string]: string}
};
