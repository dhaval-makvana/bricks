// packages/react/src/components/Button/Button.tsx
import React, { ForwardedRef } from "react";
import { createButton, ButtonType } from "@bricks/core";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; // Optional: for polymorphic rendering (e.g., with `Slot`)
  type?: ButtonType;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, disabled, onClick, type = "button", ...rest }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const buttonProps = createButton({ disabled, onClick, type });

    return (
      <button
        {...buttonProps}
        {...rest}
        ref={ref}
        onClick={(e) => {
          buttonProps.onClick?.(e); // e is React.MouseEvent
        }}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
