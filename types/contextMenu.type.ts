export type TMenuItem = {
  label?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: TMenuItem[];
  action?: () => void;
};

export type TCoords = { x: number; y: number };
