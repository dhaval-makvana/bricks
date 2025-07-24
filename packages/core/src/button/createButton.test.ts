import { describe, it, expect, vi } from "vitest";
import { createButton } from "./createButton";

describe("createButton logic", () => {
  it("should return default attributes", () => {
    const result = createButton();
    expect(result.role).toBe("button");
    expect(result.tabIndex).toBe(0);
    expect(result.type).toBe("button");
    expect(result.disabled).toBeFalsy();
  });

  it("should set aria-disabled when disabled", () => {
    const result = createButton({ disabled: true });
    expect(result["aria-disabled"]).toBe(true);
    expect(result.tabIndex).toBe(-1);
  });

  it("should call onClick handler if not disabled", () => {
    const onClick = vi.fn();
    const result = createButton({ onClick });
    result.onClick?.(new MouseEvent("click") as any);
    expect(onClick).toHaveBeenCalled();
  });

  it("should NOT call onClick handler if disabled", () => {
    const onClick = vi.fn();
    const result = createButton({ onClick, disabled: true });
    result.onClick?.(new MouseEvent("click") as any);
    expect(onClick).not.toHaveBeenCalled();
  });
});
