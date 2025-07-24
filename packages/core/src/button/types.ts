export interface ButtonOptions {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent) => void;
}

export interface ButtonProps {
  role: "button";
  tabIndex: number;
  "aria-disabled"?: boolean;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick: (event: MouseEvent) => void;
}
