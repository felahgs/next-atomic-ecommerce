export type Input = {
  width: string;
  search: boolean;
  value?: string | number;
  onChange?: () => void;
  onClear?: () => void;
}