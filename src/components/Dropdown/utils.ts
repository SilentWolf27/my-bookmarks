import { DropdownPlacement } from "./types";

export function getDropdownStyles(placement: DropdownPlacement = "bottom-left"): string {
  const positions = {
    left: "left-0",
    right: "right-0",
    "top-left": "bottom-full left-0 mb-2",
    "top-right": "bottom-full right-0 mb-2",
    "bottom-left": "top-full left-0 mt-2",
    "bottom-right": "top-full right-0 mt-2",
  };

  return positions[placement] || positions["bottom-left"];
} 