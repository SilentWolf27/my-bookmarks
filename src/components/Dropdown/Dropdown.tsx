"use client";

import { useRef } from "react";
import { DropdownPlacement } from "./types";
import { getDropdownStyles } from "./utils";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDropdown } from "./hooks/useDropdown";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: DropdownPlacement;
  className?: string;
}

export default function Dropdown({
  trigger,
  children,
  placement = "bottom-left",
  className,
}: Props) {
  const { isOpen, toggle, close } = useDropdown();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: dropdownRef,
    handler: close,
  });

  return (
    <div
      className="relative"
      ref={dropdownRef}
      aria-expanded={isOpen}
      role="menu">
      <div onClick={toggle}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute z-50 min-w-[200px] rounded-sm bg-white shadow-lg border border-gray-300 
            ${getDropdownStyles(placement)}
            ${className}`}
          onClick={close}>
          {!children && (
            <div className="flex flex-col gap-1 p-2">
              <p className="text-sm text-gray-500">
                No hay acciones disponibles
              </p>
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
}
