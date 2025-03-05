"use client";

interface MobileOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileOverlay({ isOpen, onClose }: MobileOverlayProps) {
  return (
    <div
      onClick={onClose}
      className={`md:hidden fixed inset-0 bg-black/20 z-30 transition-opacity duration-300
      ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    />
  );
}
