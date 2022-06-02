export type SearchInput = {
  width: string;
  search: boolean;
  value?: string | number;
  onChange?: () => void;
  onClear?: () => void;
}