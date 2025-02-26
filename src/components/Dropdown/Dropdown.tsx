"use client";

import { useEffect, useRef, useState } from "react";
import { DropdownPlacement } from "./types";
import { getDropdownStyles } from "./utils";
import { useClickOutside } from "./hooks/useClickOutside";

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <div
      className="relative"
      ref={dropdownRef}
      aria-expanded={isOpen}
      role="menu">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute z-50 min-w-[200px] rounded-sm bg-white shadow-lg border border-gray-300 
            ${getDropdownStyles(placement)}
            ${className}`}>
          {children}
        </div>
      )}
    </div>
  );
}
