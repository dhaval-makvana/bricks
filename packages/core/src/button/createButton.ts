import { ButtonOptions, ButtonProps } from "./types";

export function createButton(options: ButtonOptions = {}): ButtonProps {
  const { disabled = false, onClick, type = "button" } = options;

  return {
    role: "button",
    tabIndex: disabled ? -1 : 0,
    "aria-disabled": disabled || undefined,
    type,
    disabled,
    onClick: (e: MouseEvent) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    },
  };
}
